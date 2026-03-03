import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
function Header() {
  const [menu, setMenu] = useState(true);
  const toggleOpen = () => {
    console.log('toggleOpen');
    setMenu(true);
  };
  const toggleClose = () => {
    console.log('toggleClose');
    setMenu(false);
  };
  const { logout } = useAuth();
  const [className, setClassName] = useState(false)
  const toggleClass = ()=>{
    className ? setClassName(false) : setClassName(true)
  }
  return (
    <>
      <header className="border-b font-[sans-serif] tracking-wide relative z-50">
        <section className="py-3 bg-[#1d294f] text-white text-center px-10 d-flex justify-between align-middle">
          <p className="text-sm">
            Task Management | Taks View, Task Details, and mark
          </p>
          <button className='btn btn-secondary'  onClick={logout}>Logout</button>
        </section>
      </header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'dashboard'} 
                className={({ isActive }) =>
                    isActive ? 'nav-link navbar-brand' : 'nav-link'
                  }
                aria-current="page" >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/usereducer'} className={({ isActive }) =>
                    isActive ? 'nav-link navbar-brand' : 'nav-link'
                  } >
                  Use Reducer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/simple-update'} className={({ isActive }) =>
                    isActive ? 'nav-link navbar-brand' : 'nav-link'
                  } >
                  Use Memo / Use Callback 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/use-callback'} className={({ isActive }) =>
                    isActive ? 'nav-link navbar-brand' : 'nav-link'
                  } >
                  Use Callback with search
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/windowsizeteller'} className={({ isActive }) =>
                    isActive ? 'nav-link navbar-brand' : 'nav-link'
                  } >
                  Windowsize
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/up-lifting'} className={({ isActive }) =>
                    isActive ? 'nav-link navbar-brand' : 'nav-link'
                  } >
                  Up lifting
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink to={'/demo-redux-counter'} className={({ isActive }) =>
                    isActive ? 'nav-link navbar-brand' : 'nav-link'
                  } >
                  Redux With Middleware
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <span
                  className={`nav-link dropdown-toggle ${className ? 'show':''}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleClass}
                >
                  More Demo
                </span>
                <ul className={`dropdown-menu ${className ? 'show':''}`}>
                  <li onClick={()=>setClassName(false)}>
                    <NavLink to={'/demo-custom-hook'} className="dropdown-item" >
                      Custom Hook
                    </NavLink>
                  </li>
                  <li onClick={()=>setClassName(false)}>
                    <NavLink to={'/demo-infinite-scrolling'} className="dropdown-item" >
                      Infinite Scrolling
                    </NavLink>
                  </li>
                  <li onClick={()=>setClassName(false)}>
                    <NavLink to={'/buggy-component'} className="dropdown-item" >
                      Error Boundary
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
export default Header;
