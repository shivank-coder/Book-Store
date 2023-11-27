import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import {Route, Routes } from 'react-router-dom';
import About from './components/About';
import AddBook from './components/AddBook';
import Books from './components/Book/Books'
import Bookdetails from './components/Book/Bookdetails'
function App() {
  return (
    <div className="App">
   
   <header>
    <Header />
   </header>
   <main>
<Routes>
  <Route path='/' element={<Home />} exact />
  <Route path='/add' element={<AddBook />} exact />
  <Route path='/about' element={<About />} exact />
  <Route path='/books' element={<Books/>} exact />
<Route path='/books/:id' element={< Bookdetails />} exact />
</Routes>
   </main>
    </div>
  );
}

export default App;
