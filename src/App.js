import './App.css';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import CardList from './Components/CardList';
import DynamicCardListing from './Components/DynamicCardListing';

function App() {
  
  return (
    <div className="App p-5">
      <Routes>
        <Route path='/' element={<Navigate to={'/dynamiccard'} />}/>
        <Route path='/dynamiccard' element={<DynamicCardListing/>} />
        <Route path='/cardlist' element={<CardList/>}/>
      </Routes>
    </div>
  );
}

export default App;
