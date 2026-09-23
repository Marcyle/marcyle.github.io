(function () {
  var rocket = document.getElementById('rocket')
  if (!rocket) return
  var showing = false
  var ticking = false
  function update() {
    ticking = false
    var should = (window.pageYOffset || document.documentElement.scrollTop) > window.innerHeight * 0.5
    if (should === showing) return // 状态没变就不碰 class，避免每帧触发样式重算
    showing = should
    rocket.classList[should ? 'add' : 'remove']('show')
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update) }
  }, { passive: true })
  $(rocket).click(function () {
    $(rocket).addClass("launch");
    $("html, body").animate({
      scrollTop: 0
    }, 1000, function () {
      $(rocket).removeClass("show launch");
    });
    return false;
  });
})()
