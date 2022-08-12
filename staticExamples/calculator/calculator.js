// use strict;

window.addEventListener('DOMContentLoaded', calculator);

let currNum = '0';
let operand = '';
let operator = '';
let writeTo = false;

function setState() {
    currNum = trimZeros(currNum);
    operand = trimZeros(operand);
    document.getElementById('currNum').innerText = currNum.length ? currNum : '0';
    document.getElementById('operator').innerText = operator;
    document.getElementById('operand').innerText = operand;
}

function _helper(cb) {
    return function (e) {
        e.preventDefault();
        const val = e.currentTarget.innerText;
        cb(val);
        setState();
    }
}

function trimZeros(s) {
    return s.replace(/^0+/, '');
}

const numberCb = _helper(function(val) {
    if (!writeTo) {
        currNum += val;
    } else { 
        operand += val;
    }
});

const operatorCb = _helper(function (val) {
    writeTo = true;
    operator = val;
});

const equals = _helper(function () {
    currNum = String(eval(`${currNum} ${operator} ${operand}`));
    operator = '';
    operand = '';
});

const clear = _helper(function() {
    currNum = '0';
    operand = '';
    operator = '';
    writeTo = false;
});

function _adjustSign(s) {
    const sign = s.slice(0, 1) === '-' ? '-' : '';
    if (sign) return s.slice(1, s.length);
    else return `-${s}`;
}

const plusMinus = _helper(function() {
    if (!writeTo) {
        currNum = _adjustSign(currNum);
    } else { 
        operand = _adjustSign(operand);
    }
});

function calculator() {
    document.querySelectorAll('.number')
    .forEach(el => el.addEventListener('click', numberCb));

    document.querySelectorAll('.operator')
    .forEach(el => el.addEventListener('click', operatorCb));

    document.querySelector('#equals').addEventListener('click', equals);

    document.querySelector('#clear').addEventListener('click', clear);
    document.querySelector('#plusMinus').addEventListener('click', plusMinus);
}
