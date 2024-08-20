const EventEmitter = require("events");

let emitter = new EventEmitter();

let list1 = (message) => {
  console.log("listener 1 :", message);
};

let list2 = (message) => {
  console.log("listener 2 :", message);
};
let list3 = (message) => {
  console.log("listener 3 : ", message);
};
let list4 = (message) => {
  console.log("listener 4 : ", message);
};

emitter.once("eventA", list1);
emitter.on("eventA", list2);
emitter.on("eventB", list2);
emitter.addListener("eventB", list3);
emitter.addListener("eventC", list3);
emitter.addListener("eventD", list3);
emitter.on("eventD", list4);
emitter.on("eventE", list4);
emitter.once("eventF", list1);

emitter.emit("eventA", " event a emitted");
emitter.emit("eventB", " event b emitted");
emitter.emit("eventC", " event c emitted");
emitter.emit("eventD", " event d emitted");
emitter.emit("eventE", " event e emitted");
emitter.emit("eventF", " event f emitted");

// commenting
console.log("-------------------------------------------------------------");

emitter.emit("eventA", " event a emitted");
emitter.emit("eventB", " event b emitted");
emitter.emit("eventC", " event c emitted");
// emitter.emit("eventD", " event d emitted");
emitter.emit("eventE", " event e emitted");
// emitter.emit("eventF", " event f emitted");
