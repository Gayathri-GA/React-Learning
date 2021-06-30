
import React from 'react';
import '../../App.css';
import history from '../../routes/routehistory';
class CreateTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      currentTodo: {
        title: "",
        createdBy: "",
        description: "",
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.submitTodo = this.submitTodo.bind(this);
  }
  handleInput(e, element) {
    const { currentTodo } = this.state;
    currentTodo[element] = e.target.value;
    this.setState({ currentTodo });
  }
  submitTodo(e) {
    e.preventDefault();
    const newTodo = this.state.currentTodo;
    const addedTodo = [...this.state.todos, newTodo]
    history.push({ pathname: "/", state: { value: addedTodo } })
  }
  user = () => {
    return <p>User</p>
  }
  render() {
    return (
      <>
        <div className='createTodo'>
          <div className="d-flex justify-content-center align-items-center">
            <div className='todoListBox'>
              <form id='todo-form'>
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">
                    Title
                  </label>
                  <input type="textl" className="form-control textfield" name='title'
                    value={this.state.currentTodo.title} onChange={e => this.handleInput(e, 'title')} />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">
                    Created By
                  </label>
                  <input type="textl" className="form-control textfield"
                    name='createdBy' value={this.state.currentTodo.createdBy} onChange={e => this.handleInput(e, 'createdBy')} />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">
                    Description
                  </label>
                  <textarea className="form-control textfield" rows='4' name='description' value={this.state.currentTodo.description} onChange={e => this.handleInput(e, 'description')}></textarea>
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn" ><i className="fa fa-times"></i> Cancel</button>
                  <button className="btn" onClick={this.submitTodo}><i className="fa fa-floppy-o"></i>  Save</button>
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
