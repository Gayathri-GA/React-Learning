
import React, { Component } from 'react';
import '../../App.css';


class CreateTodo extends Component {
  render() {
    return (
      <>
        <div className='createTodo'>
          <div className="d-flex justify-content-center align-items-center">
            <div className='todoListBox'>
              <form>
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">
                    Title
                  </label>
                  <input type="textl" className="form-control textfield" />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">
                    Created By
                  </label>
                  <input type="textl" className="form-control textfield" />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">
                    Description
                  </label>
                  <textarea className="form-control textfield" rows='4' ></textarea>
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn" ><i className="fa fa-times"></i> Cancel</button>
                  <button className="btn" ><i className="fa fa-floppy-o"></i>  Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CreateTodo
