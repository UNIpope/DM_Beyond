import React from "react";
import "./data.css";

import ActionSize1 from "../actionssize1";
import ActionSize2 from "../actionssize2";


function Retline(props, i){
  return <div className="actiondata-singlecont" id={ "actiondata-row-" + i }>
      <p className="actiondata-text actiondata-line-name">{props.name}</p>
      <div className="actiondata-text actiondata-line-desc">
        <span className="actiondata-span-desc">{props.desc}</span>
      </div>
  </div>
}

function Retdata(props) {
  const lengthact = Object.keys(props).length;
  var arr = []

  for (var i = 0; i < Object.keys(props).length; i++) {
    arr.push(Retline(props[i], i))
  }

  if (lengthact <= 4) {
    return <div>
        <ActionSize1 />
        {arr}
      </div>
  }
  return <div>
    <ActionSize2 />
    {arr}
    </div>

}

class Actionsdata extends React.Component {
  render() {
    const listdata = this.props
    return (
      <div className="actionsdata-container">
        <Retdata {... listdata}/>
      </div>
    );
  }
}
export default Actionsdata;
