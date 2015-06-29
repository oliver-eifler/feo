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
 * Olli Library; Add ajax module & functions ;)
 @include('olli.base')
 @include('olli.lib')
 */
(function (root, ns, factory) {
    var lib = _namespace(root,ns);
    lib.extend(factory(lib));
}(this,olli_name,function (_lib,undefined) {

var _self = this
,noop = function(){}
,defaults = {async:true,data:null,success:noop,error:noop};

var ajax = function(type,url,options)
{
    type = (typeof type === 'string' && !_isBlank(type) )?type:'GET';
    var opt = _extend(defaults,options)
    ,xhr = new XMLHttpRequest();

    xhr.open("GET", url, opt.async);
    xhr.onerror = xhr.ontimeout = function() {opt.error(xhr);}
    xhr.onreadystatechange = function(e) {
        if (xhr.readyState === 4)
        {
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
            console.log("ajax success");
            opt.success(xhr);
          }
          else {
            opt.error(xhr);
          }
        }
      }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

var exp = {
    ajax: ajax
    ,ajaxGet: function(u,o) {return ajax('GET',u,o);}
}
return exp;
}));
