import Header from '../../components/Header/Card_Header'
import MiddleContent from '../../components/Card_Middle/Card_Middle_Home'
import Footer from '../../components/Footer/Card_Footer'
import './landing.css'

export default function LandingPage() {
  return <div className="estpl-app-shell"><Header /><main><MiddleContent /></main><Footer /></div>
}
