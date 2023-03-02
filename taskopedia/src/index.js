import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Students from './students';



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
    <Students />
    <Footer/>
  </div>
);
