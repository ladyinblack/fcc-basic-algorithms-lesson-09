## SOLUTIONS 

## Alternate Solution 1
```js
function findElement(arr, func) {
  let num = 0;
  
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}
```
### Code Explanation
- Challenge asks us us to look through array.  This is done using a `for` loop.
- The `num` variable is being passed into the function, so we set it to each index in our array.
- The pre-defined function already checks each number for us, so if it is "true", we return undefined.


### Alternate Solution 2
```js
function findElement(arr, func) {
  return arr.find(func);
}
```

### REFERENCE LINKS
- [`Array.prototype.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)


### Alternate Solution 3
```js
function findElement(arr, func) {
  return arr[arr.map(func).indexOf(true)];
}
```
### Code Explanation
1. Look through the array given in the 1st parameter `arr` using the `.map()` method.
2. Use the function in the 2nd parameter as the callback function in `arr.map()`.
3. Acquire the index of the first number that meets the condition in the function.
4. Use the index to display the first available number that meets the condition.


### Alternate Solution 4 (Recursive Solution)
```js
function findElement(arr, func) {
  return arr.length && !func(arr[0]) ? findElement(arr.slice(1), func) : arr[0];
}
```

