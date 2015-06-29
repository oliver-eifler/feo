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
 * Init Olli Library ;)
 */
(function (root, ns, factory) {
    var lib = _namespace(root,ns);
    lib.extend(factory(lib));
}(this,olli_name,function (_lib,undefined) {

var _self = this
    ,ver={maj:0,min:1,build:1}
    ,domwrap = function(fn) {
        /* ollis bitterböser wrapper für dom.elemente */
        var args = [];
        for (var i = 1;i<arguments.length;i++)
            args.push(arguments[i]);
        var el = args[0];
        if (_isArray(el))
        {
            for (var i = 0, n = el.length; i < n; i++)
            {
                args[0] = el[i];
                fn.apply(this,args);
            }
        }
        else
          fn.apply(this,args);
        return _lib;
    }
    //usage = func: _lib.fn.bind(_lib,element-func)

    ,domloop = function(el,fn) {
        if (_isArray(el))
        {
            for (var i = 0, n = el.length; i < n; i++)
            {
                if (fn.call(this,el[i],i,el) === false)
                    return;
            }
        }
        else
          fn.call(this,el,0,null);
    }
    ,prefix = (function () {
      var styles = _w.getComputedStyle(_html, ''),
          pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
          )[1];
      return {
        dom: pre == 'ms' ? 'MS' : pre,
        lowercase: pre,
        css: '-' + pre + '-',
        js: pre == 'ms' ? pre : pre[0].toUpperCase() + pre.substr(1)
      };
    })()
   ,styles = (function() {
     return Array.prototype.slice.call(_w.getComputedStyle(_html, ''))
   })()
   ,pad = function(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    };//export functions
  /**
   * contains checks to see if a string contains another string
   *
   * @access private
   * @function contains
   * @param {string} str - The string we want to check for substrings
   * @param {string} substr - The substring we want to search the first string for
   * @returns {boolean}
   */

  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }

  ;
 /**
   * domToCSS takes a camelCase string and converts it to kebab-case
   * e.g. boxSizing -> box-sizing
   *
   * @access private
   * @function domToCSS
   * @param {string} name - String name of camelCase prop we want to convert
   * @returns {string} The kebab-case version of the supplied name
   */

  function domToCSS(name) {
    return name.replace(/([A-Z])/g, function(str, m1) {
      return '-' + m1.toLowerCase();
    }).replace(/^ms-/, '-ms-');
  };
   /**
   * cssToDOM takes a kebab-case string and converts it to camelCase
   * e.g. box-sizing -> boxSizing
   *
   * @access private
   * @function cssToDOM
   * @param {string} name - String name of kebab-case prop we want to convert
   * @returns {string} The camelCase version of the supplied name
   */

  function cssToDOM(name) {
    return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
      return m1 + m2.toUpperCase();
    }).replace(/^-/, '');
  };
  function toDOM(name) {
   if (name.indexOf('-') != -1) {
      // Convert kebab-case to camelCase
      name = cssToDOM(name);
    }
   return name;
  }
  function getStyleName(style,e) {
   if (style.indexOf('-') != -1) {
      style = cssToDOM(style);
   }
   if (e==undefined)
    e = _html;

   if (style in e.style) {
     return style;
   }

   // Creating style with vendor prefix
   style = prefix.js + style.slice(0,1).toUpperCase() + style.slice(1);
   // Checking again
   if (style in e.style) {
     return style;
   }
   // Browser has no support for this style. Shame! :)
  return false;
  }
  function setCSS(el,style,prop) {
    var s = getStyleName(style,el)
    if (s===false)
        return;
    el.style[s] = prop;
  }
  function getCSS(el,style) {
    style = domToCSS(style);
    var s = _w.getComputedStyle(el, '');
    return (s?(s.getPropertyValue(style)||s.getPropertyValue(prefix.css+style)):null);
    return null;
  }






var exp = {
  namespace: olli_name
  ,version: ver
  ,pad: pad
  ,getVersion: function() {return ""+ver.maj+"."+ver.min+"."+pad(ver.build,4);}
  ,fn: domwrap
  ,loop: domloop
  ,prefix: prefix
  ,toDOM: toDOM
  ,styles: styles
  ,getStyleName: getStyleName
  ,setCSS:setCSS
  ,getCSS:getCSS
}
return exp;
}));
/*
(function (root, ns, factory) {
    var lib = _namespace(root,olli_name);
    var module = _namespace(olli_name,ns);
    module.extend(factory(lib,module));
}(this,"module",function (lib,module,undefined) {


//export functions
var exp = {
  version:"0.0.1",
  test: function(){console.log("olli-module");}
}
return exp;
}));
*/