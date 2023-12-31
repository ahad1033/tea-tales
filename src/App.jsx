import './App.css'
import Banner from './components/Banner/Banner'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Footer from './components/Footer/Footer'
import GreatTea from './components/GreatTea/GreatTea'
import MeetClient from './components/MeetClient/MeetClient'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'

function App() {

  return (
    <div className='max-w-screen-lg mx-auto'>
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <GreatTea />
      <MeetClient />
      <News />
      <Footer />
    </div>
  )
}

export default App
