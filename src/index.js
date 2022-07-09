import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import './components/css/bootstrap.css';
import Heading from './components/Heading';
import App from './components/App';
import PostIt from './components/PostIt';
import Container from "./components/Containers";
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

function CreateContainer(info) {
  return (
    <PostIt
      key={info.id} 
      name={info.name}
      favorite_food={info.favorite_food}
      bios={info.bios}
      policy={info.policy}
    />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div> 
      <Heading />
      {Container.map(CreateContainer)}
    </div>
    <Footer />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();