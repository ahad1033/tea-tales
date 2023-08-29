import './App.css'
import Banner from './components/Banner/Banner'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='max-w-screen-lg mx-auto'>
      <Navbar />
      <Banner />
      <FeaturedProducts />
    </div>
  )
}

export default App
