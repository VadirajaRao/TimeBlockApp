import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>

  <div>
    <h1>TimeBlockApp</h1>
    <p>
      A way to get more things done in multiple things.
    </p>

    <Link to="/about/">About</Link>
    <Link to="/get-started/">Begin</Link>
  </div>
)

export default IndexPage
