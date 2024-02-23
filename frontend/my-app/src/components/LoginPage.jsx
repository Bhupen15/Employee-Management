import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBBadge } from 'mdb-react-ui-kit';
import {userLogin} from "../services/user"
import { useNavigate } from 'react-router-dom';
import {toast } from 'react-toastify'
const LoginPage =  () => {
  const navigate= useNavigate();
  const [error, seterror] = useState(false)
  const login=async(e)=>{
    e.preventDefault();
    let formdata= new FormData(e.target);
    let response= await userLogin(formdata)
    console.log(response.data);
    if(response.data.success==true){
      toast.success("user Logged in")
      navigate("/employee")
    }else{
      toast.error(response.data.message);
      seterror(true);
    }
  }
  return (
    <MDBContainer md = "6">
      <MDBRow className="justify-content-center mt-5">
        <MDBCol md="4">
          <form onSubmit={(e)=>{login(e)}} style ={{position:"relative"}} >
          {error && (
                <MDBBadge
                  color="danger"
                  className="p-2"
                  style={{ cursor: 'pointer' }}
                  onClick={() => seterror(false)}
                >
                  Please provide a valid email.
                  <MDBBtn color="transparent" size="sm" className="p-0 ml-2">
                    <span aria-hidden="true">×</span>
                  </MDBBtn>
                </MDBBadge>
              )}
            <p className="h4 text-center mb-4">Sign in</p>
            <div className="grey-text">
            <MDBInput placeholder='Email' type='text' name="email" className="mb-4" />
                <MDBInput placeholder='Password' type='password' name ="password" className="mb-4" />
            </div>
            <div className="text-center">
              <MDBBtn color="success">Login</MDBBtn>
            </div>
            
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginPage;
