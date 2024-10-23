
import Login from './Components/Login-SignUp/Login';
import SignUp from './Components/Login-SignUp/SignUp';
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Todo from './Todo';
import Practice from './Practice';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/signUp" element={<SignUp/>} />
      {/* <Route path = "/" element={<Practice/>} /> */}
      {/* <Route path="/" element={<Todo/>} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
