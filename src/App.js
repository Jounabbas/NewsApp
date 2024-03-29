import './App.css';
import Home from './component/Home';
import { BrowserRouter as Main ,Routes,Route } from 'react-router-dom'
import MoviInfo from './component/MoviInfo';
import Errorfile from './component/Errorfile';

import Ecomerce from './component/Ecomerce';
import Bmi from './component/Bmi';

function App() {
  return ( 
    <>
    <Main>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/movi/:id" element={<MoviInfo/>}/>
        </Routes>
      </Main>
    </>
  );
}

export default App;
