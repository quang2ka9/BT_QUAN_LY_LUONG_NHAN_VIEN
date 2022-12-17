"use strict";
exports.__esModule = true;
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(month, money) {
        this.next = null;
        this.money = money;
        this.month = month;
    }
    Node.prototype.getData = function () {
        return "Month: ".concat(this.month, " - Total Salary in this month: ").concat(this.money);
    };
    return Node;
}());
exports.Node = Node;
