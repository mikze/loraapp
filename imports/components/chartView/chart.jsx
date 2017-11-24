import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import React from "react";

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: props.data,
      lines: props.lines,
      params: props.params
    };

    this.findIndexOfData = this.findIndexOfData.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ allData: nextProps.data });
    this.setState({ lines: nextProps.lines });
    this.setState({ params: nextProps.params });
  }

  findIndexOfData(name) {
    const data = this.state.allData.data;
    let index = 0;
    data.map((x, i) => (eval("x." + name) ? (index = i) : null));
    return eval("data[index]." + name);
  }
  render() {
    const data = this.state.allData;
    return (
      <div>
        <ScatterChart
          width={600}
          height={400}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <XAxis
            type="number"
            dataKey={"x"}
            name={data.xname}
            unit={data.xunit}
          />
          <YAxis
            type="number"
            dataKey={"y"}
            name={data.yname}
            unit={data.yunit}
          />
          <ZAxis range={[100]} />
          <CartesianGrid />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          {this.state.lines.map((x, i) => (
            <Scatter
              name={x}
              data={eval("data.data." + x)}
              fill="#8884d8"
              line
            />
          ))}
        </ScatterChart>
      </div>
    );
  }
}
