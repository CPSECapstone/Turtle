import React from 'react'
import data from "./mockInputs/devComponents.json"


function createBox(value) {
  var boxStyle = {
    backgroundColor: value.color,
    height: value.height,
    width: value.width,
    color: value.textColor
  };
  return (
    <div style={boxStyle}>
      <h1 style={{color : "white"}}>{value.id}</h1>
    </div>
  )
}

function createTextBox(value) {
  var textBoxStyle = {
    backgroundColor: value.color,
    height: value.height,
    width: value.width,
    color: value.textColor
  };
  return (
    <div style={textBoxStyle}>
      <h1 style={{color : "white"}}>{value.id}</h1>
      <nl style={textBoxStyle}>{value.body}</nl>
    </div>
  )
}

export function getDevComponents() {

  const elements = data.components.map((value) => {
    if (value.type === "text") {
      return (
        createTextBox(value)
      )
    } else if (value.type === "box") {
      return createBox(value)
    }
  })

  return elements;
}
