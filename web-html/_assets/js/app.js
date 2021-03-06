/* THE FINAl APP */
/*
(function (root, ns, factory) {
    factory.call(root,Objectifier.get(ns));
}(this,olli_name,function ($,undefined) {
*/
( function($,undefined) {

var _self = this
    ,oPageInfo = {title:null,url:null}
    ,bIsLoading = false
    ,bUpdateURL = false
    ,support = {localStorage:testLocalStorage()}
    ,vp = {width:0,minWidth:0}
    ,old_pad = 0
    ,resize_ticking = false
    ,$EVENT = $.event
    /*Elements*/
    ,section$
    ;
    /*
    var breakpoint = {};
    breakpoint.refreshValue = function () {
       this.value = window.getComputedStyle(_body, ':before').getPropertyValue('content').replace(/\"/g, '');
    };
    */




    var ready = function()
    {
        console.log(_self);
        oPageInfo.title = _doc.title;
        oPageInfo.url = _w.location;
        /* Elements */
        section$ = _$$(".headerContainer,.menuContainer,.pageContainer,.footerContainer");

        vp = $.getViewport();
        resize();

        $EVENT.on(_w,"resize",onResize.bind(_self));
        $EVENT.on(_body,'click.ajax','a',function(e){
            requestPage(e.currentTarget) && e.stop();
        });
        var transEndEventNames = {
          "WebkitTransition" : "webkitTransitionEnd",
          "MozTransition"    : "transitionend",
          "OTransition"      : "oTransitionEnd",
          "msTransition"     : "MSTransitionEnd",
          "transition"       : "transitionend"
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];
        $EVENT.on(_$("#fs"),transEndEventName, onResize.bind(_self));

        _w.onpopstate = popState;
        initPage();

    };
    var initPage = function() {
    }
    var onResize = function(e)
    {
        var owidth = vp.width;
        vp = $.getViewport();
        if (!resize_ticking)
            requestAnimationFrame(resize);
          resize_ticking = true;
    }
    var resize = function()
    {

        var pad = 0;
        if (vp.width == vp.maxWidth)
            pad = (vp.maxWidth - vp.minWidth);
        if (old_pad != pad)
        {
          old_pad = pad;
          section$.forEach(function(node){$.setCSS(node,"padding-right",""+(pad) +"px");})
        }
        resize_ticking = false;
    }
    var setVisitedLinks = function()
    {
        if (support.localStorage !== true)
            return;
        // http://joelcalifa.com/blog/revisiting-visited
        localStorage.setItem('visited-'+window.location.pathname.toLowerCase(),true);
        var links = document.getElementsByTagName('a');
        for (var i=0;i<links.length;i++)
        {
            var link = links[i];
            if (link.host != window.location.host)
                continue;
            if (olli.hasClass(link,"btn"))
                continue;
            if (link.href.indexOf('#') !== -1 && link.pathname.toLowerCase() == window.location.pathname.toLowerCase())
                continue;
            if (localStorage.getItem('visited-' + link.pathname.toLowerCase())) {
                link.setAttribute('visited','');
            }
        }
    }

    /* THE AJAX/HISTORY STUFF */
    var popState = function(event)
    {
        if (!event.state)
            return;
        bUpdateURL = false;
        oPageInfo.title = event.state.title;
        oPageInfo.url = event.state.url;
        getPage();
    }
    var requestPage = function(link) {
         if (link.host != _w.location.host)
            return false; //default
         if (getFilePathExtension(link.pathname) != "")
            return false; //default
         if (link.pathname == _w.location.pathname) {
           return !(link.href.indexOf('#') !== -1);
         }
         bUpdateURL = true;
         getPage(link.href);
         return true;
    }
    var getPage = function(url) {
        if (url) { oPageInfo.url = url;}
        $.ajaxGet(oPageInfo.url+"?json",{error:pageError,success:pageLoad});
    }
    var pageError = function(xhr) {
        _w.location.assign(oPageInfo.url);
    }
    var pageLoad = function(xhr) {
      var data = JSON.parse(xhr.responseText);;
       _doc.title = oPageInfo.title = data.title;
       if (bUpdateURL) {
         history.pushState(oPageInfo, oPageInfo.title, oPageInfo.url);
         bUpdateURL = false;
       }
       _$('#pageContent').innerHTML = data.content;
       _$('#pageHeader').innerHTML = data.header;
       _$('#pageNav').innerHTML = data.nav;
       _$('#pageCSS').innerHTML = data.css;
       _$('#siteMenu').innerHTML = data.menu;
       var hash = _w.location.hash,
       top = 0;
       if (hash.length > 1) {
        var el = _$(hash);
        if (el)
            top = getOffset(el).top;
       }
       _html.scrollTop = top;
       _body.scrollTop = top;
        vp = $.getViewport();
        resize();

       /*
       $.addClass(_$('#Site'),"loading");

       _$('#SCC').innerHTML = data.content;
       _w.scrollTo(0,0);
       _$('#bc').outerHTML = data.bc;

       $.remClass(_$$('a.cur'),'cur');
       $.loop(_$$('a'),function(el) {
         if (el.host == _w.location.host && (el.pathname == data.uri || el.pathname == data.uricmd))
            $.addClass(el,"cur");
         });
        setVisitedLinks();
        onResize();
       $.remClass(_$('#Site'),"loading");

         if (_isArray(data.scripts)) {
           for (var i = 0, n = data.scripts.length; i < n; i++) {
              loadJS(data.scripts[i]);
           }
         }
       */
     }

    /*
    function loadJS(src) {
      $.remove(_$$("script[ajax]"));

	var script = _doc.createElement( "script" );
    script.type = "text/javascript";
	script.src = src+"?cb="+new Date().getTime();
    script.setAttribute("ajax",true);
	_body.appendChild(script);
	return script;
    }
    */
/*feature tests*/
    function testLocalStorage()
    {
      var mod = 'olli';
      try {
        localStorage.setItem(mod, mod);
        localStorage.removeItem(mod);
        return true;
      } catch (e) {
        return false;
      }
    };
    function getFilePathExtension(path) {
	  var filename = path.split('\\').pop().split('/').pop();
	  var lastIndex = filename.lastIndexOf(".");
	  if (lastIndex < 1)
        return "";
	  return filename.substr(lastIndex + 1);
    };
    function getOffset(oNode) {
      var nLeft = 0, nTop = 0;
      for (var oItNode = oNode; oItNode; nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent);
      return {left:nLeft,top:nTop};
   }

$.docReady(ready);
/*}));*/
})(Objectifier.get(olli_name));

