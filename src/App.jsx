import { useState } from 'react'
import Main from './components/Main'

// let's build an array of strings 
const toDoList = [
  "Fare la spesa",
  "Chiamare il dottore",
  "Pagare le bollette",
  "Allenarsi in palestra",
  "Leggere un capitolo del libro"
]

function App() {

  // let's do the logic of the state variable, so create the array in dinamic way
  const [tasks, setTasks] = useState(toDoList)
  //add new task on the array 
  const [newTask, setNewTask] = useState('');

  // function to add the task on the array
  const addTask = (e) => {
    e.preventDefault();
    const task = newTask.trim();
    setTasks([...tasks, task]);
    setNewTask('');
  };

  //function to remove task
  const removeTask = (indexClone) => {

    const filteredArray = tasks.filter(
      (task, index) => index !== indexClone
    );
    return setTasks(filteredArray);
  };


  return (
    <>
      <main className='container'>
        <section className='mt-4 text-center'>
          <h1>Lista Cose Da Fare </h1>
          {
            tasks.map((task, index) => {
              return (
                <p key={index}>
                  {task}
                  <button className="btn btn-danger btn-sm float-end"
                    onClick={() => removeTask(index)}>
                    X
                  </button>
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
              placeholder="Cosa vorresti fare?"
              name='activity'
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
