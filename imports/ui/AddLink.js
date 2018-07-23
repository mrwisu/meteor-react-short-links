import React from 'react';
import { Meteor } from 'meteor/meteor';

export default class AddLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const url = this.refs.url.value.trim();
    if (url)
    {
      Meteor.call('links.insert', url);
      this.refs.url.value = '';
    }
  }
  onChange(e) {
    this.setState({url: e.target.value });
  }
  render() {
    return (
      <div>
        <p>Add link</p>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            type="text"
            ref="url"
            placeholder="URL"
            value={this.state.url}
            onChange={this.onChange.bind(this)}
          />
          <button>Add link</button>
        </form>
      </div>
    );
  }
}
