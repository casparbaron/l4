import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import Logo from './logo.png'
import './styles.css'
import { App } from './components/App'
import Footer from './components/footer'
import PopupComponent from './components/widget'

const reloadPage = () => {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.reload();
  }, 500);
}

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <PopupComponent />
    <img src={Logo} style={{ position: 'absolute', top: 40, left: 40, width: 30, cursor: 'pointer' }} onClick={reloadPage} />
    <Footer />
  </>
)
