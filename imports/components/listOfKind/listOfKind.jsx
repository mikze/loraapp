import React from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class ListOfKind extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            datas: props.datas
          };
    
      }

      componentWillReceiveProps(nextProps, nextState) {
        this.setState({datas:nextProps.datas});
      }


render()
{

    return <div>{this.state.datas.map( x => <FlatButton
        label={x.dataName}
        primary={true}
        onClick={()=>console.log('xD')}
        href={"/measurement/"+this.props.id+"/"+x.dataName+"/MainView"}
        />  )}
    </div>
}

}