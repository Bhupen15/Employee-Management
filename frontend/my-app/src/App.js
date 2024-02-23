
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails';
import CreateEmployee from './components/CreateEmployee';
import LoginPage from './components/LoginPage';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditEmployee from './components/EditEmployee';


function App() {
  return (
    <div className="App">
      <Header/>
      
      
      <Routes>
        <Route path="/employee" element={<EmployeeList/>}>

        </Route>
        <Route path="/login" element={<LoginPage/>}>

        </Route>
        <Route path="/details/:id" element={<EmployeeDetails/>}>
        </Route>
        <Route path="/addemployee" element={<CreateEmployee/>}>
        </Route>
        <Route path="/editemployee/:id" element={<EditEmployee/>}>
        </Route>
      </Routes>
    
    <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
