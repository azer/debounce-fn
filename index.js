module.exports = debounce

function debounce(fn, wait) {
  var timer
  var args

  if (arguments.length == 1) {
    wait = 250
  }

  return function() {
    if (timer != undefined) {
      clearTimeout(timer)
      timer = undefined
    } else {
      timer = setTimeout(noop)
      fn.apply(undefined, arguments)
      return
    }

    args = arguments

    timer = setTimeout(function() {
      fn.apply(undefined, args)
    }, wait)
  }
}

function noop() {}
