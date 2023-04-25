import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./index.scss"

// ---- Imports des pages ---- // 
import Error404 from './pages/Error404'
import DefaultLayout from './layouts/default'
import Accueil, {loader as homeLoader} from './pages/Accueil'
import Portrait from './pages/Portrait'
import ApplicationsEtOutils from './pages/ApplicationsEtOutils'
import Contact from './pages/Contact'
import Deontologie from './pages/Déontologie'
import MentionsLegales from './pages/MentionsLégales'
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialité'

const router = createBrowserRouter([{ // Création du router.
    path : '/', 
    element : <DefaultLayout/>, // Le header et le footer sont dans le DefaultLayout.
    children: [ // Ici on définit toutes les pages et les URL.
      {
        path : '',
        element : <Accueil/>,
        loader : homeLoader
      },
      {
        path : 'portrait',
        element : <Portrait/>
      },
      {
        path : 'applications-et-outils',
        element : <ApplicationsEtOutils/>
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'mentions-legales',
        element : <MentionsLegales/>
      },
      {
        path : 'politique-confidentialite',
        element : <PolitiqueConfidentialite/>
      },
      {
        path : 'deontologie',
        element : <Deontologie/>
      }
    ],
    errorElement: <Error404/> //La page 404 ne contient pas le DefaultLayout.
 }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
