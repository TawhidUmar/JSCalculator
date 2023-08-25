// Input and Display Number 

function insertNum(number) {

    var exNum = document.querySelector("#result").value;
    document.querySelector("#result").value = exNum + "" + number;
}

// Sum

function sum() {
    var result = eval(document.querySelector("#result").value);
    document.querySelector("#result").value = result;
}


// Clear Display

function clearResult() {
    document.querySelector("#result").value = '';
    window.location.reload();

}
 
// Delete number

function del() {
    var presentValue = document.querySelector("#result").value;

    if (presentValue != '') {
        document.querySelector("#result").value = presentValue.slice(0, -1);
    }
}

// Square Root 

function sqrt() {
    var presentNum = document.querySelector("#result").value;
    document.querySelector("#result").value = presentNum ** 0.5;
}

// Square Function

function sqr() {
    var presentNum = document.querySelector("#result").value;
    document.querySelector("#result").value = presentNum ** 2;
}

// Series Multiplication

function seriesMult() {
    var num = document.querySelector("#result").value;
    sum = 1;

    for (var i = 1; i <= num; i++) {
        sum = sum * i;
    }  
    document.querySelector("#result").value = sum;
    
    

    
}
