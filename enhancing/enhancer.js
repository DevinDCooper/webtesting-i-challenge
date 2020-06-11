

function succeed(item) {
if (item.enhancement < 20){
  item.enhancement += 1
} 
  return item;
}

function fail(item) {
  if(item.enhancement < 15) {
    item.durability -= 5
  } else if (item.enhancement > 16) {
    item.enhancement -= 1
  } else if (item.enhancement >= 15) {
    item.durability -= 10
  } 
  return item ;
}

const repair = (item) => ({ ...item, durability: 100})






function get(item) {
  return { ...item };
}
module.exports = {
  succeed,
  fail,
  repair,
  get,
};