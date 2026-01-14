// // import { useState } from 'react';

// function App(){
//   return <div>
//     <b>
//       Hi bro
//     </b>
//     <Counter></Counter>
//   </div>
// }
// function Counter(){
//   const [count,setCount]=useState(0);

//   function increaseCount(){
//     setCount(count+1);
//   }
//   function decreaseCount(){
//     setCount(count-1);
//   }
//   function resetCount(){
//     setCount(0);
//   }
//   return <div>
//     <h1 id="text">{count}</h1>
//     <button onClick={increaseCount}>Increase count</button>
//     <button onClick={decreaseCount}>Decrease count</button>
//     <button onClick={resetCount}>Reset count</button>
//     </div>
// }
// export default App; //this is a function that returns a div with a h1 and a button and a function that increases the count when the button is clicked and it is exported to the main.jsx file







// using useEffect to run code only once when the component mounts
// import { useState,useEffect} from 'react';

// function App(){
//   return <div>
//     <b>
//       Hi bro
//     </b>
//     <Counter></Counter>
//   </div>
// }
// function Counter(){     
//   const [count,setCount]=useState(0);//hook to store the count, wont reinitialize when the component rerenders
//   console.log("counter");

//   useEffect(function(){
//    setInterval(function(){//this will ensure that this code only runs once even though the component keeps rerendering
//     setCount(count => count+1);
//    },1000);//if used wihout useEffect, it will keep rerunning the code every time the component rerenders
//   },[]);

//   function increaseCount(){
//     setCount(count+1);
//   }
//   function decreaseCount(){
//     setCount(count-1);
//   }
//   function resetCount(){
//     setCount(0);
//   }

//   return <div>
//     <h1 id="text">{count}</h1>
//     <button onClick={increaseCount}>Increase count</button>
//     <button onClick={decreaseCount}>Decrease count</button>
//     <button onClick={resetCount}>Reset count</button>
//     </div>
// }

// export default App; 





//conditional rendering
// import { useState,useEffect } from 'react';
// function App(){
//   const [counterVisible, setCounterVisible] = useState(true);
  
//   useEffect(function(){
//     setInterval(function(){
//       setCounterVisible(c=>!c);
//     },5000);
//    // Cleanup function to clear timeout if component unmounts
//   },[]);

//   return <div>
//     {counterVisible && <Counter></Counter> }
//   </div>
// }
// function Counter(){
//   const [count,setCount]=useState(0);//hook to store the count, wont reinitialize when the component rerenders
//   console.log("counter");

//   useEffect(function(){
//    let clock=setInterval(function(){//this will ensure that this code only runs once even though the component keeps rerendering
//     setCount(count => count+1);
//    },1000);//if used wihout useEffect, it will keep rerunning the code every time the component rerenders
//    return function(){
//     clearInterval(clock);//this will clear the interval when the component unmounts manual cleanup function
//    };
//   },[]);
//   function increaseCount(){
//     setCount(count+1);
//   }
//   function decreaseCount(){
//     setCount(count-1);
//   }
//   function resetCount(){
//     setCount(0);
//   }
//   return <div>
//     <h1 id="text">{count}</h1>
//     <button onClick={increaseCount}>Increase count</button>
//     <button onClick={decreaseCount}>Decrease count</button>
//     <button onClick={resetCount}>Reset count</button>
//     </div>
// }
// export default App; 

// import{useState,useEffect} from 'react';
// export default function App(){
//   const [count,setCount]=useState[0];
//   function IncreaseCount(){
//     setCount(count => count+1);
//   }
//   return <div>
//     <Counter count={count}/>
//     <button onClick={IncreaseCount}>Increase count</button>
//   </div>
// }

// function Counter({props}){
//   useEffect(function(){
//      console.log("mount");
//      return function(){
//       console.log("unmount");
//      }
//   },[]);
// useEffect(function(){
//   console.log("count has been changed");
// //extra add on
// // return function(){
// //   console.log("cleanup");
// // }
// },[props.count]);



//   return <div>
   
//     Counter {props.count}
//   </div>
// }


// import {useEffect, useState} from 'react';
// function App(){
//   const [showTime,setShowTime]=useState(true);
  
//   return <div style={{display:"flex"}}>
//     <Card innerContent={
//       <div style={{color:"green"}}>
//         What do you want to post<br/><br/>
//         <input type="text" placeholder="Enter your post here"/>
//       </div>
//     }/>
//     <Card innerContent={"Hello"}/>
//   </div>  
// }

// function Card({innerContent}){
//   return <span style={{backgroundColor:"white",borderRadius:"10px",color:"black",padding:"20px",margin:"10px"}}>
//     {innerContent}
//   </span>
// }

// export default App;
// //using children props
// function App(){
//   return <div style={{display:"flex"}}>
//      <Card>
//       <div style={{color:"green"}}>
//         What do you want to post<br/><br/>
//         <input type="text" placeholder="Enter your post here"/>
//       </div>
//      </Card>
//      <Card>
//       <h1>Hello</h1>
//      </Card>
//      </div>
// }
// function Card({children}){
//   return <span style={{backgroundColor:"white",borderRadius:"10px",color:"black",padding:"20px",margin:"10px"}}>
//     {children}
//   </span>
// }

//CHILDREN
//without children
// function App(){
//   return <div style={{display:"flex"}}>
//     <Card innerContent={"hi there"}/>
//     <Card innerContent={<div style={{color:"green"}}>hello there</div>}/>
//     <Card innerContent={<div style={{color:"red"}}><input type="text" placeholder="enter your name here"/></div>}/>
//   </div>
// }
// function Card({innerContent}){
//   return <div style ={{backgroundColor:"white",borderRadius:"10px",color:"black",padding:"20px",margin:"10px"}}>
//     {innerContent}
//   </div>
// }
// export default App;

//with children

// function App(){
//   return <div style={{display:"flex"}}>
//     <Card >{"hi there"}</Card >
//     <Card >{<div style={{color:"green"}}>hello there</div>}</Card>
//     <Card >{<div style={{color:"red"}}><input type="text" placeholder="enter your name here"/></div>}</Card>
//   </div>
// }
// function Card({children}){
//   return <div style ={{backgroundColor:"white",borderRadius:"10px",color:"black",padding:"20px",margin:"10px"}}>
//     {children}
//   </div>
// }
// export default App;



//list
// import React from 'react';
// const App=()=>{
//   return <div>
//     {[
//       <Todo key={1} title="Learn React" done={false} />,
//       <Todo key={2} title="Learn React" done={true} />,
//       <Todo key={3} title="Learn React" done={false} />,
//       <Todo key={4} title="Learn React" done={true} />,
//     ]}
//     </div>
// }
// function Todo({title,done}){
//   return <div>
//     {title}-{done ? "Done" : "Not Done"}
//   </div>
// }
// export default App;
//class based components is not used in react anymore but we use it in error boundary with error boundary  like if one card fails all the website wont crash while in functional components if one card fails the whole website will crash.
// you cant return multiple elements in a functional component but you can return an array of elements.
//fragment is a way to return multiple elements in a functional component without using a div.
// <></> is a fragment.
// <React.Fragment></React.Fragment> is a fragment.
// <></> is a fragment.
//

