function TripleSum(n, x, arr) {

    arr.sort((a, b) => {
        return a - b;
    })

    for (let i = 0; i < n; i++) {
        let l = i + 1;
        let r = n - 1;

        while (l < r) {
            const sum = arr[i] + arr[l] + arr[r];

            if (sum === x) {
                return 1;
            }
            else if (sum < x) {
                l++;
            } else {
                r--
            }
        }
    }
    return 0;

}

console.log(TripleSum(6, 13, [1, 4, 45, 6, 10, 8]))
console.log(TripleSum(5, 10, [1, 2, 4, 3, 6]))
console.log(TripleSum(5, 1, [0, 0, 0, 0, 0]))