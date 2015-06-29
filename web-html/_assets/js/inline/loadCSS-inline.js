/*!
loadCSS: load a CSS file asynchronously.
[c]2014 @scottjehl, Filament Group, Inc.
Licensed MIT
*/
function loadCSS( href, before, media){
	 var d=document,ref = d.getElementsByTagName( "script" )[ 0 ],xhr = new XMLHttpRequest();
     xhr.open("GET", href, true);
     xhr.onreadystatechange = function() {
       if (xhr.readyState==4 && xhr.status==200)
       {
	     var style = d.createElement('p');
         style.innerHTML = 'x<style type="text/css" media='+(media || "all")+'>' + xhr.responseText + '</style>';
         ref.parentNode.insertBefore(style.lastChild, ref);
         d.cookie = encodeURIComponent("css") + "=" + encodeURIComponent(href);
       }
	 }
     xhr.send();
}