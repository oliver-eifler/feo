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
 * Olli Library; Add dom functions ;)
 @include('olli.base')
 @include('olli.lib')
 */
(function (root, ns, factory) {
    var lib = _namespace(root,ns);
    lib.extend(factory(lib));
}(this,olli_name,function (_lib,undefined) {

var _self = this;

var remove = function(element) {
  element.parentNode.removeChild(element);
}

var exp = {
    remove: _lib.fn.bind(_lib,remove)
}
return exp;
}));
