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
 * POLYFILLS
 */

/* requestAnimationFrame polyfill by Erik M�ller & Paul Irish et. al.
* https://gist.github.com/1866474
*
* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
* http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
**/

/*jshint asi: false, browser: true, curly: true, eqeqeq: true, forin: false, newcap: true, noempty: true, strict: true, undef: true */
(function(window)
  {

    'use strict';

    var lastTime = 0;
    var prefixes = 'webkit moz ms o'.split(' ');
    // get unprefixed rAF and cAF, if present
    var requestAnimationFrame = window.requestAnimationFrame;
    var cancelAnimationFrame = window.cancelAnimationFrame;
    // loop through vendor prefixes and get prefixed rAF and cAF
    var prefix;
    for(var i = 0; i < prefixes.length; i++)
    {
      if (requestAnimationFrame && cancelAnimationFrame)
      {
        break;
      }
      prefix = prefixes[i];
      requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
      cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] ||
      window[prefix + 'CancelRequestAnimationFrame'];
    }
    var fastRAF = requestAnimationFrame;
    // fallback to setTimeout and clearTimeout if either request/cancel is not supported
    if (!requestAnimationFrame || !cancelAnimationFrame)
    {
      requestAnimationFrame = function(callback, element)
      {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function()
          {
            callback(currTime + timeToCall);
          }
          , timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
      cancelAnimationFrame = function(id)
      {
        window.clearTimeout(id);
      };
    }
    if (!fastRAF)
        fastRAF = requestAnimationFrame;

    // put in global namespace
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
    window.fastRAF = fastRAF;
  }
)(window);