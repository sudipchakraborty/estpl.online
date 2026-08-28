import EstplLandingPage from './customers/estpl/LandingPage'
import CareerPage from './pages/Career/CareerPage'
import ContactPage from './pages/Contact/ContactPage'
import AboutUsPage from './pages/Company/AboutUsPage'
import EventsPage from './pages/Company/EventsPage'
import OurDirectorsPage from './pages/Company/OurDirectorsPage'
import SuccessStoriesPage from './pages/Company/SuccessStoriesPage'
import TeamPage from './pages/Company/TeamPage'

const companyPages = {
  '/career': CareerPage,
  '/contact': ContactPage,
  '/company/about': AboutUsPage,
  '/company/directors': OurDirectorsPage,
  '/company/team': TeamPage,
  '/company/events': EventsPage,
  '/company/success-stories': SuccessStoriesPage,
}

export default function App() {
  const Page = companyPages[window.location.pathname]
  return Page ? <Page /> : <EstplLandingPage />
}
