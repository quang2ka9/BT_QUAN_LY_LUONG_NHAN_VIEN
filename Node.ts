export class Node<T> {
    month: number;
    money: number;
    next: Node<T> | null = null;

    constructor(month: number, money: number) {
        this.money = money;
        this.month = month;
    }

    getData() {
        return `Month: ${this.month} - Total Salary in this month: ${this.money}`
    }
}