import './App.css';
import Todo from './components/todo/todo';
import { useState } from 'react'

const TODO_COMPLETED = 'TODO-COMPLETED'
const TODO_ALL = 'TODO-ALL'
const TODO_ACTIVE = 'TODO-ACTIVE'

const SHOW = 'Show'
const HIDE = 'Hide'

function App() {

  
  const [arrOfTodo, setTodoArr] = useState([])

  let [todoStr, setTodoStr] = useState('')
  let [todoPrintParam, setTodoPrintParam] = useState(TODO_ALL)
  let [isShowing, setShowValue] = useState(false)
  let [ShowBtnStr, setShowBtnStr] = useState(SHOW)
  
  const onChangeTodoInput = (e) => {
    setTodoStr(e.target.value)
  }

  const onChangeTodoCheckbox = (index) => (e) => {
    arrOfTodo[index].isDone = e.target.checked
    setTodoArr([...arrOfTodo])
  }

  const addTodo = (e) => {
    if (todoStr === '') {
      alert ('cant set empty string')
    } else {
      setTodoArr([...arrOfTodo, {isDone: false, todoStr}])
      setTodoStr('')
    }
  }
  const showTodos = () => {
    console.log(isShowing, )
    if (isShowing) {
      setShowValue(false)
      setShowBtnStr(SHOW) 
    } else {
      setShowValue(true)
      setShowBtnStr(HIDE) 
    }
  }

  const showAllTodo = () => {
    setTodoPrintParam(TODO_ALL)
  } 

  const showActiveTodo = () => {
    setTodoPrintParam(TODO_ACTIVE)
  }

  const showCompletedTodo = () => {
    setTodoPrintParam(TODO_COMPLETED)
  }

  const clearCompletedTodo = () => {
    console.log(arrOfTodo)
    setTodoArr(arrOfTodo.filter(todo => !todo.isDone))
  }

  return (
    <div className="App">
        <h1>todos</h1>
        <div>

          <div className='Todo-header'>
            <button onClick={showTodos}>{ ShowBtnStr }</button>
            <input onChange={onChangeTodoInput} value={todoStr} placeholder="What needs to be done"/>
            <button onClick={addTodo}>Create todo</button>
          </div>

          {isShowing ? <div className='Todos'>
            { arrOfTodo.map((el, index) => {
                switch(todoPrintParam) {
                  case TODO_ALL: {
                    return <Todo key={index} isDone={el.isDone} todoStr={el.todoStr} index={index}onChangeTodoCheckbox={onChangeTodoCheckbox}/>
                  } 
                  case TODO_ACTIVE: {
                    if (!el.isDone) {
                      return <Todo key={index} isDone={el.isDone} todoStr={el.todoStr} index={index}onChangeTodoCheckbox={onChangeTodoCheckbox}/>
                    } else {
                      break
                    }
                  }
                  case TODO_COMPLETED: {
                    if (el.isDone) {
                      return <Todo key={index} isDone={el.isDone} todoStr={el.todoStr} index={index}onChangeTodoCheckbox={onChangeTodoCheckbox}/>
                    } else {
                      break
                    }
                  }
                  default : {
                    return <Todo key={index} isDone={el.isDone} todoStr={el.todoStr} index={index}onChangeTodoCheckbox={onChangeTodoCheckbox}/>
                  }
                }
              }) 
            }
          </div> : null }

          <div className='Todo-lg_btns'>
            <button onClick={showAllTodo}>all</button>
            <button onClick={showActiveTodo}>active</button>
            <button onClick={showCompletedTodo}>completed</button>
            <button onClick={clearCompletedTodo}>clear completed</button>
          </div>
        </div>
    </div>
  );
}

export default App;
