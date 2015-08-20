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
 * Utilitie functions used by all olli plugins ;)
 */
var olli_name = 'olli';
function _namespace( ns, ns_string ) {
   if (ns_string===undefined)
        ns_string = olli_name;

    var parts = ns_string.split('.'),
        parent = ns,
        pl, i,name=(typeof ns.namespace==='string')?ns.namespace+".":"";

    pl = parts.length;
    for (i = 0; i < pl; i++) {
        //create a property if it doesnt exist
        name = name + (!i?"":".")+parts[i];
        if (typeof parent[parts[i]] == 'undefined') {
            parent[parts[i]] = {namespace:name};
        }

        parent = parent[parts[i]];
    }
    return parent;
};
function _$ (selector, el) {
     if (!el) {el = document;}
     return el.querySelector(selector);
};
function _$$ (selector, el) {
     if (!el) {el = document;}
     //return el.querySelectorAll(selector);
     // Note: the returned object is a NodeList.
     // If you'd like to convert it to a Array for convenience, use this instead:
     return Array.prototype.slice.call(el.querySelectorAll(selector));
};
var _isBlank = function(str) {return (str.length === 0 || !/[^\s]+/.test(str));}
var _isArray = function(ar) {return Array.isArray(ar);}
var _toArray = function(values) {
    if (typeof values === 'string' && !_isBlank(values))
        return _cleanArray(values.trim().split(/\s*\s\s*/));
    else if(Array.isArray(values))
        return _cleanArray(values);
    else
        return [];
}
var _cleanArray = function(array) {
    var v = [];
    for (var i = 0, n = array.length; i < n; i++)
    {
        if (typeof array[i]==='string' && !_isBlank(array[i]))
            v.push(array[i].trim());
    }
    return v;
}

/* expand some javascript objects with utilitie functions*/
Element.prototype._$ = function (selector) { // Only for HTML
    return this.querySelector(selector);
};
Element.prototype._$$ = function (selector) { // Only for HTML
    return Array.prototype.slice.call(this.querySelectorAll(selector));
};
Object.prototype.extend = function(obj) {
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        this[i] = obj[i];
      }
    }
};
var _extend = function(target) {
  Array.prototype.slice.call(arguments, 1).forEach(function(source) {
    target.extend(source);
  })
  return target
}
String.prototype._isBlank = function() {
  return (this.length === 0 || !/[^\s]+/.test(this));
};
var Objectifier = (function() {

	// Utility method to get and set objects that may or may not exist
	var objectifier = function(splits, create, context) {
		var result = context || window;
		for(var i = 0, s; result && (s = splits[i]); i++) {
			result = (s in result ? result[s] : (create ? result[s] = {} : undefined));
		}
		return result;
	};
    var extendifier = function(target,source) {
      for (var i in source) {
        if (source.hasOwnProperty(i)) {
          target[i] = source[i];
        }
      }
      return target;
    };
	return {
		// Creates an object if it doesn't already exist
		set: function(name, value, context) {
			var splits = name.split('.'), s = splits.pop(), result = objectifier(splits, true, context);
			return result && s ? (result[s] = value) : undefined;
		},
		get: function(name, create, context) {
			return objectifier(name.split('.'), create, context);
		},
		exists: function(name, context) {
			return this.get(name, false, context) !== undefined;
		},
        extend: function(name,value,context) {
         return extendifier(this.get(name,true,context),value);
        },
        register: function(name,factory,context) {
          var root = context || window
              ,obj = this.get(name,true,root);
          obj.classname = obj.classname || name; 
          return extendifier(obj,factory.call(root,obj));
        }
	};

})();
/* Variables */
var _w = window //window
,_root = this
,_doc = _w.document //document
,_html = _doc.documentElement
,_body = _$("body");
