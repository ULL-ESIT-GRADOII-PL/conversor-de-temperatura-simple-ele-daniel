var assert = chai.assert;

suite ('temperatura', function() {
  test('32e1F = 0e1C', function() {
    original.value = "32F";
    calculate();
    assert.deepEqual(converted.innerHTML, "0.0e1C");
  });
});
