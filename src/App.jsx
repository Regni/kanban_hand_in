import Header from './Header'
import './App.css'
import Column from './Column'

function App() {
  

  return (
    <>
      <div>
        <Header/>
        <div className='boardContainer'>
        <Column title="toDo"/>
        <Column title="Doing"/>
        <Column title="Done"/>
        </div>
      </div>
   
    </>
  )
}

export default App
