import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div className="block">
      <Header />
      <div id="mainwrapper" className="flex w-full">
        <div id="maincontent" className="p-4 w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout