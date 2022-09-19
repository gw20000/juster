# juster

it's a universal JavaScript wheel.

## installation

```
npm  i  juster

```

## usage

```
    const { flowPath } = require('juster')
    
    let list = []
    
    for (let i = 0; i < 50; i++) {
    list.push(i)
    }


    const cb = (listItem) => {
    console.log(listItem)
   }


  flowPath.throttleSendData(list, 9, 1000, cb) 
  
  // or  flowPath.throttleSendData(list, 9, cb)  is the same 
  
 ```


