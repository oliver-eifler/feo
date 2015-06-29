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
 * Olli Library; Add base class functions ;)
 @include('olli.base')
 @include('olli.lib')
 */
(function (root, ns, factory) {
    var lib = _namespace(root,ns);
    lib.extend(factory(lib));
}(this,olli_name,function (_lib,undefined) {
var _self = this
,x = _w.classie;

    /* for the moment, we use classie as base */
    var hasClass = function(element,name) {return x.has(element,name);}
    ,addClass = function(element,name) {x.add(element,name);}
    ,removeClass = function(element,name) {x.remove(element,name);}
    ,toggleClass = function(element,name) {x.toggle(element,name);};

var exp = {
    hasClass: hasClass
    ,addClass: _lib.fn.bind(_lib,addClass)
    ,remClass: _lib.fn.bind(_lib,removeClass)
    ,toggleClass: _lib.fn.bind(_lib,toggleClass)
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