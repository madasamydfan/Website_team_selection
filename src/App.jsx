
import './App.css'
import NavBar from './sections/NavBar'
import AboutUs from './sections/AboutUs'
import Login from './sections/Login'
import Contactus from './sections/Contactus'
import Ourservices from './sections/Ourservices'
import Rights from './sections/Rights'
function App() {
  

  return (
    <>
    <section className='bgcolor1'>
    <NavBar/>
    <AboutUs/>
    </section>
    <Login></Login>
      <Ourservices></Ourservices>
      <Contactus></Contactus>
      <Rights></Rights>
    </>
  )
}

export default App
