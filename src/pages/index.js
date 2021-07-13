// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>part of tutorial</p>
      <StaticImage
        alt="Poppy the cutiepoo"
        src="../images/IMG-20180312-WA0004.jpg"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage