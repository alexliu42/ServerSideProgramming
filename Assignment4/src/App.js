import React from 'react';

const App = () => {
  
  let changePic1 = ()=>{
    document.getElementsByTagName("img")[0].src ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" 
  }
  
  let changePic2 = ()=>{
    document.getElementsByTagName("img")[0].src ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png" 
  }
  
  let changePic3 = ()=>{
    document.getElementsByTagName("img")[0].src ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png" 
  }
  
  const Form = () => {
    return <form action ="/" method="get">
              <label>First Name:</label>
              <input type="text" name="first_name"/><br/>
              <label>Last Name:</label>
              <input type="text" name="last_name"/><br/>
              <label>Age:</label>
              <input type="text" name="age"/><br/>
              <input type="submit" name="submit" value="Refresh"/>
          </form>   
  }
  
  const Buttons = () => {
    return (
      <>
        <button onClick = {changePic1} >Image1</button>
        <button onClick = {changePic2} >Image2</button>
        <button onClick = {changePic3} >Image3</button>  
      </>
    )
  }
  
  const Image = () => {
    return <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"/>
  }
  
  
  return (
    <div>
      <Form/>
      <Image/>
      <Buttons/>
    </div> 
  )
}

export default App;
