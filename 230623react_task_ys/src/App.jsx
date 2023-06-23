import './App.css'
import Counter from './components/Counter'
import { Login } from './components/Login'
import { Lottery } from './components/Lottery'
import { Slide } from './components/Slide'
import { Todo } from './components/Todo'

function App() {

  return (
    <>
      <Counter color='red' size='30px'></Counter>
      <Login/>
      <Todo />
      <Lottery max={100} min={50} />
      <Slide />
    </>
  )
}

export default App
