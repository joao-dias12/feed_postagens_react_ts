import React from 'react'
import ReactDOM from 'react-dom/client'
// Importando a função App do arquivo App.jsx
import { App } from './App'

// Pengando o index.html , pegando a div com "id"=root e renderizando o que está em "App"
ReactDOM.createRoot(document.getElementById('root')!).render( // Forçando a div com "id"=root  está garantida
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
