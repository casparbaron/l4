import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import Logo from './logo.png'
import './styles.css'
import { App } from './App'
import  Footer  from './footer'
import  PopupComponent  from './widget'



createRoot(document.getElementById('root')).render(
  <>
    
    <Suspense fallback={null} >
      <App />    
    </Suspense>

    <PopupComponent/>
    
    
    <img src={Logo} style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />

    


   <Footer/>
   
   
    
  </>
)
