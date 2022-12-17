"use strict";
exports.__esModule = true;
var LinkedList_1 = require("./LinkedList");
var salaryManager = new LinkedList_1.LinkedList();
salaryManager.addNodeFirst(1, 30000);
salaryManager.addNodeFirst(2, 80000);
salaryManager.addNodeFirst(3, 60000);
salaryManager.addNodeFirst(4, 10000);
salaryManager.addNodeFirst(5, 90000);
console.log(salaryManager.showNodeList());
console.log(salaryManager.totalSalary());
console.log(salaryManager.findMaxSalaryMonth());
