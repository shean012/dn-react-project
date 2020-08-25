import React from "react"

const Images = (props) => {
  let url = props.src
  let idx = url.indexOf("images")
  let fileName = url.substr(idx + 7)
  const imageUrl = process.env.NODE_ENV === "production" ? imageDefUrl : ""
  const src = imageUrl
    ? `${imageUrl + fileName}`
    : require(`../../images/${fileName}`)
  return (
    <>
      <img style={{ width: "100%", display: "block" }} src={src} />
    </>
  )
}

export default Images
