list
import React from 'react';
const App=()=>{
  return <div>
    {[
      <Todo key={1} title="Learn React" done={false} />,
      <Todo key={2} title="Learn React" done={true} />,
      <Todo key={3} title="Learn React" done={false} />,
      <Todo key={4} title="Learn React" done={true} />,
    ]}
    </div>
}
function Todo({title,done}){
  return <div>
    {title}-{done ? "Done" : "Not Done"}
  </div>
}
