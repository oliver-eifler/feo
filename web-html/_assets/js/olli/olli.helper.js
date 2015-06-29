/**
 * Olli Framework
 * This file is part of the Olli-Framework
 * Copyright (c) 2012-2015 Oliver Jean Eifler
 *
 * @version 0.0.1
 * @link http://www.oliver-eifler.info/
 * @author Oliver Jean Eifler <oliver.eifler@gmx.de>
 * @license http://www.opensource.org/licenses/mit-license.php MIT License
 *
 * Olli Library; Add dom base functions ;)
 @include('olli.base')
 @include('olli.lib')
 */
(function (root, ns, factory) {
    var lib = _namespace(root,ns);
    lib.extend(factory(lib));
}(this,olli_name,function (_lib,undefined) {

var _self = this;
var getScrollbarSize = function()
{
    if (getScrollbarSize.e === undefined)
    {
        var e = _doc.createElement('div');
        e.id="SBS";
        e.style.cssText = 'position:absolute;overflow:scroll;top:-100px;left:-100px;width:100px;height:100px;';
        _body.insertBefore(e, _body.firstChild);
        getScrollbarSize.e = e;
    }
    var e = getScrollbarSize.e;
    return {height:100 - e.clientHeight, width:100 - e.clientWidth};
};

var getScrollbarVisible = function()
{
    return _getSBLive(_w);
    function _getSBLive(w)
    {
        var d = w.document, c = d.compatMode;
        r = c && /CSS/.test(c) ? d.documentElement : d.body;
        if (typeof w.innerWidth == 'number')
        {
            return {h:w.innerHeight > r.clientHeight, v:w.innerWidth > r.clientWidth };
        }
        else
        {
            return {h:r.scrollWidth > r.clientWidth, v:r.scrollHeight > r.clientHeight };
        }
    };
};
function xDef()
{
  for (var i=0, l=arguments.length; i<l; ++i) {
    if (typeof(arguments[i]) === 'undefined')
      return false;
  }
  return true;
}
function xClientHeight()
{
  var v=0,d=document,w=window;
  if((!d.compatMode || d.compatMode == 'CSS1Compat') /* && !w.opera */ && d.documentElement && d.documentElement.clientHeight)
    {v=d.documentElement.clientHeight;}
  else if(d.body && d.body.clientHeight)
    {v=d.body.clientHeight;}
  else if(xDef(w.innerWidth,w.innerHeight,d.width)) {
    v=w.innerHeight;
    if(d.width>w.innerWidth) v-=getScrollbarSize().height;
  }
  return v;
}
function xClientWidth()
{
  var v=0,d=document,w=window;
  if((!d.compatMode || d.compatMode == 'CSS1Compat') && !w.opera && d.documentElement && d.documentElement.clientWidth)
    {v=d.documentElement.clientWidth;}
  else if(d.body && d.body.clientWidth)
    {v=d.body.clientWidth;}
  else if(xDef(w.innerWidth,w.innerHeight,d.height)) {
    v=w.innerWidth;
    if(d.height>w.innerHeight) v-=getScrollbarSize().width;
  }
  return v;
}
var getViewport = function()
{
var width = minWidth = maxWidth = xClientWidth()
    ,height = minHeight = maxHeight = xClientHeight()
    ,sb_size = getScrollbarSize()
    ,sb = getScrollbarVisible();
        if (!sb.v)
            minWidth-=sb_size.width;
        else
            maxWidth+=sb_size.width;

        if (!sb.h)
            minHeight-=sb_size.height;
        else
            maxHeight+=sb_size.height;


    return {width:width,height:height,minWidth:minWidth,minHeight:minHeight,maxWidth:maxWidth,maxHeight:maxHeight};
}
var exp = {
    getScrollbarSize: getScrollbarSize
    ,getScrollbarVisible: getScrollbarVisible
    ,getViewport: getViewport
}
return exp;
}));
