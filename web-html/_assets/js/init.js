/* Init.js
init page async
#include components/modernizr-custom.js;
#include components/webfontloaderr.js;
*/
(function(w, d) {

  var m=Modernizr,c=[],cls=d.documentElement.className,svg=(m.inlinesvg && 'XMLHttpRequest' in w && _cfg.svgfile !== false);

  //its ie
  if (typeof d.documentMode === "number")
  {
    c.push("ie");
    c.push("ie-"+d.documentMode);
    if (d.documentMode < 9)
       c.push("no-cbh");
  }
  else
    c.push("no-ie");

  c.push((((m.flexbox || m.flexboxlegacy ||m.flexboxtweener) && m.flexwrap)?"":"no-")+"flex");
  !svg && c.push("no-svg");
  c.push((isModernBrowser()?"":"no-")+"modern");
  d.documentElement.className =  "js "+c.join(" ");
  window._isModernBroweser = isModernBrowser;
  WebFont.load({
    classes: false,
    custom: {
      families: ['Roboto:n4','Playfair Display:n4']
    },
    active: function() {d.documentElement.className = d.documentElement.className + ' ' + 'wf-loaded';},
    fontactive: function(familyName, fvd) {console.log("font: "+familyName+":"+fvd+" loaded..");}
  });
 //Load inline svgs
 if (svg) {
    var ajax = new XMLHttpRequest()
    ,nosvg = function() {
       d.documentElement.className = d.documentElement.className + " no-svg";
     }
    ajax.open("GET", _cfg.svgfile, true);
    ajax.send();
    ajax.onerror = ajax.ontimeout = nosvg;
    ajax.onreadystatechange = function(e) {
      if (ajax.readyState === 4) {
        if (ajax.status >= 200 && ajax.status < 300 || ajax.status === 304) {
          var div = d.createElement("div");
          div.style.display='none';
          div.innerHTML = ajax.responseText;
          d.body.insertBefore(div, d.body.childNodes[0]);
          d.documentElement.className = d.documentElement.className + " svg";
        }
        else {
          nosvg();
        }
      }
    }
 }

 function isModernBrowser()
 {
    return (m.json && m.history && 'XMLHttpRequest' in w && m.inlinesvg && m.queryselector && m.es5array);
 }

})(this,this.document);