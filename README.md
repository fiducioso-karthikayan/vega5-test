This stub is used for experimenting the possibility of vega chart view to return svg synchronously.

# Goal
To check for the possibility of synchronous chart rendering in vega 5

# Problem
We want the chart to be returned instantly rather than resolving promise in order to append it to html with help of parchment. But currently vega provides promises as a way of rendering in server side.

# Run
```shell
npm install
npm test
```

# Usage
- try using wait.for package. It helps in converting callbacks to synchronous and hence Promise from **view.toSVG()** to be converted to callback before using wait.for.
- make use of util.callbackify to convert promise or asyn functions to callbacks