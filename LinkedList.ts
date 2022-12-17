import {Node} from "./Node";

export class LinkedList<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addNodeFirst(month: number, money: number) {
        let node = new Node(month, money);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    showNodeList() {
        let listData: any[] = [];
        let currentNode = this.head;
        while (currentNode) {
            listData.push(currentNode);
            currentNode = currentNode.next;
        }
        return listData;
    }

    totalSalary() {
        let totalSalary = 0;
        let currentNode = this.head
        while (currentNode) {
            totalSalary += currentNode.money;
            currentNode = currentNode.next;
        }
        return totalSalary;
    }

    findMaxSalaryMonth() {
        let listMonthMaxSalary: any[] = [];
        let currentNode = this.head;
        let maxSalary: any = currentNode?.money
        if (this.size) {
            while (currentNode) {
                if (maxSalary < currentNode.money) {
                    maxSalary = currentNode.money;
                }
                currentNode = currentNode.next
            }
            ;
            currentNode = this.head;
            while (currentNode) {
                if (currentNode.money == maxSalary) {
                    listMonthMaxSalary.push(currentNode);
                }
                currentNode = currentNode.next
            }
            return listMonthMaxSalary

        }
        return null
    }

}