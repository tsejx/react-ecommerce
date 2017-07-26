const Scroll = function(target = 290,duration = 300){
  if (window.__scrollMove) return;
  const begin = document.documentElement.scrollTop || document.body.scrollTop;
  const change = target - begin;
  const start = Date.now();
  (function fn(){
      window.__scrollMove = window.requestAnimationFrame(fn);
      var nowTime = Date.now() - start;
      if(nowTime >= duration){
        nowTime = duration;
        window.cancelAnimationFrame(window.__scrollMove);
        window.__scrollMove = null;
      }
      setScrollTop(change / duration * nowTime + begin);
    })();
  function setScrollTop(t){
    return document.documentElement.scrollTop = document.body.scrollTop = t;
  }
}

export default Scroll;