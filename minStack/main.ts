class MinStack {
    holding: Array<number>;
    constructor() {
    this.holding = [];
    }

    push(x: number): void {
     this.holding.push(x);
    }

    pop(): void {
    this.holding.pop();
    }

    top(): number {
        return this.holding[this.holding.length - 1];
    }

    getMin(): number {
        return Math.min(...this.holding)
    }
}