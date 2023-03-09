import { getRandomUser } from "../Utility/api"
import { useState, useEffect, useRef } from "react"
import React from "react"
import InstructorFunc from "./InstructorFunc"

const CyclOPediaFuncPage = () => {
  const [state, setState] = useState(() => {
    return {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    }
  })

  let totalRender = useRef(0)
  let prevStudentCount = useRef(0)

  const [inputName, setInputName] = useState(() => {
    return ""
  })
  const [inputFeedback, setInputFeedback] = useState(() => {
    return ""
  })

  const handleAddStudent = () => {
    setState((prevState) => {
      return { ...prevState, studentCount: prevState.studentCount + 1 }
    })
  }

  const handleRemoveAllStudents = () => {
    setState((prevState) => {
      return { ...prevState, studentCount: 0 }
    })
  }

  const handleToggleInstructor = () => {
    setState((prevState) => {
      return {
        ...prevState,
        hideInstructor: !prevState.hideInstructor,
      }
    })
  }
  useEffect(() => {
    console.log("This will be called on every render.")
    totalRender.current = totalRender.current + 1
    console.log("Total Render: " + totalRender.current)
  })

  useEffect(() => {
    console.log("This will be called on the first/initial render.")
    const getUser = async () => {
      const response = await getRandomUser()
      setState((prevState) => {
        return {
          ...prevState,
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        }
      })
    }
    if (!state.hideInstructor) {
      getUser()
    }
  }, [state.hideInstructor])

  useEffect(() => {
    console.log(
      "This will be called every time a registered component is updated"
    )

    const getStudent = async () => {
      const response = await getRandomUser()
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [
            ...prevState.studentList,
            {
              name: response.data.first_name + " " + response.data.last_name,
            },
          ],
        }
      })
    }
    if (prevStudentCount.current < state.studentCount) {
      getStudent()
    } else if (prevStudentCount.current > state.studentCount) {
      setState((prevState) => {
        return {
          ...prevState,
          studentList: [],
        }
      })
    }
  }, [state.studentCount])

  useEffect(() => {
    prevStudentCount.current = state.studentCount
  }, [state.studentCount])

  useEffect(() => {
    return () => {
      console.log("This will be called when a component is unmounted")
    }
  }, [])

  return (
    <div>
      <div className="p-3">
        <span className="h4 text-success">Instructor:&nbsp;</span>
        <i
          className={`bi ${
            state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"
          } btn btn-success btn-sm"`}
          onClick={handleToggleInstructor}
        ></i>
        {!state.hideInstructor && state.instructor ? (
          <InstructorFunc instructor={state.instructor} />
        ) : null}
      </div>
      <div className="p-3">Total Render: {totalRender.current}</div>

      <div className="p-3">
        <span className="h-4 text-success">Feedback</span>
        <br />
        <input
          type="text"
          placeholder="Name..."
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value.trim())
          }}
        ></input>
        <br />
        <textarea
          placeholder="Feedback..."
          value={inputFeedback}
          onChange={(e) => {
            setInputFeedback(e.target.value.trim())
          }}
        ></textarea>
      </div>
      <div className="p-3">
        <span className="h4 text-success">Students</span>

        <div>Student Count: {state.studentCount}</div>
        <button className="btn btn-success btn-sm" onClick={handleAddStudent}>
          Add Student
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveAllStudents}
        >
          Remove All Students
        </button>
        {state.studentList.map((student, index) => {
          return (
            <div className="text-white" key={index}>
              -{student.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CyclOPediaFuncPage
