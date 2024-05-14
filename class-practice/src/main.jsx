import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Kamyab from './Kamyab.jsx'
import TodoList from './TodoList.jsx'
import MyList from './MyList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyList/>
  </React.StrictMode>,
)
