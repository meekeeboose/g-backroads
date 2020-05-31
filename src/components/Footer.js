import React from "react"

const Footer = () => {
  var d = new Date()
  var n = d.getFullYear()

  return (
    <div>
      <h4>This is the Footer area @{n}</h4>
    </div>
  )
}

export default Footer
