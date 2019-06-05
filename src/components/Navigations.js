import React from 'react'
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const Div = Styled.div`
font-size:22px;
`
const Home = Styled(Link)`
  display: block;
    padding: .5rem 1rem;
        color: #007bff;
    text-decoration: none;
    background-color: transparent;
    &:hover{
       text-decoration: none;
    }
}
`

export default class Navigations extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.toggleValid = this.toggleValid.bind(this)
    this.state = {
      dropdownOpen: false,
      dropdownValid: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dropdownValid: this.state.dropdownValid
    })
  }
  toggleValid() {
    this.setState({
      dropdownOpen: this.state.dropdownOpen,
      dropdownValid: !this.state.dropdownValid
    })
  }

  render() {
    return (
      <Div>
        <Nav style={{ background: 'white' }} pills>
          <NavItem>
            <Home to="/">Home</Home>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Loading
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/ringLoading">
                <DropdownItem>Ring Loading</DropdownItem>
              </Link>
              <Link to="/rotationLoading">
                <DropdownItem>Rotation Loading</DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            nav
            isOpen={this.state.dropdownValid}
            toggle={this.toggleValid}
          >
            <DropdownToggle nav caret>
              Validation
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/switchAlert">
                <DropdownItem>alert</DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Div>
    )
  }
}
