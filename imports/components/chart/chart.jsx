import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react';




export default class Chart extends React.Component {

    constructor(props) {
    super(props);
    this.state = {data: props.data,
                  params: props.params};
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({data:nextProps.data});
    this.setState({params:nextProps.params});
  }

  render()
    {
    return(<div>
        <LineChart width={600} height={300} data={this.state.data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
        {this.state.params}
        </div>)}

}
