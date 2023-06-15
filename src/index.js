import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import Logo from './logo.png'
import './styles.css'
import { App } from './App'
import  Footer  from './footer'
import  PopupComponent  from './widget'

function scrollToTop() {
  var position =
      document.body.scrollTop || document.documentElement.scrollTop;
  if (position) {
      window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 30);
  } else clearTimeout(scrollAnimation);
}




createRoot(document.getElementById('root')).render(
  <>
    
    <Suspense fallback={null} >
      <App />    
    </Suspense>

    <PopupComponent/>
    
    
    <a href="#top" onclick="scrollToTop();return false"><img  src={Logo} style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />
    </a>
    
   <Footer/>
   

    
  </>
)
