function fact() {
    var a = document.getElementById('inp').value;

    function factorial(a) {


        if (a == 0 || a == 1) {


            return 1;
        }
        return a * factorial(a - 1);


    }
    document.getElementById('out').innerHTML = factorial(a);
}