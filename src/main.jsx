import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css' // デフォルトのindex.cssは不要なら削除または空にする

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)