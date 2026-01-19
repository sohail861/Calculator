const display = document.getElementById("user-input");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const value = btn.innerText;

        // AC
        if (value === "AC") {
            expression = "";
            display.innerText = "0";
            return;
        }

        // DEL
        if (value === "DEL") {
            expression = expression.slice(0, -1);
            display.innerText = expression || "0";
            return;
        }

        // =
        if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.innerText = expression;
            } catch {
                display.innerText = "NaN";
                expression = "";
            }
            return;
        }

        // جلوگیری از دو عملیات پشت سر هم
        const lastChar = expression[expression.length - 1];
        if (
            "+-*/%".includes(value) &&
            "+-*/%".includes(lastChar)
        ) {
            return;
        }

        expression += value;
        display.innerText = expression;
    });
});
