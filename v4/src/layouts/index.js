import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../css/typography.css'
import '../css/index.scss'

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func
  }

  render() {
    return (
      <div>
        <Helmet
          title="effulgence.io // prayash thapa"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: '#666',
              textDecoration: 'none'
            }}
          >
            effulgence.io // prayash thapa
          </Link>
        </h1>

        {this.props.children()}
      </div>
    )
  }
}
