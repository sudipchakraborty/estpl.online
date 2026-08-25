import Header from '../../components/Header/Card_Header'
import LeftSideBar from '../../components/Leftcard/Card_LeftSideBar'
import MiddleContent from '../../components/Card_Middle/Card_Middle_Home'
import RightSideBar from '../../components/Card_Right/Card_RightSideBar'
import Footer from '../../components/Footer/Card_Footer'
import './landing.css'

export default function LandingPage() {
  return <div className="estpl-app-shell"><Header /><div className="estpl-workspace"><aside className="estpl-left"><LeftSideBar /></aside><main className="estpl-middle"><MiddleContent /></main><aside className="estpl-right"><RightSideBar /></aside></div><Footer /></div>
}
