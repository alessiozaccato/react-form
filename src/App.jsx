import { useState } from 'react'
import Main from './components/Main'

function App() {

  // let's build an array of strings 
  const toDoList = [
    "Fare la spesa",
    "Chiamare il dottore",
    "Pagare le bollette",
    "Allenarsi in palestra",
    "Leggere un capitolo del libro"
  ]

  // let's do the logic of the state variable
  const [tasks, setTasks] = useState(toDoList)
  //add new task on the array 
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    const task = newTask.trim();
    setTasks([...tasks, task]);
    setNewTask('');
  };


  return (
    <>
      <main className='container'>
        <section className='mt-4 text-center'>
          <h1>Lista Cose Da Fare </h1>
          {
            toDoList.map((task, index) => {
              return (
                <p key={index}>
                  {task}
                </p>
              )

            })
          }

        </section>
        <section>
          <form onSubmit={addTask}>
            <input
              type="text"
              className="form-control"
              placeholder="Cosa devi fare?"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="btn btn-primary mt-3">Aggiungi</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
