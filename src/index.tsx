import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './commonStyle.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
// import DashBoard from './components/DashBoard/DashBoard';
// import EditTask from './components/EditTask/EditTask';
// import TaskDetail from './components/TaskDetail/TaskDetail';
// import UseReducerExample from './components/UseReducerExample/UseReducerExample';
// import WindowDimensions from './components/WindowDimensions/WindowDimensions';
// import SendParent from './components/SendParent/SendParent';
// import SimpleUpdate from './components/SimpleUpdate/SimpleUpdate';
// import Search from './components/Search/Search';
// import BuggyComponent from './components/BuggyComponent/BuggyComponent';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
// import DemoCounter from './components/DemoCounter/DemoCounter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
