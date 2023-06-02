import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import Logo from './logo.png'
import './styles.css'
import { App } from './App'
import  Skills  from './skills'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        lfour
        <br />
        berlin creative agency
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>get in contact</div>
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
