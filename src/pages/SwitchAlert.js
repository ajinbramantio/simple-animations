import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Swal from 'sweetalert2'

import Navigation from '../components/Navigations'
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
        <Form
          style={{ marginTop: '50px' }}
          onSubmit={event => {
            event.preventDefault()
            this.onSubmit(this.state)
          }}
          inline
        >
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
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
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
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
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default SwitchAlert
