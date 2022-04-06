import './App.css';
import { Link,Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import SinglePost from './pages/SinglePost';
import Error from './pages/Error';
import Header from './pages/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:slug" element={<SinglePost/>}/>
      <Route path="*" element={<Error/>}/>
      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
