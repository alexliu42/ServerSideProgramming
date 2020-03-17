const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connect(mongoURI);

app.use(express.static("public"));
app.use(express.urlencoded());
app.set("view engine", "pug");


const UserSchema = new Schema({
  name:{type:String, required:true},
  quantity:{type:Number, required:true}
});

let Item = mongoose.model("Item", UserSchema);

app.use(express.static("public"));
app.get("/", (request,response)=>{
  response.sendFile(__dirname + "/views/addItem.html");
});

app.post("/update_item", (req,res)=>{
  let name = req.body.update_name;
  let quantity = req.body.update_quantity;
  let item = new Item ({name:name});

  let update = {};
  if (quantity) update.quantity = quantity;
  
  updateItem(item,update,req,res);
});

let updateItem = async (item,update,req,res) => {
  let findQuery = {name:item.name};
  let doc = await Item.findOneAndUpdate(findQuery, update);
  if (doc){ 
    res.render("updateItem.pug", {
      name:item.name,
      quantity:update.quantity
    });
  }
  else{
    res.render("notFoundItem.pug", {
      name:item.name,
    });
  }
};

app.post("/findall_item", (req,res)=>{
  findAll(req,res);
});

let findAll = async (req,res) =>{
  let doc = await Item.find();
  res.render("ShoppingList.pug", {
    doc: doc
  });
};


app.post("/delete_item", (req,res)=>{
  let name = req.body.delete_name;
  let quantity = req.body.delete_quantity;
  let item = new Item ({name:name, quantity:quantity})
  deleteItem(item,req,res);
});

let deleteItem = async (item,req,res) => {
  let doc = await Item.deleteOne({name:item.name});
  if (doc.deletedCount){
    res.render("deleteItem.pug", {
      name:item.name,
      quantity:item.quantity
    });
  }
  else{
    res.render("notFoundItem.pug", {
      name:item.name,
    });
  }
}


app.post("/add_item", (req,res)=>{
  let name = req.body.add_name;
  let quantity = req.body.add_quantity;
  let item = new Item ({name:name, quantity:quantity})
  addItem(item,req,res);
});

let addItem = async (item,req,res) => {
  let doc = await Item.findOne({name:item.name});
  if (doc){
    res.render("itemExisted.pug", {
      name: item.name,
    });
  }
  else{
    await item.save();
    res.render("addItem.pug", {
      name: item.name,
      quantity: item.quantity
    });
  }
};


const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
