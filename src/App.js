import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Homepage from './pages/Homepage';
import BooksTable from './pages/BooksTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Homepage/>} exact/>
            <Route path='/bookstable' element={<BooksTable/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
