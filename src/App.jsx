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

  // variabili di stato
  const [inputValue, setInputValue] = useState("")
  const [itemsState, setItemsState] = useState(items)

  // gestione dell'invio dati dall'input allo suo useState
  function handleChange(e) {
    return setInputValue(e.target.value)
  }

  // gestione submit del form
  function handleSubmit(e) {
    e.preventDefault()

  }

  return (
    <>
      <header><h1>Lorenzo's Blog</h1></header>

      <main>
        <div className='container'>

          {/* input form per aggiungere un nuovo articolo */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputNewArt" className="form-label">Add new article:</label>
              <input
                type="text"
                className="form-control"
                id="inputNewArt"
                placeholder="New Article"
                value={inputValue}
                onChange={handleChange}
              />
            </div>
          </form>


          {/* stampo in pagina la lista di articoli */}
          <ul className='list-group'>
            {
              itemsState.map(item => {
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
