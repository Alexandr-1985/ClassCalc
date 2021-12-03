"use strict";

const calculator = {
    numOne: document.getElementById("a"),
    numTwo: document.getElementById("b"),
    sum: document.getElementById("sum"),
    mult: document.getElementById("mult"),
    res: document.getElementById("res"),
    resSum: 0,
    init: function() {
        sum.addEventListener("click", this.sum.bind(this));
        mult.addEventListener("click", this.mult.bind(this));
    },
    sum: function() {
        this.resSum = +this.numOne.value + +this.numTwo.value;
        this.show();
    },
    mult: function() {
        this.resSum = +this.numOne.value * +this.numTwo.value;
        this.show();
    },
    show: function() {
        return (this.res.value = this.resSum);
    },
};
calculator.init();