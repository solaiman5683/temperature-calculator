const number = document.getElementById("number");
        const input = document.getElementById("temp");
        const option = document.getElementById("option");
        const button = document.getElementById("button")

        function celsiusToFahrenheit(celsius) {
            return (celsius * 9 / 5) + 32;
        }

        function fahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * (5 / 9);
        }
        button.addEventListener("click", () => {
            if (option.value == "celsius") {
                number.innerText = celsiusToFahrenheit(input.value);
                // console.log(input.value);
            } else if (option.value == "fahrenheit") {
                number.innerText = fahrenheitToCelsius(input.value);
            }
        })