import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const blog = () => {
  return (
    <div>
      <Layout>
        Hello from blog.
        <Link to="/">Homepage</Link>
      </Layout>
    </div>
  )
}

export default blog
