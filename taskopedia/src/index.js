import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() {
  return (
    <h1>REACT COURSE</h1>
  )
}

function MainBody() {
  return (
    <div>
      <p>
        In this course, we will learn react js by building TaskOpedia!
      </p>
      <ul>
        <li>Call Ben</li>
        <li>Go to Walmart</li>
      </ul>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      Happy Coding!
    </footer>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <MainBody />
    <Footer/>
  </div>
);
