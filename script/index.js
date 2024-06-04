function calculateInterest() {
    let amount = parseFloat(document.getElementById('amountInput').value);
    let interestRate = parseFloat(document.getElementById('interestInput').value);

    if (!isNaN(amount) && !isNaN(interestRate)) {
        var interestAmount = (amount * interestRate) / 100;
        document.getElementById('result').value = interestAmount.toFixed(2);
    } else {
        document.getElementById('result').value = "Invalid input";
    }}