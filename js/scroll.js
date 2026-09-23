// 顶部滚动进度条
(function () {
  var line = document.querySelector('#progress > .line')
  if (!line) return
  var scrollAvail = 1
  var ticking = false
  function measure() { // 只在 resize 时读一次 scrollHeight，避免每次滚动强制重排
    scrollAvail = (document.documentElement.scrollHeight || document.body.scrollHeight) -
      (document.documentElement.clientHeight || document.body.clientHeight) || 1
  }
  function update() {
    ticking = false
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    line.style.width = Math.min(100, (scrollTop / scrollAvail) * 100) + '%'
  }
  measure()
  window.addEventListener('resize', measure)
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
})()
