/*test for better olli dom */
var _MAGIC_ = "olli";
var $BASE = {};
function $BLA() {
  this.olli = "$BLA.olli";
}
function $NullElement() {}

    function $Element(node) {
        if (this instanceof $Element) {
            if (node) {
                // use a generated property to store a reference
                // to the wrapper for circular object binding
                node["__"+_MAGIC_+"__"] = this;
                this[0] = node;
                console.log(typeof node);
            }
        } else if (node) {
            // create a wrapper only once for each native element
            return node["__"+_MAGIC_+"__"] || new $Element(node);
        } else {
            return new $NullElement();
        }
    }

    function $Document(node) {
        // use documentElement <html> for a $Document wrapper
        return $Element.call(this, node.documentElement);
    }

    $Element.prototype = {
        toString: function() {
            return "<" + this[0].nodeName.toLowerCase() + ">";
        },
        version: "0.0.1"
    };

    $NullElement.prototype = new $Element();
    $NullElement.prototype.toString = function()  {return "<NULL>";};

    $Document.prototype = new $Element();
    //$Document.prototype.toString = function()  {return "#document";};


    $Element.fn = $Element.prototype;
    $Document.fn = $Document.prototype;

    $Element.fn.css = function(style,prop) {this[0] && olli.setCSS(this[0],style,prop);};
    $Element.fn.test = function() {
        if (this instanceof $Element) {console.log("called on Element");}
        if (this instanceof $Document) {console.log("called on Document");}
        if (this instanceof $NullElement) {console.log("called on Null");}
    }
Object.defineProperty($Element.prototype, "olli", {
    get: function() {console.log("get olli");}
    ,set: function(newval) {console.log("set olli");}
});

function setterGetter(prop) {
		if(div[prop] instanceof Function) {
			$Element.prototype[prop] = $Element.prototype[prop] || function() {
					var element = this[0], funcCall = element[prop].apply(element, arguments);
					if(funcCall instanceof Node)
                        return new $Element(funcCall);
                    return funcCall;
			}
		} else {
			Object.defineProperty($Element.prototype, prop, {
				get: function get() {
						var item = this[0][prop];
						if(item instanceof Node)
                            return new $Element(item);
					return item;
				},
				set: function(newVal) {
					this[0][prop] = newVal;
				}
			});
		}
	}

	var div = document.createElement('div');
	for(var prop in div) setterGetter(prop);
	div = null;

