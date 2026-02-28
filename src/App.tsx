import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import DashBoard from './components/DashBoard/DashBoard';
import EditTask from './components/EditTask/EditTask';
import TaskDetail from './components/TaskDetail/TaskDetail';
import UseReducerExample from './components/UseReducerExample/UseReducerExample';
import WindowDimensions from './components/WindowDimensions/WindowDimensions';
import UpliftingParent from './components/UpliftingParent/UpliftingParent';
import SimpleUpdate from './components/SimpleUpdate/SimpleUpdate';
import Search from './components/Search/Search';
import BuggyComponent from './components/BuggyComponent/BuggyComponent';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import DemoCounter from './components/DemoCounter/DemoCounter';
import PublicRoute from './components/PublicRoute';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';
import InfiniteScrolling from './components/InfiniteScrolling/InfiniteScrolling';


function App() {
  return (
    <>
        <Routes>
            <Route index element={<Navigate to="/login" replace />} />
            <Route path={'/login'} element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }/>
            <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                <Route path="dashboard" element={<DashBoard />} />
                <Route path="/edit/:id" element={<EditTask />} />
                <Route path="/detail/:id" element={<TaskDetail />} />
                <Route path="/usereducer" element={<UseReducerExample />} />
                <Route path="/simple-update" element={<SimpleUpdate />} />
                <Route path="/use-callback" element={<Search />} />
                <Route path="/windowsizeteller" element={<WindowDimensions />} />
                <Route
                  path="/up-lifting"
                  element={<UpliftingParent  />}
                />
                 <Route path="/demo-redux-counter" element={<DemoCounter />} />
                 <Route path="/demo-infinite-scrolling" element={<InfiniteScrolling />} />
              </Route>
            </Route>
            
            
            <Route path="*" element={<NotFound />} />
            <Route path="/buggy-component" 
              element={
                <ErrorBoundary>
                  <BuggyComponent />
                </ErrorBoundary>
              } 
            />
           
    
        </Routes>
    </>
  );
}

export default App;
