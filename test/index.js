const { WaitGroup } = require("..");

const group = new WaitGroup();

group.add(2);

setTimeout(() => {
  group.remove(1);
}, 1500);

setTimeout(() => {
  group.remove(1);
}, 1000);

console.log(1);

group.wait().then(() => {
  console.log(2);
});
