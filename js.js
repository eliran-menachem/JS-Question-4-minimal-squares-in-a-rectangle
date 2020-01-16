window.onload = function () {
    console.log(squareInRect(x, y));
}

let x = 3;
let y = 16;

function squareInRect(x, y) {

    let minStart, maxStart, n, counter, newNum, remainsNum, newMin, endNum;
    counter = 0;
    n = 0;
    minStart = Math.min(x, y);
    maxStart = Math.max(x, y);
    console.log('minStart: ' + minStart + ' maxStart: ' + maxStart);

    n = Math.floor(maxStart / minStart);
    counter += n;
    newNum = minStart * n;
    console.log('newNum: ' + newNum);
    remainsNum = maxStart - newNum;
    console.log('remainsNum: ' + remainsNum);

    if (remainsNum === 1) {
        counter += minStart;
        return 'counter: ' + counter;
    };

    if (remainsNum === 0) {
        ; return 'counter: ' + counter;
    };

    newMin = Math.min(remainsNum, minStart);
    n = Math.floor(minStart / newMin);
    counter += n;
    newNum = newMin * n;
    endNum = minStart - newMin;
    console.log('endNum: ' + endNum);
    counter += newNum

    return 'counter: ' + counter;
}// End squareInRect func




