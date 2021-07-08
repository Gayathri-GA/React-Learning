import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import { addTodo } from '../../redux/action';
import history from "../../routes/routehistory";
class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      currentTodo: {
        title: "",
        createdBy: "",
        description: "",
      },
      editIndex: "",
    };

  }

  componentDidMount() {
    if (history.location.state && history.location.state.todoArray) {
      const value = history.location.state.todoArray;
      const index = history.location.state.todoIndex;
      this.setState({
        todos: value,
        editIndex: index,
      });

      if (value[index]) {
        this.setState({
          currentTodo: value[index],
        });
      }
    }
  }

  submitTodo = (e) => {
    e.preventDefault();
    console.log(this.props, 'PROPS SUBMIT')
    this.props.addTodo(this.state.currentTodo)
  }

  updateSubmit(e) {
    e.preventDefault();
    const newData = this.state.todos;
    newData.map((item, index) => {
      if (index === this.state.editIndex) {
        item = this.state.currentTodo;
      }
    });
    this.setState({
      todos: newData,
    });
    history.push({ pathname: "/", state: { value: newData } });
    // setTimeout(() => {

    // }, 100);
  }

  handleInput(e, element) {
    const { currentTodo } = this.state;
    currentTodo[element] = e.target.value;
    this.setState({ currentTodo });
  }

  render() {
    return (
      <>
        <div className="createTodo">
          <div className="d-flex justify-content-center align-items-center">
            <div className="todoListBox">
              <form id="todo-form">
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">Title</label>
                  <input
                    type="textl"
                    className="form-control textfield"
                    name="title"
                    value={this.state.currentTodo.title}
                    onChange={(e) => this.handleInput(e, "title")}
                  />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">Created By</label>
                  <input
                    type="textl"
                    className="form-control textfield"
                    name="createdBy"
                    value={this.state.currentTodo.createdBy}
                    onChange={(e) => this.handleInput(e, "createdBy")}
                  />
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <label className="inputPadding">Description</label>
                  <textarea
                    className="form-control textfield"
                    rows="4"
                    name="description"
                    value={this.state.currentTodo.description}
                    onChange={(e) => this.handleInput(e, "description")}
                  ></textarea>
                </div>
                <br />
                <div className="d-flex justify-content-center align-items-center">
                  <button className="btn">
                    <i className="fa fa-times"></i> Cancel
                  </button>
                  {console.log(this.state.editIndex, " this.state.editIndex")}
                  {this.state.editIndex >= 0 ? (
                    <button
                      className="btn"
                      onClick={(e) => this.updateSubmit(e)}
                    >
                      <i className="fa fa-floppy-o"></i> Update
                    </button>
                  ) : (
                    <button className="btn" onClick={this.submitTodo}>
                      <i className="fa fa-floppy-o"></i> Save
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }

}
// const mapStateToProps = (state) => {
//   return {
//     todo: state.currentTodo
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (x) => { dispatch(addTodo(x)) }
  }
}
export default connect(null, mapDispatchToProps)(CreateTodo);
