/* Init.js
init page async
#include components/modernizr-custom.js;
#include components/webfontloaderr.js;
*/
(function(w, d) {

  var m=Modernizr,c=[],cls=d.documentElement.className;

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
  //c.push(((m.inlinesvg && 'XMLHttpRequest' in w)?"":"no-")+"svg");
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
 function isModernBrowser()
 {
    return (m.json && m.history && 'XMLHttpRequest' in w && m.inlinesvg && m.queryselector && m.es5array);
 }

})(this,this.document);