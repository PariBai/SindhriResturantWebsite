import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Kamyab from './Kamyab.jsx'
import TodoList from './TodoList.jsx'
import MyList from './MyList.jsx'
import Users from './Users.jsx'
import OnlineFeed from './OnlineFeed.jsx'
import fetchData from './fetchData.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OnlineFeed/>
  </React.StrictMode>,
)
