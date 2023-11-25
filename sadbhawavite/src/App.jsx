import Buytickets from './components/Buytickets'
import GoogleMapComponent from './components/GoogleMapComponent'
import Newsletter from './components/Newsletter'
import Section from './components/Section'
import ImageCarousel from './components/carousel/ImageCarousel'
import './index.css'
function App() {
  return (
    <>
      <Section />
      <Buytickets />
      <ImageCarousel />
      <Newsletter />
      <GoogleMapComponent />
    </>
  )
}

export default App
