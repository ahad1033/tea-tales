import './App.css'
import Banner from './components/Banner/Banner'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import GreatTea from './components/GreatTea/GreatTea'
import MeetClient from './components/MeetClient/MeetClient'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='max-w-screen-lg mx-auto'>
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <GreatTea />
      <MeetClient />
    </div>
  )
}

export default App
