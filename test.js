const assert = require('assert');
const removeCc = require('./js/test');

describe("Uppercase", function() {

  it("Up case", function() {
    assert.equal(removeCc('a'), 'A');
  });
});

describe("Replacement of Russian characters", function() {

    it("replacement 'a'", function() {
      assert.equal(removeCc('а'), 'A');
    });
    it("replacement 'в'", function() {
      assert.equal(removeCc('в'), 'B');
    });
    it("replacement 'с'", function() {
      assert.equal(removeCc('с'), 'C');
    });
    it("replacement 'е'", function() {
      assert.equal(removeCc('е'), 'E');
    });
});

describe("Failure to enter Russian symbols", function() {

  it("replacement 'п'", function() {
    assert.equal(removeCc('п'), '');
  });
  it("replacement 'ф'", function() {
    assert.equal(removeCc('ф'), '');
  });
  it("replacement 'л'", function() {
    assert.equal(removeCc('л'), '');
  });
});

describe("Colonization", function() {

  it("1 colon", function() {
    assert.equal(removeCc('AABB'), 'AA:BB');
  });
  it("2 colon", function() {
    assert.equal(removeCc('AABBCC'), 'AA:BB:CC');
  });
  it("3 colon", function() {
    assert.equal(removeCc('AA:BB:CC:DD'), 'AA:BB:CC:DD');
  });
  it("4 colon", function() {
    assert.equal(removeCc('AA:BB:CC:DD:FF'), 'AA:BB:CC:DD:FF');
  });
  it("5 colon", function() {
    assert.equal(removeCc('AABBCCDDFF11'), 'AA:BB:CC:DD:FF:11');
  });
});

describe("Сheck for valid characters", function() {

  it("Check [G-Z]", function() {
    assert.equal(removeCc('QW'), '');
  });
});

describe("Сheck for forbidden symbols", function() {

  it("Check '!@#$%^&*()[]{}'", function() {
    assert.equal(removeCc('!@#$%^&*()[]{}'), '');
  });
});


