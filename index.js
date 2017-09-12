var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  animal = 'cat';
  return animal
}

function add2(n) {
  const two = 2;
  return n + two
}

function funkyFunction() {
  function inner() {
    var funky = "FUNKY!";
    return funky;
  }

  return inner();
}

var theFunk = funkyFunction().
theFunk
