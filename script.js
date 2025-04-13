// Required Constants
const display = document.getElementById("expression");
const buttons = document.querySelectorAll(".btn");
const toggler = document.getElementById("toggler");
const body = document.body;

// Initialize expression
let expression = "";

// Update display function
function updateDisplay() {
	if (expression === "") {
		display.textContent = "0";
	} else {
		display.textContent = expression;
	}
}

// Add click event listeners to all buttons
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const value = button.textContent;

		switch (value) {
			case "C":
				expression = "";
				break;
			case "←":
				expression = expression.slice(0, -1);
				break;
			case "=":
				try {
					expression = eval(expression).toString();
				} catch {
					expression = "Error";
					setTimeout(() => {
						expression = "";
						updateDisplay();
					}, 1000);
				}
				break;
			default:
				expression += value;
		}

		updateDisplay();
	});
});

// Dark mode toggler
toggler.addEventListener("click", () => {
	body.classList.toggle("dark-mode");
	if (body.classList.contains("dark-mode")) {
		toggler.classList.remove("ri-sun-fill");
		toggler.classList.add("ri-moon-fill");
	} else {
		toggler.classList.remove("ri-moon-fill");
		toggler.classList.add("ri-sun-fill");
	}
});
