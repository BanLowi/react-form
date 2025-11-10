import { useState } from 'react'

function App() {
  /* state variable for user input */

  const items = [
    { id: 1, title: "Introduzione a JavaScript" },
    { id: 2, title: "Fondamenti di HTML e CSS" },
    { id: 3, title: "React per principianti" },
    { id: 4, title: "Python: primi passi" },
    { id: 5, title: "Progetti pratici con Arduino" }
  ];

  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState(items)

  function handleChange(e) {
    console.log(e);
    setNewTask(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(newTask);

    if (newTask.length > 0) {
      console.log(newTask);
      const obj = {
        id: tasks.length + 1,
        title: newTask
      }
      console.log(obj.id);

      const taskList = [...tasks, obj];
      setTasks(taskList)
      console.log(taskList);
    }

  }

  return (
    <>

      <header><h1>To-do List</h1></header>
      <main>
        <div className="container">
          <form onSubmit={handleSubmit}>


            <div className="input-group mb-3">
              <input type="text" className="form-control" value={newTask} onChange={handleChange} placeholder="New Task" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Button</button>
            </div>


          </form>
          <ul>
            {
              tasks.map(item => (
                <li key={item.id}>{item.title}</li>
              ))
            }
          </ul>
        </div>
      </main>

    </>
  )
}

export default App
