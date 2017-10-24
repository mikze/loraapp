import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Chart from '../chart'



export default class ShowData extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
                data: props.data, 
                params: ['xD']
            };

            this.pushelement = this.pushelement.bind(this);
  }

  pushelement(){
      const params = this.state.params;
      params.push('xD');
      this.setState({params})
  }
  componentWillReceiveProps(nextProps, nextState) {
    this.setState({data:nextProps.data});
  }

  render()
    {
    return(<div>
        <FlatButton label="Show chart" 
                              onTouchTap={() => this.pushelement()}/>

        <Chart data={this.state.data} params={this.state.params}/>

        </div>)}

}
