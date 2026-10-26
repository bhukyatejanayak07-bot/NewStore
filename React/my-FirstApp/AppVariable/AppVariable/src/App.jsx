//  import React from "react";
// function App(){
//   let count=10;
//   function IncreaseCount(){
//    count++;
// console.log(count)    
//   }
//   return(
// <div id="App">
// <h2>
// Like/Cart:{count}
//   </h2>
//   <button onClick={IncreaseCount}>
//     Increase</button></div>
    

//   )

// }
// export default App// calling App function










                //UseState
                // import React from "react";
  import { useState } from "react";
//  function App(){
//  const [Like,SetLike]=useState(10)
//  function IncreaseLike(){
// SetLike(Like+1)
// console.log(Like)
//   }
//   return(
// <div id="App">
// <h2>
// Like/Cart:{Like}
//   </h2>
//   <button onClick={IncreaseLike}>
//     Increase</button></div>
//   )

// }




// function App(){
//  const [Show,setShow]=useState(false)


  
//   return(
// <div id="App">
//   <input type={Show?"text":"password"}  placeholder="Enter Password" />
//   <button onClick={()=>setShow(!Show)}>Show/Hide</button>
//   </div>

//   )

// }
// import Button from "./Addbtnn"
function App(){
 const [follow,setfollow]=useState(false)

  
  return(
<div id="App">


  <button onClick={()=>setfollow(!follow)}>{follow?"Following":"Follow"}
    </button>
  {/* <input type={Show?"text":"password"}  placeholder="Enter Password" />
  <button onClick={()=>setShow(!Show)}>Show/Hide</button> */}
  </div>

  )

}


export default App