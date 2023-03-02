import React from 'react';
import ReactDOM from 'react-dom/client';

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  )
}

function MainHeader() {
  return (
    <h1>REACT COURSE</h1>
  )
}

function SubHeader() {
  return (
    <p>This is an exciting course</p>
  )
}

function MainBody() {
  const whatWeWillLearn = "React JS"
  const numberOfLectures = 3;

  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOpedia!<br></br>
        Total Lecture - {numberOfLectures}
      </p>
      
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
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
