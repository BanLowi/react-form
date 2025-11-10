import { useState } from 'react'

function App() {

  const items = [
    { id: 1, title: "Introduzione a JavaScript" },
    { id: 2, title: "Fondamenti di HTML e CSS" },
    { id: 3, title: "React per principianti" },
    { id: 4, title: "Python: primi passi" },
    { id: 5, title: "Progetti pratici con Arduino" }
  ];

  return (
    <>

      <header><h1>To-do List</h1></header>
      <main>
        <form>
          <ul>
            {
              items.map(item => (
                <li key={item.id}>{item.title}</li>
              ))
            }
          </ul>
        </form>
      </main>

    </>
  )
}

export default App
