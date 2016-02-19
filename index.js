var Nil = (function () {
    function Nil() {
        this.isNil = true;
    }
    return Nil;
}());
(global || window).nil = new Nil();
Object.prototype.isNil = false;
