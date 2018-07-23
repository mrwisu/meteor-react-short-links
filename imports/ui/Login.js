import React from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }
  onSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value;
    const password = this.refs.password.value;

    Meteor.loginWithPassword({email}, password, (err) => {
      if (err) {
        this.setState({error: err.reason});
      }
      else {
        this.setState({error: ''});
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Login to Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)} noValidate>
          <input type="email" ref="email" name="email" placeholder="E-mail" />
          <input type="password" ref="password" name="password" placeholder="Password" />
          <button>Login</button>
        </form>
        <Link to="/signup">Have an account?</Link>
      </div>
    );
  }
}
