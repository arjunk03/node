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

emitter.on("event1", list1);
emitter.addListener("event2", list2);
emitter.addListener("event2", list3);

emitter.on("event3", list3);
emitter.on("event2", list1);

emitter.addListener("eevnt4", list4);

console.log(" total default listeneres :", emitter.getMaxListeners());
console.log(emitter.listenerCount());
console.log(" listeneres for event 2", emitter.listenerCount("event2"));
console.log(" listeneres for event 1", emitter.listenerCount("event1"));

emitter.emit("event1", "1 emitted");
emitter.emit("event1", "1 again emitted");
emitter.emit("event2", "2  emitted");
emitter.emit("event3", "3 emitted");
emitter.emit("event4", "4 emitted");
