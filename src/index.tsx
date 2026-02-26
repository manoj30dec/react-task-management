import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './commonStyle.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const getTitle = (obj: any) => {
  return obj;
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}
        <Routes>
          <Route path="/" element={<App />}>
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
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
