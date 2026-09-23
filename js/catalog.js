// Catalog
var toc = document.getElementById('toc')

if (toc != null) {
  var tocPosition = toc.offsetTop
  var height_header = $("#signature").height()
  var fixed = false
  var ticking = false
  function update() {
    ticking = false
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    var should = scrollTop > tocPosition - 60
    if (should === fixed) return // 状态没变就不碰 class
    fixed = should
    toc.classList[should ? 'add' : 'remove']("toc-fixed")
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
}
