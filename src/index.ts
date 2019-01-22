type tSum = (a: number, b?: number) => any;

const sum: tSum = (a, b) => {
    if (b === undefined) {
        return (num: number) => a + num;
    } else {
        return a + b;
    }
}

console.log(sum(1, 2)); // 3
console.log(sum(4)(8)); // 12