import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import Logo from './logo.png'
import './styles.css'
import { App } from './App'
import  Skills  from './skills'
import  PopupComponent  from './widget'

function Overlay() {
  return (
    <div className='navbar'>
      <a className='navbar-title'>
        lfour
        <br />
        berlin creative agency
        <PopupComponent/> 
      </a>
      <a className='navbar-button'>
        test
       </a>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
      
    </Suspense>
    <Overlay />
    <img src={Logo} style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />
    
  </>
)
