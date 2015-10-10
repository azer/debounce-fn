var test = require("prova");
var debounce = require("./");

test('debounce with default wait time', function (t) {
  var counter = 0;
  var incr = debounce(rawIncr);

  t.plan(1);

  incr(100);
  incr(200);

  setTimeout(function () {
    incr(300);
    incr(4);
  }, 50);

  setTimeout(function () {
    incr(500);
    incr(600);
    incr(700);
    incr(8);
  }, 500);

  setTimeout(function () {
    t.equal(counter, 12);
  }, 900);

  function rawIncr (n) {
    counter += n;
  }
});

test('debounce with 500ms', function (t) {
  t.plan(1);

  var counter = 0;
  var incr = debounce(rawIncr, 500);

  incr(100);
  incr(200);

  setTimeout(function () {
    incr(300);
    incr(10);
  }, 250);

  setTimeout(function () {
    t.equal(counter, 10);
  }, 900);

  function rawIncr (n) {
    counter += n;
  }
});
