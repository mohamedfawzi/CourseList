import React, { Component } from 'react'
import CourseForm from './components/courseForm/CourseForm'
import CourseList from './components/courseList/CourseList'

export default class App extends Component {
  state = {
    courses: [
      { name: 'HTML' },
      { name: 'Jquery' },
      { name: 'Angular' }
    ],
    current: '',
    errorMsg: ''

  }
  handleChange = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current
    let courses = this.state.courses
    if (current.length > 0) {
      courses.push({ name: current })
      this.setState({ courses, current: '', errorMsg: '' })
    } else {
      this.setState({ errorMsg: 'Please Check course length', })
    }

  }

  //delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses
    let current = this.state.current
    if (current.length === 0) {
      this.setState({ errorMsg: '' })
    }
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }
  //check if no course found in list
  checkLength = () => {
    let courses = this.state.courses
    if (courses.length === 0) {
      return (
        <div className='p-3 mt-2 mb-2 bg-warning text-dark'>
          <p className='mb-0'>No Courses Found !!</p>
        </div>
      )
    }

  }
  //editeCourse
  editeCourse = (index, value) => {
    let courses = this.state.courses
    let course = courses[index]
    course['name'] = value
    this.setState({
      courses
    })

  }
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return <CourseList deleteCourse={this.deleteCourse} index={index} details={course} key={index} editeCourse={this.editeCourse} />
    })
    const checkLength = this.checkLength()
    return (
      <section className='bg-primary text-center pt-5 col-sm-8'>
        <h2 className='text-white bg-dark p-3 text-left'>Add Course</h2>
        <CourseForm handleChange={this.handleChange} errorMsg={this.errorMsg} addCourse={this.addCourse} current={this.state.current} />
        {this.state.errorMsg.length > 0 ? <p className='bg-danger text-white p-3 mt-2'>{this.state.errorMsg}</p> : ''}

        <ul className='list-unstyled'>{this.state.courses.length ? courseList : checkLength}</ul>
      </section>
    )
  }
}
