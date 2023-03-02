import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";

const MainBody = (props) => {
  const whatWeWillLearn = "React JS";
  const numberOfLectures = 3;

  return (
    <div style={{ minHeight: "70vh" }}>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOpedia!
        <br></br>
        Total Lecture - {numberOfLectures}
      </p>

      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class Components</li>
      </ul>

      <div className="container row">Students Enrolled</div>
      <Student
        experience={2}
        name="Kris Walley"
        headshot="https://api.lorem.space/image/face?w=150&h=153"
      >
        <StudentReview />
      </Student>
      <Student
        experience={5}
        name="Angel Patrice"
        headshot="https://api.lorem.space/image/face?w=150&h=151"
      >
        <StudentReview></StudentReview>
      </Student>

      <Student
        experience={2}
        name="Rene Parker"
        headshot="https://api.lorem.space/image/face?w=150&h=150"
      ></Student>
    </div>
  );
};

export default MainBody;
