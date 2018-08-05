import React from 'react'
import { string, arrayOf, shape } from 'prop-types'
import Link from 'next/link'

const Links = ({links, inline, styles}) => (
  <ul style={styles}>
    {links.map(({ href, label }) => (
      <li key={label}>
        <Link href={href}>
          <a>{label}</a>
        </Link>
      </li>
    ))}

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-direction: ${inline? 'row': 'column'};
        justify-content: space-around;
        align-items: center;
      }
      li {
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </ul>
)

Links.propTypes = {
  links: arrayOf(shape({
    href: string.isRequired,
    label: string.isRequired
  }))
}

Links.defaultProps = {
  inline: false
}

export default Links
