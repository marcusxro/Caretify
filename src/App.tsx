import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';
import SearchedItems from './pages/SearchedItems';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path='/search' element={<SearchedItems />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
