import React from "react";
import FlatButton from 'material-ui/FlatButton';
import randtoken from 'rand-token';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import { actions } from '/imports/api/measurements/actions.js';

export default class CreateNewChart extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
                      chartName:'Chart Name', 
                      description:'description', 
                      lines: []};
        this.createChart = this.createChart.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    createChart()
    {
        actions.addNewChart(this.props.measurementName,this.state.chartName,this.state.description,this.state.lines);
    }

    addTolines(line)
    {
        
        if(!this.state.lines.find(x=>x===line))
        {
           const lines = this.state.lines;
           lines.push(line);
           this.setState({lines}, console.log(this.state.lines));
        }
    }

    renderChip(data) {
        return (
          <Chip
            onRequestDelete={() => this.handleRequestDelete(data)}
          >
            {data}
          </Chip>
        );
      }

      handleRequestDelete = (line) => {
        const lines = this.state.lines;
        const chipToDelete = lines.map(x=>x===line)
        lines.splice(chipToDelete, 1);
        this.setState({lines});
      };

      handleChange = (e,option) => {
        option === 'ChartName' ? this.setState({chartName: e.target.value}) : this.setState({description: e.target.value})
      }
        

    render() 
    {
        const styles = {
            chip: {
              margin: 4,
            }
          };

        return (<div>
            Captured variables: {this.props.data.map(x=>x !== 'name' ? 
            <Chip style={styles.chip} onClick={()=>this.addTolines(x)}>
            {x}
            </Chip>
            : null)}
            {this.state.lines.map(this.renderChip, this)}
            Chart's name:<TextField
            onChange={e=>this.handleChange(e,'ChartName')}
            />
            <br/>Chart's description:<TextField
            onChange={e=>this.handleChange(e,'Description')}
           />
            <br/><FlatButton
            label="Create new CHART!"
            primary={true}
            onClick={this.createChart}
          />
          </div>)}
}