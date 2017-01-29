import React, { Component } from 'react'
import { slideUpAnimation } from '../../helpers/animations'
import ExpandIcon           from '../../components/ExpandIcon/ExpandIcon.js'
import SimpleList           from '../../components/SimpleList/SimpleList.js'
import LinkList             from '../../components/LinkList/LinkList.js'
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

  getExpandedText = () => {
    return (
      <p>My story is a bit out of the ordinary. When I was 17, right after graduating high school, I started working full-time for a mergers & aquisition firm where I earned stripes as an analyst. While there I had the opportunity to take part in some exciting projects, including closing a deal with Berkshire Hathaway. It served as a terrific platform to jump from, and I am grateful for it. Seven months ago, I decided to pursue a field I found fascinating -- technology. It's my dream to be part of building a high-growth, value-orientated startup, and I knew to get there, I needed the skills to be a strong contributor. I picked <a href="https://www.turing.io" target="_blank" rel="noopener noreferrer">Turing School of Software & Design</a>, and am excited for what lies ahead.</p>
    )
  }

  render() {
    const { expanded } = this.state
    const expandedButtonText = expanded ? <span>Close...</span> : <span>More about me...</span>

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
            {!!expanded && <span>{this.getExpandedText()}</span>}
            <ExpandIcon
              currentState={expanded}
              handleClick={this.toggleExpanded} />
            <span className="expand-button-text">{expandedButtonText}</span>
          </section>
        </section>
        <aside className="right-intro">
          <section className="image" />
          <section className="right-content">
            <section className="fun-facts">
              <SimpleList
                cName="aside-header"
                header="FUN FACTS:"
                items={['I ride a motorcycle (Yamaha V Star)',
                        'Brownies and ice cream are my favorite dessert',
                        'Took a picture with Jack Nicklaus (golfer)'
                      ]}
              />
            </section>
            <section className="favorites">
              <SimpleList
                cName="aside-header"
                header="FAVORITE BOOKS:"
                items={['Deep Work / Cal NewPort',
                        'Boomerang / Michael Lewis',
                        'Alexander Hamilton / Ron Chernow',
                        'Awe / Paul Tripp'
                      ]}
              />
            </section>
            <section className="articles">
              <LinkList
                cName="aside-header"
                header="ARTICLES I'VE WRITTEN:"
                items={[['https://medium.com/@rcwestlake/intro-javascript-module-pattern-5f39d3f468dc#.knytdvxfp',
                        'Intro: JavaScript Module Pattern'],
                        ['https://medium.com/@rcwestlake/top-atom-packages-and-shortcuts-imho-934e28039ddc#.lnkjqcden',
                        'Top Atom Packages and Shortcuts (IMHO)']
                      ]}
              />
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
            <p>Sep 2012 - Aug 2016 -- Analyst at
              <a href="http://www.compass-advisors.com" target="_blank" rel="noopener noreferrer">
                Compass Advisors
              </a>
            </p>
            <p>Oct 2016 - Present -- Investor at
              <a href="http://www.vidangel.com" target="_blank" rel="noopener noreferrer">
                VidAngel
              </a>
              (through their private stock offering). No other affiliation.
            </p>
            <p>Jul 2013 - Jul 2014 -- Digital Marketing at
              <a href="http://www.cowgirldirt.com" target="_blank" rel="noopener noreferrer">
                Cowgirl Dirt
              </a>
            </p>
            <p>
              May 2012 - Sep 2012 -- Farm Hard at Wheat Ridge Farms (lived like a farmer for a summer)
            </p>
            <hr className="line-break" />
            <p>You can view my LinkedIn
              <a href="https://www.linkedin.com/in/ryancwestlake" target="_blank" rel="noopener noreferrer">
                here
              </a>
              .
            </p>
          </section>
          <section className="content-block">
            <h3 className="section-header">
              Skills
            </h3>
          </section>
          <section className="content-block">
            <div className="skills-list">
              <SimpleList
                cName="aside-header"
                header="Technologies"
                items={['Javascript', 'jQuery', 'HTML5',
                        'CSS3', 'Sass', 'React', 'Redux',
                        'Webpack', 'Node/Express',
                        'Unit/Feature Testing'
                      ]}
              />
            </div>
            <div className="skills-list">
              <SimpleList
                cName="aside-header"
                header="Soft"
                items={['Clear communication (verbal & written)',
                        'Project management',
                        'Honesty', 'Ability to work across teams',
                        'Decent golf swing'
                      ]}
              />
            </div>
            <div className="skills-list">
              <SimpleList
                cName="aside-header"
                header="Patterns"
                items={['Object orientated programming',
                        'Javascript module pattern',
                        'Test driven development'
                      ]}
              />
            </div>
          </section>
          <section className="content-block">
            <h3 className="section-header">
              What I'm Looking For
            </h3>
            <p>
              A place to work with good people, working on a tough problem,
              who care about design, and enjoy living life. On a more personal level,
              I would love an opportunity where I can learn what it takes to grow a business on a large scale.
            </p>
          </section>
          <section className="content-block">
            <h3 className="section-header">
              About this Site
            </h3>
            <p>
              This site has been designed and built by hand from the ground up.
              It's handled through React and animated with GreenSock Animation Platform.
              The CSS is written in Sass (scss) and is responsive.</p>
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
