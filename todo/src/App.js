import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import todoStore from './redux/store';
import Routes from './routes/routes';

const store = todoStore
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='background'>
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App

