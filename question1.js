function MissingAndRepeat(n, arr) {
    let repeatn = -1;
    let missingn = -1;

    arr.sort((a, b) => {
        return a - b
    })

    for (let i = 0; i < n; i++) {
        while (arr[i] !== i + 1) {
            if (arr[i] === arr[arr[i] - 1]) {
                repeatn = arr[i];
                break;
            }
            [arr[i], arr[arr[i] - 1]] = [arr[arr[i] - 1], arr[i]];
        }

    }
    for (let i = 0; i < n; i++) {
        if (arr[i] !== i + 1) {
            missingn = i + 1;
            break;
        }
    }
    console.log(repeatn, missingn);

}

MissingAndRepeat(2, [2, 2])
MissingAndRepeat(3, [1, 3, 3])
