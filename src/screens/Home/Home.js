import React, { Component } from 'react'
import { Link }             from 'react-router'
import { slideCards }       from '../../helpers/animations'
import aboutIcon            from './about-icon.png'
import lightningIcon        from './lightning-icon.png'
import './home.scss'

class Home extends Component {
  componentDidMount() {
    const letter1 = this.one
    const letter2 = this.two

    slideCards(letter1, letter2)
  }

  render() {
    return (
      <div>
        <section
          className="home-container"
        >
          <section className="options-container">
            <section
              className="option-left"
              ref={(i) => { this.one = i }}
            >
              <div className="left-img">
                <div className="left-text">
                  <img src={aboutIcon} alt="icon with coffee mug and book" />
                  <h1 className="card-title">
                    RYAN
                  </h1>
                  <p className="card-text">
                    I'm a frontend developer with a passion for startups and country music.
                  </p>
                  <Link to="about/">
                    <button className="home-btn">
                      ABOUT ME
                    </button>
                  </Link>
                </div>
              </div>
            </section>
            <section
              className="option-right"
              ref={(i) => { this.two = i }}
            >
              <div className="right-img">
                <div className="right-text">
                  <img src={lightningIcon} />
                  <h1 className="card-title">
                    MY WORK
                  </h1>
                  <p className="card-text">
                    Always trying to write simpler, more beautiful code.
                  </p>
                  <Link to="/portfolio/">
                    <button className="home-btn">
                      VIEW PORTFOLIO
                    </button>
                  </Link>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    )
  }
}

export default Home
