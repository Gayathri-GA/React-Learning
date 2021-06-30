import React, { useState } from 'react';
import '../../App.css';
import history from '../../routes/routehistory';

function HomeScreen() {
  const [taskList, setTaskList] = useState([])
  const showTask = (task) => {
    let tempList = taskList;
    tempList.push(task)
    setTaskList(tempList)
  }
  return (
    <React.Fragment>
      <div class="d-flex justify-content-center align-items-center">
        <div >
          <h1 className='appName'>Todo</h1>
        </div>
        <div class="ml-auto">
          <button className='btn btn-primary todoButton' onClick={() => history.push({ pathname: '/createtodo', })}>Create Todo</button>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div className='todoListBox'>

        </div>
      </div>


    </React.Fragment>
  )
}

export default HomeScreen

