
import './App.css'

let todo = {
  title:"go to gym",
  description:"go to gym11",
  id:1
}

function App() {

  return (
<>
    <h1>hi therre</h1>
    {todo.title}
    {todo.description}
    {todo.id}
    </>
  )
}

export default App
