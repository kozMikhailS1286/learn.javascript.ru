<script>

let one = prompt("Enter first number");
let two = prompt("Enter second number");

function pow(one, two) {
    if (one >= 1) {
        let pr = one ** two;
        alert(pr);
    }
}

pow(one, two);

</script>