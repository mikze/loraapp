import React from "react";
import FlatButton from "material-ui/FlatButton";
import randtoken from "rand-token";
import TextField from "material-ui/TextField";
import { actions } from "/imports/api/users/actions.js";

export default class GetApiToken extends React.Component {
  constructor(props) {
    super(props);
    this.state = { token: "token" };
    this.generateToken = this.generateToken.bind(this);
  }

  generateToken() {
    this.setState({ token: randtoken.generate(24) });
    actions.addNewToken(this.state.token)
  }

  render() {
    console.log(this.props.sub);
    return (
      <div id="center">
        <FlatButton
          label="Generate token"
          onTouchTap={this.generateToken}
        />
        <TextField id="text-field-default" value={this.state.token} />
      </div>
    );
  }
}
