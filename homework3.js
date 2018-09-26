function valueSummary(value1,value2,value3) {
    return (value1 + value2 + value3);
}

function returnValue() {
    return 111;
}

function z(d, f) {
    d + f;
}

function strings(string1, string2, string3) {
    if ((string1.length > string2.length) && (string1.length > string3.length)) {
        return string1;
    } else if ((string2.length > string1.length) && (string2.length > string3.length)) {
        return string2;
    } else if ((string3.length > string2.length) && (string3.length > string1.length)) {
        return string3;
    }
}

function numbers(a, b) {
    if (a == b) {
        return 0;
    } else if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    }
}

function multiply(a, b) {
    const c = a * b;
    return c;
}

function divide(a, b) {
    c = a / b;
    return c;
}
let x;
let y;

function triangleArea(a, b) {
    x = multiply(a, b);
    y = divide(x, 2);
    return y;
}

function numlength(a) {
    const b = "" + a + "";
    return b.length;
}

function sn(a, b, c) {
    const e = "" + c + "";
    if (a.length + b.length > e.length) {
        return 1;
    } else {
        return -1
    }
}

function runStuff(a, b, c) {
    if (a == "rectangle") {
        const e = multiply(b, c);
        return e;
    } else if (a == "triangle") {
        const e = triangleArea(b, c);
        return e;
    } else {
        return -1;
    }
}