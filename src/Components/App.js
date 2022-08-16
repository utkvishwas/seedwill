import React from "react";
import { number, largenumber, secondNumberAction } from "../actions";
import { connect } from "react-redux";

const App = (props) => {
  const onInputChane = (e) => {
    const data = e.target.value.split(",");
    const parsedNum = [];
    for (var i = 0; i < data.length; i++) {
      const integer = parseInt(data[i], 10);
      if (!isNaN(integer)) {
        parsedNum.push(integer);
      }
    }
    props.number(parsedNum);
  };

  const renderList = props.numbers.map((n) => {
    return <li>{n}</li>;
  });

  var arr = props.numbers;
  if (arr.length >= 1) {
    var max = Math.max(...arr);
    props.largenumber(max);
  }
  function findSecondLargest(a, n) {
    a.sort();

    let second_largest = 0;

    for (let i = n - 2; i >= 0; i--) {
      if (a[i] != a[n - 1]) {
        second_largest = a[i];
        break;
      }
    }

    return second_largest;
  }

  const a = arr;
  let n = a.length;
  let answer = findSecondLargest(a, n);
  props.secondNumberAction(answer);
  console.log(props);
  return (
    <div className="ui container" style={{ marginTop: "2rem" }}>
      <div className="ui fluid action input">
        <input
          type="text"
          placeholder="Enter Num Separated with comma..."
          onChange={onInputChane}
        />
        <div className="ui button">Enter Number</div>
      </div>
      <div className="ui vertically divided grid">
        <div className="two column row" style={{ marginTop: "2rem" }}>
          <div
            className="column"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {renderList}
          </div>
          <div className="column">
            <h1>
              Sum of largest two number ({props.largeNumberInteger},{" "}
              {props.secondnumber})
            </h1>
            <h2>{props.largeNumberInteger + props.secondnumber}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numbers: state.numbers,
    largeNumberInteger: state.largeNumberInteger,
    secondnumber: state.secondnumber,
  };
};
export default connect(mapStateToProps, {
  number,
  largenumber,
  secondNumberAction,
})(App);
