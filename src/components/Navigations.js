import React from 'react'
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from 'reactstrap'

export default class Navigations extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="#" active>
              Home
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Loading
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Ring Loading</DropdownItem>
              <DropdownItem>Loading Screen</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    )
  }
}
