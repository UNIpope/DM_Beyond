import React from "react";
import "./data.css";

import Classfeatsback from "../background";

function NewlineText(props) {
  const text = props.shorttxt;
  const newText = text.split('\n').map(str => <p className="featdata-p-shorttxt">{str}</p>);
  console.log(newText)
  return newText;
}

class Featdata extends React.Component {
  render() {
    const listdata = this.props
    return (
      <div className="classfeatsdata-container">
        <Classfeatsback />
      </div>
    );
  }
}
export default Featdata;
