import React, { Component, PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group'
import { Link } from 'react-router'
import Menu from '../Menu/Menu.js'
import { loadBurger, headerAnimation } from '../../helpers/animations'
import './header.scss'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navOpen: false,
    }
  }

  componentDidMount() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const header = this.five

    headerAnimation(header)
    loadBurger(e1, e2, e3)
  }

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  render() {
    const { navOpen } = this.state
    return (
      <div>
        <header
          className="header"
          ref={(i) => { this.five = i }}
        >
          <button
            className={navOpen ? 'burger-container open' : 'burger-container closed'}
            onClick={this.toggleNav}
            aria-label="Main Menu"
          >
            <span className="top" ref={(i) => { this.one = i }} />
            <span className="center" ref={(i) => { this.two = i }} />
            <span className="bottom" ref={(i) => { this.three = i }} />
          </button>
          <Link to="/"><span className="logo" /></Link>
        </header>
        <ReactTransitionGroup component="section">
          {navOpen ? <Menu toggleNav={this.toggleNav} /> : null}
        </ReactTransitionGroup>
      </div>
    )
  }
}

export default Header;
