import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/main_image.jpg'

class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
         Rory Green is a writer, editor and front end developer living in Sydney, Australia.
        </p>
        <img style={{ width: "60%", display: "block", margin: "0 auto" }} src={DisplayImage} alt={siteTitle} />
      </Layout>
    )
  }
}

export default SiteIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
