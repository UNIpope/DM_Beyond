import React from "react";
import "./data.css";

import FeatSize1 from "../featssize1";

function NewlineText(props) {
  const text = props.shorttxt;
  const newText = text.split('\n').map(str => <p className="featdata-p-shorttxt">{str}</p>);
  console.log(newText)
  return newText;
}

function Retline(props, i){
  return(
    <div className="featdata-singlecont" id={ "featdata-row-" + i }>
      <p className="featdata-text featdata-line-name">{props.name}</p>
      <div className="featdata-text featdata-line-shorttxt">
        <NewlineText {... props} />
      </div>

      <div className="featdata-text featdata-span-desc">
        {props.desc}
      </div>

    </div>
    )
}

function Retdata(props) {
  const lengthact = Object.keys(props).length;
  var arr = []

  for (var i = 0; i < Object.keys(props).length; i++) {
    arr.push(Retline(props[i], i))
  }

  if (lengthact <= 4) {
    return <div>
        <FeatSize1 />
        {arr}
      </div>
  }
  return <div>
    <FeatSize1 />
    {arr}
    </div>

}

class Featdata extends React.Component {
  render() {
    const listdata = this.props
    return (
      <div className="featdata-container">
        <Retdata {... listdata}/>
      </div>
    );
  }
}
export default Featdata;
