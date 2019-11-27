# @dreamjser/core-util
the most commonly used in develop

## Installation

```
    npm install @dreamjser/core-util
    
```

## nodejs

```
    const util = require('@dreamjser/core-util');
```

## document

```
    // @param obj{object} => {a: '1', b: '2'}
    // @return {string} a=1&b=2
    util.encodeQueryString(obj);

    // @param str{string} => a=1&b=2
    // @return {object} {a:'1', b: '2'}
    util.decodeQueryString(str);
```