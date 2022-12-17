"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkedList.prototype.addNodeFirst = function (month, money) {
        var node = new Node_1.Node(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    };
    LinkedList.prototype.showNodeList = function () {
        var listData = [];
        var currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode);
            currentNode = currentNode.next;
        }
        return listData;
    };
    LinkedList.prototype.totalSalary = function () {
        var totalSalary = 0;
        var currentNode = this.head;
        while (currentNode) {
            totalSalary += currentNode.money;
            currentNode = currentNode.next;
        }
        return totalSalary;
    };
    LinkedList.prototype.findMaxSalaryMonth = function () {
        var listMonthMaxSalary = [];
        var currentNode = this.head;
        var maxSalary = currentNode === null || currentNode === void 0 ? void 0 : currentNode.money;
        if (this.size) {
            while (currentNode) {
                if (maxSalary < currentNode.money) {
                    maxSalary = currentNode.money;
                }
                currentNode = currentNode.next;
            }
            ;
            currentNode = this.head;
            while (currentNode) {
                if (currentNode.money == maxSalary) {
                    listMonthMaxSalary.push(currentNode);
                }
                currentNode = currentNode.next;
            }
            return listMonthMaxSalary;
        }
        return null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
