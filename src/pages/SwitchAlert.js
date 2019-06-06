import React from 'react'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import Swal from 'sweetalert2'
import Styled from 'styled-components'

import Navigation from '../components/Navigations'

const FormLogin = Styled(Form)`
 width:300px;
 position:absolute;
 text-align:center;
`

const Div = Styled.div`
 display: flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background:#262424;
`
const InputLogin = Styled.input`
  border:0;
  background-color: rgba(37, 35, 35);
  display:block;
  margin:20px auto;
  border: 2px solid #3498db;
  padding:14px 10px;
 
  width:280px;
  outline:none;
  color:white;
  text-align:center;
  border-radius:24px;
  transition:0.25s;
   &:focus{
     width:400px;
    border-color: #2ecc71;
  }
`
const InputButton = Styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background:none;
  display:block;
  text-align:center;
  border:2px solid #2ecc71;
   
     margin-top:20px;
     width:280px;

  padding:14px 40px;
  outline:none;
  color:white;
  border-radius:24px;
  transition:0.25s;
  cursor:pointer;
`
class SwitchAlert extends React.Component {
  constructor() {
    super()
    this.state = {
      email: 'admin@gmail.com',
      password: '12345'
    }
  }

  onSubmit = data => {
    if (data.email === 'admin@gmail.com' && data.password === '12345') {
      Swal.fire({
        type: 'success',
        title: 'youre success',
        showConfirmButton: false,
        timer: 1500
      })
    } else if (data.email !== 'admin@gmail.com') {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'youre email is wrong!'
      })
    } else if (data.password !== '12345') {
      Swal.fire({
        position: 'top-end',
        type: 'error',
        title: 'your password is wrong!',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  render() {
    return (
      <div>
        <Navigation />

        <Div>
          <FormLogin
            style={{ marginTop: '50px' }}
            onSubmit={event => {
              event.preventDefault()
              this.onSubmit(this.state)
            }}
            inline
          >
            <Label
              for="exampleEmail"
              className="mr-sm-2"
              style={{ color: 'white' }}
            >
              Email
            </Label>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <InputLogin
                type="email"
                name="email"
                value={this.state.email}
                onChange={event => {
                  this.setState({
                    email: event.target.value
                  })
                }}
                placeholder="something@idk.cool"
              />
            </FormGroup>
            <Label
              for="examplePassword"
              className="mr-sm-2"
              style={{ color: 'white' }}
            >
              Password
            </Label>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <InputLogin
                type="password"
                name="password"
                value={this.state.password}
                onChange={event => {
                  this.setState({
                    password: event.target.value
                  })
                }}
                placeholder="don't tell!"
              />
            </FormGroup>
            <InputButton>Submit</InputButton>
          </FormLogin>
        </Div>
      </div>
    )
  }
}

export default SwitchAlert
