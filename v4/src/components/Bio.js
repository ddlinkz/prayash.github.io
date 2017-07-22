import React, { Component } from 'react'
import Link from 'gatsby-link'

import '../css/about.scss'
import avatar from '../assets/img/avatar-lg.png'

export default class Bio extends Component {
  render() {
    return (
      <div id="about" className="fade">
        {/* <img className='avatar' alt='avatar' src={prefixLink(`${avatar}`)} width="50%" height="auto" /> */}
        <article className="overview">
          <header>
            <h2 className="bold">Hi, I'm Prayash.</h2>
          </header>
          <br />
          <h3>
            I make{' '}
            <a href="http://soundcloud.com/effulgence" target="_blank">
              music
            </a>{' '}
            and write{' '}
            <a href="http://github.com/prayasht" target="_blank">
              code
            </a>{' '}
            that draws things.
          </h3>
          <br />
          <p>
            I build software for a living and currently reside in{' '}
            <a href="https://goo.gl/maps/dRHoHcJc5WJ2">
              <del>Kathmandu, Nepal</del>
            </a>{' '}
            Boulder, CO.
          </p>
          <p>
            I use this space primarily for sharing personal projects, music, and
            other art-like things that I may be working on. If you'd like an
            overview of my professional work, check out my{' '}
            <a href="http://linkedin.com/in/prayasht" target="_blank">
              online resume
            </a>.
          </p>
          <p>
            Feel free to peruse my blog if you're interested in any of my
            ramblings on art, tech, life, or other things.
          </p>
          <p>
            Want to make something together?{' '}
            <a href="mailto:prayash@effulgence.io" target="_blank">
              Don't be a stranger!
            </a>
          </p>
        </article>
      </div>
    )
  }
}