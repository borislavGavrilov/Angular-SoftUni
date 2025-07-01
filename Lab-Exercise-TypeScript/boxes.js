var Boxes = /** @class */ (function () {
    function Boxes() {
        this.boxes = [];
    }
    Boxes.prototype.add = function (element) {
        this.boxes.push(element);
    };
    Boxes.prototype.remove = function () {
        return this.boxes.pop();
    };
    Object.defineProperty(Boxes.prototype, "count", {
        get: function () {
            return this.boxes.length;
        },
        enumerable: false,
        configurable: true
    });
    return Boxes;
}());
// Example usage:
var stringBox = new Boxes();
stringBox.add("Hello");
stringBox.add("World");
console.log(stringBox.count); // Output: 2
console.log(stringBox.remove()); // Output: World   
