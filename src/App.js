import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}
let res = JSON.parse(localStorage.getItem("todos"));
function App() {
  const [todos, setTodos] = React.useState(
    res
  );

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log(newTodos + "   ---------- НЕ ТАК")
     localStorage.setItem("todos", JSON.stringify(newTodos))
     GetTodos(newTodos )
    // let  t = localStorage.getItem("todos",  JSON.stringify(newTodos))
    //  console.log(t + "   ---------- НЕ ТАК")
    //  let res = JSON.parse(localStorage.getItem("todos"));
    //  console.log(res + "   ---------- НЕ ТАК")
    //  let res2 = localStorage.getItem("todos") ;
    //  console.log(res2 + "   ---------- НЕ ТАК")
    //  GetTodos(newTodos)
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(newTodos + "  ko")
 
        removeLocalTodos(index, newTodos)
  };

  function removeLocalTodos(i,nt) {
   console.log(i)
   console.log(nt)
   localStorage.setItem("todos", JSON.stringify(nt));
  }


  function GetTodos() {
 
 let res = JSON.parse(localStorage.getItem("todos"));
 console.log(res + "------todos-------");
  return(
    <div >
        {res.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
    
         
      </div>
    
  )
}

  return (
    <div className="app">
      <div className="todo-list">
      < GetTodos/>
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App


// import React, { useState } from 'react';
// import "./App.css";



// function App() {



//   function Todo({ todo, index, completeTodo, removeTodo }) {
//     return (
//       <div
//         className="todo"
//         style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
//       >
//         {todo.text}
//         <div>
//           <button onClick={() => completeTodo(index)}>Complete</button>
//           <button onClick={() => removeTodo(index)}>x</button>
//         </div>
//       </div>
//     );
//   }
  
//   function TodoForm({ addTodo }) {
//     const [value, setValue] = React.useState("");
    
//     const handleSubmit = e => {
//       e.preventDefault();
//       if (!value) return;
//       addTodo(value);
//       setValue("");
//       saveLocalTodos(value,todos);
      
//     };
//   // console.log(addTodo);
 
//   // console.log(setValue);

//   console.log(todos);

 
    
//     return (
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           className="input"
//           value={value}
//           onChange={e => setValue(e.target.value)}
//         />
//       </form>
//     );
//   }
//   const [todos, setTodos] = useState([
     
//   ]);



//   // document.addEventListener("DOMContentLoaded", saveLocalTodos);

//   const addTodo = text => {

//     const newTodos = [...todos, { text , isCompleted: false}];
//      setTodos(newTodos);
//  console.log(...todos +   + "   addtodo")
//  console.log(text +   "   addtodo")
//  console.log(text,todos +   "   addtodo")
//      saveLocalTodos(text,todos)
    
//   };


//   // let ok = localStorage.getItem("todos", JSON.stringify(todos));
//   const removeTodo = index => {
//     const newTodos = [...todos];
//     console.log(...todos )
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     // removeLocalTodos(newTodos)
//     // console.log(index)
//     removeLocalTodos(index)
//   };

// function removeLocalTodos(todo) {
//     let todos;
//     if (localStorage.getItem("todos") === null) {
//       todos = [];
//     } else {
//       todos = JSON.parse(localStorage.getItem("todos"));
//     }
//   //  console.log(todo)
//   //  console.log(todos)
//    delete todos[todo]
//    const todos2 = todos.filter(element => element !== null);
//     localStorage.setItem("todos", JSON.stringify(todos2));
//   }
 


//   const completeTodo = index => {
//     const newTodos = [...todos];
//     newTodos[index].isCompleted = true;
//     setTodos(newTodos);
    
//   };
  
//   // let cat = localStorage.getItem("todos")
 
// function GetTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   // todos.forEach(function(todo) {
//   //  console.log('ok'+todos.length)
//   // });
//   //  let cat = localStorage.getItem("todos")
//   // console.log('ok'+todos.length)
//   return(
//     <div >
//         {todos.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//           />
//         ))}
    
         
//       </div>
    
//   )
// }
// function saveLocalTodos(todo,todosd) {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todosd));
//   console.log(todosd+"ok0k");
//   GetTodos()
// }
//   return (
//     <div className="app">
//       <div className="todo-list">
//         {/* {todos.map((todo, index) => (
//           <Todo
//             key={index}
//             index={index}
//             todo={todo}
//             completeTodo={completeTodo}
//             removeTodo={removeTodo}
//           />
//         ))} */}
//     <GetTodos/>
//         <TodoForm addTodo={addTodo} />
//         {/* <button onClick={App}>add</button> */}
//       </div>
//     </div>
//   );
// }

// export default App;
