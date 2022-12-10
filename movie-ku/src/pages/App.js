import './App.css';
import {Routes, Store} from '../config';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={Store}>
   <Routes/>
    </Provider>
);
}

export default App;
