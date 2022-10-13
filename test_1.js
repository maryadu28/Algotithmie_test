
const array = [1, 2, 3, 4, 5];
/*---------------------------------------------------------*
                function square ()
------------------------------------------------------------*/

function square() {
    const numbers = array.map(x => x * x);
    return numbers;
}
console.log(square());
/*-----------------------------------------------------*
                function cube()
-------------------------------------------------------*/

function cube() {
    // const numbers = [1, 2, 3, 4, 5];
    const numbers = array.map(x => x * x * x);
    return numbers;
}
console.log(cube());

/*-----------------------------------------------------*
             function even()
--------------------------------------------------------*/
function even() {
    const numbers = array.map(x => {
        if (x % 2 == 0) {
            return x;
        }
    }
    );
    return numbers;
}
console.log(even());
/*-----------------------------------------------------------/
            function odd()
------------------------------------------------------------*/
function odd() {
    const numbers = array.map(x => {
        if (x % 2 != 0) {
            return x;
        }
    }
    );
    return numbers;
}
console.log(odd());
/*-------------------------------------------------------------*
            function sum()
-------------------------------------------------------------*/
function some() {
    var sum = 0;
    array.forEach(i => {
        sum += i;
    });
    return sum;
}

console.log("The sum is" + " " + some());
/*-------------------------------------------------------------
            function average() 
--------------------------------------------------------------*/
function average() {
    var moyenne = 0;
    moyenne = some() / array.length;
    return moyenne;
}
console.log("the average is" + " " + average());
