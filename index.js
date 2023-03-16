function Monday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function Tuesday() {
  console.log("Go for a five-mile run");
  console.log("Swim 40 laps");
}

function Wednesday() {
  console.log("Go for a five-mile run");
  console.log("Go for a five-mile run");
}

function Thursday() {
  console.log("Go for a five-mile run");
  console.log("Pump iron");
}

function receivesAFunction(callback)
{
    callback();
}
function returnsANamedFunction()
{
    return function name(){}
}
function returnsAnAnonymousFunction()
{
    return function(){{}};
}