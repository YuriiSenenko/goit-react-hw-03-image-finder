import React from 'react';
import { Component } from 'react';
import './Button.css';

export class Button extends Component {
  render() {
    return (
      <button className="Button" type="button" onClick={this.props.loadMore}>
        Load more
      </button>
    );
  }
}
