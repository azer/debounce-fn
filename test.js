var test = require("prova");
var debounce = require("./");

test('debounce', function (t) {
  var counter = 0;
  var incr = debounce(rawIncr, 250);

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
