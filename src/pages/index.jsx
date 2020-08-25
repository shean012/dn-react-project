import React, { Component } from "react"
import Images from "../components/imageDef/index.jsx"

class App extends Component {
  render() {
    const imageStyle = {
      width: "50%",
      margin: "20px auto",
    }

    this.state = {
      title: "hello! wellcome to dn react project",
    }
    return (
      <div>
        <h3 style={{ textAlign: "center", paddingTop: "20px" }}>
          {this.state.title}
        </h3>
        <div style={imageStyle}>
          <Images src="../images/react.jpg" />
        </div>
      </div>
    )
  }
}
export default App
