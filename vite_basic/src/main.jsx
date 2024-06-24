import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

const Costomelement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)
const reactelement = React.createElement(
  'a',
  {
   href: "https://google.com", target:'_blank'
  },
  'visit google by react ele',
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <App />

    <AboutPage />
    {/* {AboutPage()} this will work  */}
    {/* {AboutPage} this will not work for function  */}

    {Costomelement }
    {/* <Costomelement /> */}{/*this will not work*/} 
    <br />
    {reactelement}

  </React.StrictMode>,
)
