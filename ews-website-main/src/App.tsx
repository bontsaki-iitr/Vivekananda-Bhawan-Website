import appContent from './assets/data/appContent.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Facilities from './pages/Facilities'
import Authority from './pages/Authority'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { useRoute, type Route } from './routes'

const pages: Record<Route, () => React.JSX.Element> = {
  home: Home,
  facilities: Facilities,
  authority: Authority,
  gallery: Gallery,
  contact: Contact,
}

function App() {
  const route = useRoute()
  const Page = pages[route]
  const { email, phone, address } = appContent.contact

  return (
    <div className="min-h-screen flex flex-col text-slate-800 font-sans" style={{ backgroundColor: '#fbf7f1' }}>
      <Navbar active={route} />
      {/* key restarts the fade-in on every page change */}
      <main key={route} className="flex-1 page-fade">
        <Page />
      </main>
      <Footer email={email} phone={phone} address={address} />
    </div>
  )
}

export default App
