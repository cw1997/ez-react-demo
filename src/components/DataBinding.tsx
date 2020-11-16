import React from '@cw1997/ez-react';

//import "./DataBinding.sass"

export default class DataBinding extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
  }

  private intervalId;

  componentWillMount() {
    console.log('componentWillMount');
    this.intervalId = setInterval(() => {
      const now = String(new Date());
      this.setState({
        now
      });
    }, 1000);
    console.log('setInterval', this.intervalId);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.intervalId);
    console.log('clearInterval(this.intervalId)', this.intervalId);
  }

  onChange (event: InputEvent) {
    //@ts-ignore
    const data = event.target.value;
    this.setState({data});
  }
  onKeyPress (event: KeyboardEvent) {
    const data = event.key;
    this.setState({data: this.state.data + data});
  }

  render() {
    const {data} = this.state;
    return (
      <div id="data-binding">
        <h1>
          Data Binding - Responsive
        </h1>
        {/*<input type="text" onKeyPress={this.onKeyPress} value={data}/>*/}
        <label htmlFor="onChange">
          onChange
          <input type="text" id="onChange" onChange={this.onChange} value={data}/>
        </label>
        <hr/>
        <label htmlFor="onInput">
          onInput
          <input type="text" id="onInput" onInput={this.onChange} value={data}/>
        </label>
        <hr/>
        <div id={data}>see the attribute: id, {data}</div>
      </div>
    )
  }
}