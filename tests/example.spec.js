// Utilizando o expect do módulo chai
const expect = require('chai').expect;

describe('Main', function() {
  let arr;

  before(function () {
    // inicia uma conexão no banco
    // criar um conjunto de dados
  });

  after(function() {
    // fecha conexão do banco
    // apagar esse conjunto de dados
  });

  beforeEach(function() {
    arr = [1, 2, 3];
  });

  afterEach(function (){

  });

  // testar tipos ou a existencia (smoke test)
  it('should be an array', function() {
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function () {
    expect(arr.pop() === 3).to.be.true;
  });

  it('should remove the value 3 when use pop in the array', function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

});

// Ciclo dos hooks nessa situação acima
/*
  before
  beforeEach
  test 1
  afterEach
  beforeEach
  test 2
  afterEach
  after
*/
