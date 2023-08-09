function isHappy(n) {
    const see = new Set();
    while (n !== 1 && !see.has(n)) {
        see.add(n)
        n = String(n).split("").reduce((sum, d) => sum + Math.pow(Number(d), 2), 0);
    }
    return n === 1;
}

function nextHappy(n) {
    while (true) {
        n++;
        if (isHappy(n)) {
            return n
        }
    }

}

console.log(nextHappy(8));
console.log(nextHappy(10));
console.log(nextHappy(21));

