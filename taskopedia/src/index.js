import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Student from './student';



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
  <div className='container'>
    <Header/>
    <MainBody />
    <div className="row">Students Enrolled</div>
    <Student experience={2} name="Jin Yang"/>
    <Footer/>
  </div>
);
