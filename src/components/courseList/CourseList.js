import React, { Component, Fragment } from 'react'

export default class CourseList extends Component {
    state = {
        isEdit: false
    }


    renderCourse = () => {
        return (
            <li className='mt-3'>
                <span className='w-50 d-inline-block text-white text-left pl-5 font-weight-bold'>{this.props.details.name}</span>
                <button className='w-25 btn btn-danger' onClick={() => { this.props.deleteCourse(this.props.index) }}>Delete Course</button>
                <button className='w-25 btn btn-success' onClick={() => { this.toggleState() }}>Edit Course</button>
            </li>
        )
    }

    //toggle state
    toggleState = () => {
        let { isEdit } = this.state
        this.setState({
            isEdit: !isEdit
        })
    }
    //updateCourseItem 
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editeCourse(this.props.index, this.input.value)
        this.toggleState();
    }
    renderUpdateForm = () => {
        return (
            <form className='form-inline mt-5' onSubmit={this.updateCourseItem}>
                <input className='form-control w-75' defaultValue={this.props.details.name} ref={(v) => { this.input = v }} type='text' />
                <button className='btn btn-success w-25' onClick={this.state.editeCourse}>Update Course</button>
            </form>
        )
    }
    render() {
        let isEdit = this.state.isEdit
        return (
            <Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse()}
            </Fragment>
        )
    }
}
