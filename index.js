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

function outerFunction() { 
  return function innerScope() { 
    return "FUNKY!";
  }
}

var theFunk = outerFunction()
theFunk
