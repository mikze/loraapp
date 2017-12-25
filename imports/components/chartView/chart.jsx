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
    };

    this.findIndexOfData = this.findIndexOfData.bind(this);
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({ allData: nextProps.data });
    this.setState({ lines: nextProps.lines });
  }

  findIndexOfData(name) {
    const data = this.state.allData.data;
    let index = 0;
    data.map((x, i) => (x[name] ? (index = i) : null));
    return data[index][name];
  }
  render() {
    const data = this.state.allData;
    return (
      <div>
        <ScatterChart
          width={1000}
          height={500}
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
          {this.state.lines.map((x, i) => {
           let rand = Math.floor((Math.random() * 900000) + 100000);
           let color = "#" + rand;
            return(
            <Scatter
              name={x}
              data={data.data[x]} //tu byl eval
              fill={color}
              line
            />
          )}
          )}
        </ScatterChart>
        
      </div>
      
    );
  }
}
