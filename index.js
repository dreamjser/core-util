exports.decodeQueryString = (str) => {
  let queryObject = {}, queryArrary;

  if(!str) {
    throw 'param must be input';
  }

  if(typeof str !== 'string') {
    throw 'param must be string';
  }

  queryArrary = str.split('&');

  queryArrary.forEach((query) => {
    let arr = query.split('='), key = arr[0], value = arr[1];
    queryObject[key] = decodeURIComponent(value);;
  });

  return queryObject;
}

exports.encodeQueryString = (obj) => {
  const strArr = [];

  if(!obj) {
    throw Error('param must be input');
  }

  const keys = Object.keys(obj);

  keys.forEach((key) => {
    strArr.push(`${key}=${obj[key]}`);
  });

  return strArr.join('&');
}
