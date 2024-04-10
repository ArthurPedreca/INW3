import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contato from './Componentes/Pages/Contato.jsx'
import Servico from './Componentes/Pages/Servico.jsx'
import SobreNos from './Componentes/Pages/SobreNos.jsx'

const arthur = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {path: 'sobre', element: <SobreNos/>},
      {path: 'servicos', element: <Servico/>},
      {path: 'contato', element: <Contato/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={arthur}/>
  </React.StrictMode>,
)
