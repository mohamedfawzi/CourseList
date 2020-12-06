import React from 'react'

export default function CourseForm(props) {
    return (
        <form className='form-inline' onSubmit={props.addCourse}>
            <input className='form-control w-75' value={props.current} type='text' onChange={props.handleChange} />
            <input className='btn btn-success w-25' type='submit' value='Add Course' />
            <p>{props.errorMsg}</p>
        </form>
    )
}
