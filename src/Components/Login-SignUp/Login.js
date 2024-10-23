import React from 'react';
import "./Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit' ;
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='demo'>
    <MDBContainer  fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100'  label='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100'  label='Password' id='formControlLg' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a  href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' size='lg'  >
                Login
              </MDBBtn>
              <br/>
              <br/>
              <div>
              <Link to="/signUp"><p className="mb-0">Don't have an account? Sign Up</p>
              </Link>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Login