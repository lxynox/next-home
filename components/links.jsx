import React from 'react'
import { string, arrayOf, shape } from 'prop-types'
import Link from 'next/link'

const Links = ({links}) => (
  <>
    {links.map(({ href, label }) => (
      <li key={label}>
        <Link href={href}>
          <a>{label}</a>
        </Link>
      </li>
    ))}

    <style jsx>{`
      li {
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </>
)

Links.propTypes = {
  links: arrayOf(shape({
    href: string.isRequired,
    label: string.isRequired
  }))
}

export default Links
