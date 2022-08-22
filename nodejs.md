## Global Objects in nodejs

1. global
2. module
3. process

## process:

- It is an inbuilt global object that is an instance of EventEmitter used to get information on current process. It can also be accessed using require() explicitly.

- It has argv[i] which is an array & allows to have access an argument at command line (process.argv)

- It has an on() method where you can exexute events, related to the ongoing process

```javascript
  console.log("First");
  process.on("beforeExit", () => {
    console.log("Third")
  })
  console.log("Second");

  //First, Second, Third

```
 

## global variables

1. \_\_dirname
2. \_\_filename
