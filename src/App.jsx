import { useState } from 'react'

function App() {

  // array di oggetti
  const items = [
    { id: 1, title: "Introduzione a JavaScript" },
    { id: 2, title: "Fondamenti di HTML e CSS" },
    { id: 3, title: "React per principianti" },
    { id: 4, title: "Python: primi passi" },
    { id: 5, title: "Progetti pratici con Arduino" }
  ];

  return (
    <>
      <header><h1>Lorenzo's Blog</h1></header>

      <main>
        <div className='container'>

          {/* input form per aggiungere un nuovo articolo */}
          <div class="mb-3">
            <label for="" className="form-label">Add new article:</label>
            <input
              type="text"
              className="form-control"
              name=""
              id=""
              placeholder="New Article"
            />

          </div>


          {/* stampo in pagina la lista di articoli */}
          <ul className='list-group'>
            {
              items.map(item => {
                return <li key={item.id} className='list-group-item'>{item.title}</li>
              })
            }
          </ul>

        </div>
      </main>

    </>
  )
}

export default App
