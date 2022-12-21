pizza = 8;
function comerPizza() {
  pizza -= 1;
}
while (pizza > 0) { 
  comerPizza();
  if (pizza > 0) {
    console.log(`Você comeu 1 fatia, restam ${pizza} fatias!`)
  } else {
    console.log(`Você comeu todas as fatias!`)
  }
}
