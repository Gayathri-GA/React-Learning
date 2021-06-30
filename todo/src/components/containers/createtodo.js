import React, { useState } from 'react';
import '../../App.css';


function CreateTodo({ save }) {
  const [title, setTitle] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [description, setDescription] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === "title") {
      setTitle(value)
    }
    else if (name === "createdBy") {
      setCreatedBy(value)
    }
    else {
      setDescription(value)
    }
  }
  return (
    <>
      <div className='createTodo'>
        <div class="d-flex justify-content-center align-items-center">
          <div className='todoListBox'>
            <form>
              <div class="d-flex justify-content-center align-items-center">
                <label className="inputPadding">
                  Title
                </label>
                <input type="textl" className="form-control textfield" value={title} onChange={handleChange} name="title" />
              </div>
              <br />
              <div class="d-flex justify-content-center align-items-center">
                <label className="inputPadding">
                  Created By
                </label>
                <input type="textl" className="form-control textfield" value={createdBy} onChange={handleChange} name="createdBy" />
              </div>
              <br />
              <div class="d-flex justify-content-center align-items-center">
                <label className="inputPadding">
                  Description
                </label>
                <textarea className="form-control textfield" rows='4' value={description} onChange={handleChange} name="description"></textarea>
              </div>
              <br />
              <div class="d-flex justify-content-center align-items-center">
                <button class="btn" ><i class="fa fa-times"></i> Cancel</button>
                <button class="btn"><i class="fa fa-floppy-o"></i>  Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}


export default CreateTodo

