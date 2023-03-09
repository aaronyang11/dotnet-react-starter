import React from "react"
import { useEffect } from "react"

const InstructorFunc = (props) => {
  useEffect(() => {
    return () => {
      console.log("Instructor - Unmounted")
    }
  }, [])
  console.log("Render Instructor")
  return (
    <div>
      Name: {props.instructor.name}
      <br />
      Email: {props.instructor.email}
      <br />
      Phone: {props.instructor.phone}
    </div>
  )
}

export default InstructorFunc
