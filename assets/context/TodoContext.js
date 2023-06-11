import React,{createContext} from 'react'
import reducer from './reducer'

const initialState = {
    todos:[
        {task:'do something'},
        {task:'do something'},
        {task:'do something'},
        {task:'do something'},


    ]
}


export const TodoContext = createContext();



//create

//read


//update


//delete
function TodoContextProvider ({children}) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    dispatch({ type: START_REQUEST });
  };

  const updateTodo = () => {
    dispatch({ type: END_REQUEST });
  };

  const deleteTodo = () => {
    dispatch({ type: MOBILE_NAV_HIDE });
  };


  return (
    <TodoContext.Provider value={{...state,addTodo,updateTodo,deleteTodo}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider