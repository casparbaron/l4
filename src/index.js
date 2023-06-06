import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import Logo from './logo.png'
import './styles.css'
import { App } from './App'
import  Footer  from './footer'
import  PopupComponent  from './widget'
import { Helmet } from 'react-helmet';


const meta = {
  title: 'Some Meta Title',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'react,meta,document,html,tags'
      }
  }
}

createRoot(document.getElementById('root')).render(
  <>
    
    <Suspense fallback={null}>
      <App />    
    </Suspense>

    <PopupComponent/>
    <img src={Logo} style={{ position: 'absolute', top: 40, left: 40, width: 30 }} />

   <Footer/>
    
  </>
)
