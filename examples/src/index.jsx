import React, { Component } from 'react';
import { render } from 'react-dom';
import Switch from '../../dist';
import './styles.css';

class Examples extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    const { checked } = this.state;

    return (
      <div id="examples">
        <h1>React Switch</h1>
        <div className="example">
          <h2>Default usage</h2>
          <div className="switch-group">
            <label htmlFor="normal-switch">Switch with default style</label>
            <Switch
              className="react-switch"
              onChange={this.handleChange}
              checked={checked}
              id="normal-switch"
            />
          </div>
          <p>The switch is <span>{checked ? 'on' : 'off'}</span>.</p>
          <pre>{`
handleChange(checked) {
  this.setState({ checked });
}
          `}
          </pre>
          <pre>
            {`
<label htmlFor="normal-switch">Switch with default style</label>
<Switch
  onChange={this.handleChange}
  checked={checked}
  id="normal-switch"
/>
            `}
          </pre>
        </div>
        <div className="example">
          <h2>Custom color and size</h2>
          <div className="switch-group">
            <label htmlFor="custom-switch">Switch with custom style</label>
            <Switch
              id="custom-switch"
              className="react-switch"
              onChange={this.handleChange}
              checked={checked}
              height={24}
              width={90}
              handleColor="orange"
              activeHandleColor="yellow"
              offColor="linear-gradient(45deg, steelblue, black)"
              onColor="repeating-radial-gradient(ellipse farthest-corner, darkgreen, lightgreen)"
            />
          </div>
          <pre>
            {`
<label htmlFor="custom-switch">Switch with custom style</label>
<Switch
  id="custom-switch"
  className="react-switch"
  onChange={this.handleChange}
  checked={checked}
  height={20}
  width={90}
  handleColor="orange"
  activeHandleColor="yellow"
  offColor="linear-gradient(45deg, steelblue, black)"
  onColor="repeating-radial-gradient(ellipse farthest-corner, darkgreen, lightgreen)"
/>
            `}
          </pre>
        </div>
      </div>
    );
  }
}

render(
  <Examples />,
  document.getElementById('app')
);