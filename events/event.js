const EventEmitter = require("events");

let emitter = new EventEmitter();

emitter.on("event1", (message) => {
  console.log(message);
});

emitter.addListener("event2", (message) => {
  console.log(message);
});

emitter.once("event3", (message) => {
  console.log(message);
});

emitter.emit("event1", "message 1");
emitter.emit("event2", "message 2");
emitter.emit("event3", "message 3");
emitter.emit("event1", "message 1 repeat");
emitter.emit("event3", "message 3 again");
