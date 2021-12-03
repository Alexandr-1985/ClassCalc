"use strict";

const calculator = {
    numOne: document.getElementById("a"),
    numTwo: document.getElementById("b"),
    sum: document.getElementById("sum"),
    mult: document.getElementById("mult"),
    res: document.getElementById("res"),

    num: document.getElementById("num"),
    degreeNum: document.getElementById("degreeNum"),
    degree: document.getElementById("degree"),
    sumNumDegree: document.getElementById("sumNumDegree"),
    resDegree: document.getElementById("resDegree"),

    resSum: 0,
    resDegreeVal: 0,
    resDegreeValSum: 0,

    init: function() {
        sum.addEventListener("click", this.sum.bind(this));
        mult.addEventListener("click", this.mult.bind(this));
        degree.addEventListener("click", this.degree.bind(this));
        sumNumDegree.addEventListener("click", this.sumNumDegree.bind(this));
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
    //Функция вычисляет сумму цифр результата x в степени y
    degree: function() {
        this.resDegreeVal = Math.pow(+this.num.value, this.degreeNum.value);
        this.showDegree();
    },
    sumNumDegree: function() {
        if (this.degreeNum.value) {
            this.resDegreeValSum = this.resDegreeVal
                .toString()
                .split("")
                .reduce((previousValue, currentValue) => previousValue + currentValue);
        }
        this.showDegreeSum();
    },
    showDegree: function() {
        return (this.resDegree.value = this.resDegreeVal);
    },
    showDegreeSum: function() {
        return (this.resDegree.value = this.resDegreeValSum);
    },
};

calculator.init();