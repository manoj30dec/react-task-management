import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import DashBoard from './components/DashBoard/DashBoard';
import EditTask from './components/EditTask/EditTask';
import TaskDetail from './components/TaskDetail/TaskDetail';
import UseReducerExample from './components/UseReducerExample/UseReducerExample';
import WindowDimensions from './components/WindowDimensions/WindowDimensions';
import SendParent from './components/SendParent/SendParent';
import SimpleUpdate from './components/SimpleUpdate/SimpleUpdate';
import Search from './components/Search/Search';
import BuggyComponent from './components/BuggyComponent/BuggyComponent';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import DemoCounter from './components/DemoCounter/DemoCounter';


function App() {
  const getTitle = (obj: any) => {
  return obj;
};
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<DashBoard />} />
            <Route path="/edit/:id" element={<EditTask />} />
            <Route path="/detail/:id" element={<TaskDetail />} />
            <Route path="/usereducer" element={<UseReducerExample />} />
            <Route path="/simple-update" element={<SimpleUpdate />} />
            <Route path="/use-callback" element={<Search />} />
            <Route path="/windowsizeteller" element={<WindowDimensions />} />
            <Route
              path="/Sent-to-parent"
              element={<SendParent color={'Red'} getTitle={getTitle} />}
            />
            {/* <Route path="/buggy-component" element={<BuggyComponent />} /> */}
            <Route path="/buggy-component" 
              element={
                <ErrorBoundary>
                  <BuggyComponent />
                </ErrorBoundary>
              } 
            />
            <Route path="/demo-counter" element={<DemoCounter />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
