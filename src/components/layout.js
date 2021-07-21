import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {  
    container,
    siteTitle,
    heading,
    navLinks,
    navLinkItem,
    navLinkText} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query{
            site {
            siteMetadata {
                title
                description
            }
            }
        }
        `)
  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <h1 className={heading}>{pageTitle}</h1>  
        <ul className={navLinks}>
          <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>Home</Link>
            </li>
          <li className={navLinkItem}>
              <Link to="/about" className={navLinkText}>About</Link>
            </li>
          <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>Blog</Link>
            </li>
        </ul>
      </nav> 
      {children}
    </main>
  )
}
export default Layout