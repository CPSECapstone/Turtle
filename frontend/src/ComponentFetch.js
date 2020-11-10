import React, {Component} from 'react'
import data from "./mockInputs/devComponents.json"

class ComponentFetch extends Component {
  constructor ()
{
  super();
}

render() {
  const results = data.components.map((value) =>
    <div>
      <l><u>Component {value.id}</u></l>
      <ul>type : {value.type}</ul>
      <ul>color : {value.color}</ul>
      <ul>height : {value.height}</ul>
      <ul> width : {value.width}</ul>
      <l>--------------------</l>
    </div>
  )
  return (
      <div>
          <ul>{results}</ul>
      </div>
    );
  }
}

export default ComponentFetch;