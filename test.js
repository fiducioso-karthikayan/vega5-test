// Allocating util module 
const util = require('util');
const vg = require("vega");
const wait = require("wait.for");

const cbfy = {
  getSVG: () => {
    // Calling callbackify() 
    const view = new vg.View(vg.parse(testData), { renderer: 'svg' });
    const callback_function = util.callbackify(() => view.toSVG());
    // let result;
    // result = wait.for(callback_function);
    // console.log('result :>> ', result);
    return wait.for(callback_function);
  }
  
}

// // Async function to be called 
// // from util.callbackify() method 
// async function async_function() {
//   // return Promise.reject(new Error( 
//   // 	'this is an error message!')); 
//   const view = await new vg.View(vg.parse(testData), { renderer: 'svg' }).runAsync();
//   const svg = await view.toSVG();
//   return svg;
// }

const testData = {
  "description": "A basic bar chart example, with value labels shown upon mouse hover.",
  "width": 400,
  "height": 200,
  "padding": 5,

  "data": [
    {
      "name": "table",
      "values": [
        { "category": "A", "amount": 28 },
        { "category": "B", "amount": 55 },
        { "category": "C", "amount": 43 },
        { "category": "D", "amount": 91 }
      ]
    }
  ],
  "scales": [
    {
      "name": "xscale",
      "type": "band",
      "domain": { "data": "table", "field": "category" },
      "range": "width",
      "padding": 0.05,
      "round": true
    },
    {
      "name": "yscale",
      "domain": { "data": "table", "field": "amount" },
      "nice": true,
      "range": "height"
    }
  ],

  "axes": [
    { "orient": "bottom", "scale": "xscale" },
    { "orient": "left", "scale": "yscale" }
  ],

  "marks": [
    {
      "type": "rect",
      "from": { "data": "table" },
      "encode": {
        "enter": {
          "x": { "scale": "xscale", "field": "category" },
          "width": { "scale": "xscale", "band": 1 },
          "y": { "scale": "yscale", "field": "amount" },
          "y2": { "scale": "yscale", "value": 0 }
        },
        "update": {
          "fill": { "value": "steelblue" }
        },
        "hover": {
          "fill": { "value": "red" }
        }
      }
    }
  ]
};
// cbfy.getSVG();
// wait.launchFiber(cbfy.getSVG);
// console.log(getSVG());

module.exports = cbfy;