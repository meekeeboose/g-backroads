import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <div>
      <Layout>
        <h1>
          Hello world! <Link to="/blog">Blog</Link>
        </h1>
      </Layout>
      <div className="container">
        <div className="row">
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
          <div className="col-4">Hello</div>
        </div>
      </div>
    </div>
  )
}
