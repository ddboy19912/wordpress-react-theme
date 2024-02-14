import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import React from "react"
import ReactDOM from "react-dom"

const person1 = new Person("Fortune")
if (document.querySelector("#root")) {
  ReactDOM.render(<ExampleReactComponent />, document.querySelector("#root"))
}
