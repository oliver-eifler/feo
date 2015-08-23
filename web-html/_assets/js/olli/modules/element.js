/*test for better olli dom */
var _MAGIC_ = "olli"
function $NullElement() {}

    function $Element(node) {
        if (this instanceof $Element) {
            if (node) {
                // use a generated property to store a reference
                // to the wrapper for circular object binding
                node["__"+_MAGIC_+"__"] = this;
                this[0] = node;
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
            return "<" + this[0].tagName.toLowerCase() + ">";
        },
        version: "0.0.1"
    };

    $NullElement.prototype = new $Element();
    $NullElement.prototype.toString = function()  {return "<NULL>";};

    $Document.prototype = new $Element();
    $Document.prototype.toString = function()  {return "#document";};

    $Element.fn = $Element.prototype;
    $Document.fn = $Document.prototype;

    $Element.fn.css = function(style,prop) {this[0] && olli.setCSS(this[0],style,prop);};
    $Element.fn.test = function() {
        if (this instanceof $Element) {console.log("called on Element");}
        if (this instanceof $Document) {console.log("called on Document");}
        if (this instanceof $NullElement) {console.log("called on Null");}
    }
