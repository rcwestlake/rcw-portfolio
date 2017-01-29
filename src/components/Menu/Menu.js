import React, { Component, PropTypes }           from 'react'
import { Link }                                  from 'react-router'
import { openMenuAnimation, leaveMenuAnimation } from '../../helpers/animations.js'
import './menu.scss'

class Menu extends Component {
  componentDidMount() {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    openMenuAnimation(e1, e2, e3, e4)
  }

  componentWillLeave(callback) {
    const e1 = this.one
    const e2 = this.two
    const e3 = this.three
    const e4 = this.four

    leaveMenuAnimation(e1, e2, e3, e4)
    setTimeout(() => {
      callback()
    }, 400)
  }

  render() {
    const { toggleNav } = this.props
    return (
      <div className="menu-container">
        <nav className="menu menu-open">
          <ul>
            <li
              className="menu-item"
              onClick={toggleNav}
              ref={(item) => { this.one = item }}
            >
              <Link to="/">home</Link>
            </li>
            <li
              className="menu-item"
              onClick={toggleNav}
              ref={(item) => { this.two = item }}
            >
              <Link
                activeStyle={{color:'#395EA6'}}
                to="projects/"
              >
                projects
              </Link>
            </li>
            <li
              className="menu-item"
              onClick={toggleNav}
              ref={(item) => { this.three = item }}
            >
              <Link
                activeStyle={{color:'#395EA6'}}
                to="about/"
              >
                about
              </Link>
            </li>
            <li
              className="menu-item"
              onClick={toggleNav}
              ref={(item) => { this.four = item }}
            >
              <Link
                activeStyle={{color:'#395EA6'}}
                to="contact/"
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
        <hr className="hr-line" />
        <section className="menu-footer">
          <p>&copy; Ryan Westlake. All rights reserved.</p>
        </section>
      </div>
    )
  }
}

Menu.propTypes = {
  toggleNav: PropTypes.func.isRequired,
}

export default Menu
