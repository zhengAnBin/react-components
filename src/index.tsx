import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import RadialMenu from "./components/radialMenu"

const iconSize = 20
const size = 50

const radialData = {
  startPoistion: 30,
  angleExtent: 100,
  radius: 100,
  childrens: [
    {
      iconName: "complete"
    },
    {
      iconName: "scenario"
    },
    { 
      startPoistion: 80,
      angleExtent: 80,
      radius: 100,
      iconName: "notice",
      childrens: [
        { iconName: "complete" },
        { iconName: "scenario" }
      ]
    }
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <div 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        width: "100%", 
        height: "100vh" 
      }}
    >
      <RadialMenu data={radialData} size={size} iconSize={iconSize}></RadialMenu>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
