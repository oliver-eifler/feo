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
 *! svg4everybody v1.0.0 | github.com/jonathantneal/svg4everybody
 */
(function (root, ns, factory) {
    var lib = _namespace(root,ns);
    lib.extend(factory(lib));
}(this,olli_name,function (_lib,undefined) {

  var d = document
  ,CACHE = CACHE || {};

  function svgload(filename) {
  	var uses = d.getElementsByTagName('use');
  	function embed(svg, g) {
  		if (g) {
  			var
  			viewBox = g.getAttribute('viewBox'),
  			fragment = d.createDocumentFragment(),
  			clone = g.cloneNode(true);

  			if (viewBox) {
  				svg.setAttribute('viewBox', viewBox);
  			}

  			while (clone.childNodes.length) {
  				fragment.appendChild(clone.childNodes[0]);
  			}

  			svg.appendChild(fragment);
  		}
  	}

  	function onload() {
  		var xhr = this, x = xhr.xstore = xhr.xstore || d.createElement('x'), s = xhr.s;
          d.documentElement.className = d.documentElement.className + ' ' + 'svg'
  		x.innerHTML = xhr.responseText;
  		xhr.onload = function () {
  			s.splice(0).map(function (array) {
  				embed(array[0], x.querySelector('#' + array[1].replace(/(\W)/g, '\\$1')));
  			});
  		};

  		xhr.onload();
  	}

  	function onframe() {
  		var use;

  		while ((use = uses[0])) {
  			var
  			svg = use.parentNode,
  			url = use.getAttribute('xlink:href').split('#'),
  			url_root = _isBlank(url[0])?filename:url[0],
  			url_hash = url[1];
  			svg.removeChild(use);

  			if (url_root.length) {
  				var xhr = CACHE[url_root] = CACHE[url_root] || new XMLHttpRequest();

  				if (!xhr.s) {
  					xhr.s = [];
                    xhr.xstore = false;

  					xhr.open('GET', url_root);

  					xhr.onload = onload;

  					xhr.send();
  				}

  				xhr.s.push([svg, url_hash]);

  				if (xhr.readyState === 4) {
  					xhr.onload();
  				}

  			} else {
  				embed(svg, document.getElementById(url_hash));
  			}
  		}
  	    fastRAF(onframe);
  	}
  		onframe();
  }
  var exp = {
    svgload:svgload
    ,xcache:CACHE
  }
return exp;
}));
