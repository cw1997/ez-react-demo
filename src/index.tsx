import React from '@cw1997/ez-react';
import ReactDOM from 'ez-react-dom';

import './index.sass'
import DataBinding from "./components/DataBinding";
import Counter from "./components/Counter";
import Clock from "./components/Clock";


function SimpleComponent(props: {children: string | number | boolean}) {
  const {children} = props;
  return (
    <div className="SimpleComponent">
      <h1>SimpleComponent</h1>
      data is {children}, type is {typeof children}
    </div>
  )
}

function App(props: { data: string }) {
  return (
    <div className="App">
      <Counter name={'cw1997'} sex={'male'}/>
      <hr/>
      <Counter name={'changwei1006'} sex={'female'}/>
      <hr/>
      <Counter name={'with dangerous string <script>alert(/1/)</script>>'} sex={'male'}/>
      <hr/>
      <Clock>Clock</Clock>
      <hr/>
      <DataBinding/>
      <hr/>
      <div className="my-div" onClick={() => {
        const date = new Date;
        console.table([
          ['date.toISOString(),', date.toISOString()],
          ['date.toDateString(),', date.toDateString()],
          ['date.toJSON(),', date.toJSON()],
          ['date.toLocaleDateString(),', date.toLocaleDateString()],
          ['date.toLocaleString(),', date.toLocaleString()],
          ['date.toLocaleTimeString(),', date.toLocaleTimeString()],
          ['date.toTimeString(),', date.toTimeString()],
          ['date.toString(),', date.toString()],
          ['date.toUTCString(),', date.toUTCString()],
        ]);
      }}>
        <p>click me, then see the console</p>
        start - {props.data}
        <div id="inner-div">inner div</div>
        end - {props.data}
      </div>
      <hr/>
      <SimpleComponent>123</SimpleComponent>
      <SimpleComponent>{123}</SimpleComponent>
      <SimpleComponent>{'123'}</SimpleComponent>
      <SimpleComponent>true</SimpleComponent>
      <SimpleComponent>{true}</SimpleComponent>
      <SimpleComponent>{'true'}</SimpleComponent>
      <SimpleComponent>false</SimpleComponent>
      <SimpleComponent>{false}</SimpleComponent>
      <SimpleComponent>{'false'}</SimpleComponent>
    </div>
  )
}

const dom = document.getElementById('root');
ReactDOM.render(<App data={'cw1997'}/>, dom);
