import React, { Component } from 'react'
import { slideUpAnimation } from '../../helpers/animations'
import './about.scss'

class About extends Component {
  constructor() {
    super()

    this.state = {
      expanded: false,
    }
  }

  componentDidMount() {
    const e1 = this.one
    slideUpAnimation(e1)
  }

  toggleExpanded = () => {
    this.setState({
      expanded: !this.state.expanded,
    })
  }

  render() {
    const { expanded } = this.state
    const expandedIcon = expanded ? './images/icons/close-icon.png' : './images/icons/add-icon.png'
    const expandedButtonText = expanded ? <span>Close...</span> : <span>More about me...</span>
    const expandedText = <p>My story is a bit out of the ordinary. When I was 17, right after graduating high school, I started working full-time for a mergers & aquisition firm where I earned a few stripes as an analyst. While there I had the opportunity to take part in some exciting projects, including closing a deal with Berkshire Hathaway. It served as a terrific platform to jump from, and I am grateful for it. Seven months ago, I decided to pursue a field I found fascinating -- technology. It's my dream to be part of building a high-growth, value-orientated startup, and I knew to get there, I needed the skills to be a strong contributor. I picked <a href="https://www.turing.io" target="_blank" rel="noopener noreferrer">Turing School of Software & Design.</a></p>

    return (
      <div className="about-container" ref={(item) => { this.one = item }}>
        <section className="left-intro">
          <h1 className="greeting">
            About Me
          </h1>
          <p className="intro">
            Born in Maryland. Raised in Montana (unfortunately not a ranch). Former M&A analyst turned developer. In short, a code-writing, gym-going, mountain-hiking, occasionalfunnyjoke-telling, biography-reading, sort of guy.
          </p>
          <section className="detail">
            <p>
              I enjoy working hard, and view it as a privilege to work with
              others to solve challenging problems, something outside my comfort zone, for it's in those moment, when we're stretched beyond our self-defined limits, we learn the most. Like our lives, I believe technology should serve a purpose, whether that's in the consumer/
              enterprise market or profit/non-profit.
            </p>
            {!!expanded && <span>{expandedText}</span>}
            <img
              src={expandedIcon}
              alt="Icon to show/hide text"
              className="expand-button"
              onClick={this.toggleExpanded}
            />
            <span className="expand-button-text">{expandedButtonText}</span>
          </section>
        </section>
        <aside className="right-intro">
          <section className="image" />
          <section className="right-content">
            <section className="fun-facts">
              <h4 className="aside-header">FUN FACTS:</h4>
              <ul>
                <li>I ride a motorcycle (Yamaha V Star)</li>
                <li>Brownies and ice cream are my favorite dessert</li>
                <li>I played the trumpet for 6 years</li>
              </ul>
            </section>
            <section className="favorites">
              <h4 className="aside-header">FAVORITE BOOKS:</h4>
              <ul>
                <li>Deep Work / Cal NewPort</li>
                <li>Boomerang / Michael Lewis</li>
                <li>Alexander Hamilton / Ron Chernow</li>
                <li>Awe / Paul Tripp</li>
              </ul>
            </section>
            <section className="articles">
              <h4 className="aside-header">ARTICLES I'VE WRITTEN</h4>
              <ul>
                <li><a href="https://medium.com/@rcwestlake/intro-javascript-module-pattern-5f39d3f468dc#.knytdvxfp" target="_blank" rel="noopener noreferrer">Intro: JavaScript Module Pattern</a></li>
                <li><a href="https://medium.com/@rcwestlake/top-atom-packages-and-shortcuts-imho-934e28039ddc#.lnkjqcden" target="_blank" rel="noopener noreferrer">Top Atom Packages and Shortcuts (IMHO)</a></li>
              </ul>
            </section>
          </section>
        </aside>
        <section className="bottom-content">
          <article className="quote">
            <blockquote>
              "There is no limit to what a man can do or where he can go,
              if he does not mind who gets the credit."
              <p className="author">- Ronald Reagan</p>
            </blockquote>
          </article>
          <section className="content-block">
            <h3 className="section-header">
              Background
            </h3>
            <p>Sep 2012 - Aug 2016 -- Analyst at <a href="http://www.compass-advisors.com" target="_blank" rel="noopener noreferrer">Compass Advisors</a></p>
            <p>Oct 2016 - Present -- Investor at <a href="http://www.vidangel.com" target="_blank" rel="noopener noreferrer">VidAngel</a> (through their private stock offering)</p>
            <p>Jul 2013 - Jul 2014 -- Digital Marketing at <a href="http://www.cowgirldirt.com" target="_blank" rel="noopener noreferrer">Cowgirl Dirt</a></p>
            <p>May 2012 - Sep 2012 -- Farm Hard at Wheat Ridge Farms (lived like a farmer for a summer)</p>
            <hr className="line-break" />
            <p>You can view my LinkedIn <a href="https://www.linkedin.com/in/ryancwestlake" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </section>
          <section className="content-block">
            <h3 className="section-header">
              Skills
            </h3>
          </section>
          <section className="content-block">
            <div className="skills-list">
              <h4>Technologies</h4>
              <ul>
                <li>JavaSript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Sass</li>
                <li>React</li>
                <li>Redux</li>
                <li>jQuery</li>
                <li>Webpack</li>
                <li>Node/Express</li>
                <li>Unit/Feature Testing</li>
              </ul>
            </div>
            <div className="skills-list">
              <h4>Soft</h4>
              <ul>
                <li>Clear communication</li>
                <li>Managing projects with moving pieces</li>
                <li>Honesty</li>
                <li>Radical candor (work in progress)</li>
                <li>Decent golf swing</li>
              </ul>
            </div>
            <div className="skills-list">
              <h4>Patterns</h4>
              <ul>
                <li>Object orientated</li>
                <li>JavaScript module pattern</li>
                <li>Test driven development</li>
              </ul>
            </div>
          </section>
          <section className="content-block">
            <h3 className="section-header">
              What I'm Looking For
            </h3>
            <p>A place to work with good people, working on a tough problem, who care about design, and enjoy living life. On a more personal level, I would love an opportunity where I can learn what it takes to grow a business on a large scale.</p>
          </section>
          <section className="content-block">
            <h3 className="section-header">
              About this Site
            </h3>
            <p>This site has been designed and built by hand from the ground up. It's handled through React and animated with GreenSock Animation Platform. The CSS is written in Sass (scss) and is responsive.</p>
            <p>Icons created by
              <a
                href="https://www.iconfinder.com/aha-soft"
                target="_blank"
                className="icon-license"
                rel="noopener noreferrer"
              >
                  Viktor,
              </a>
              <a
                href="http://www.flaticon.com/authors/zlatko-najdenovski"
                target="_blank"
                className="icon-license"
                rel="noopener noreferrer"
              >
                  Zlatko,
              </a>
              <a
                href="http://www.flaticon.com/authors/madebyoliver"
                target="_blank"
                className="icon-license"
                rel="noopener noreferrer"
              >
                  Made by Oliver,
              </a>
              <a
                href="http://www.flaticon.com/authors/freepik"
                target="_blank"
                className="icon-license"
                rel="noopener noreferrer"
              >
                  and Freepik
              </a>
            </p>
          </section>
        </section>
      </div>
    )
  }
}

export default About
