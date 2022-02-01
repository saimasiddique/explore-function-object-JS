

function multiplicationTable(number) {
    console.log('Multiplication table of ', number);
    for (var i = 1; i <= 10; i++) {
        var multiplication = number * i;

        console.log(number, '*', i, '=', multiplication);

    }
}


multiplicationTable(13);
