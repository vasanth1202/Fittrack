function calculateBMI() {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  if (!height || !weight || height <= 0 || weight <= 0) {
    result.innerText = "Please enter valid height and weight!";
    result.style.color = "red";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let message = `Your BMI is ${bmi} - `;

  if (bmi < 18.5) {
    message += "Underweight";
  } else if (bmi < 24.9) {
    message += "Normal weight";
  } else if (bmi < 29.9) {
    message += "Overweight";
  } else {
    message += "Obese";
  }

  result.innerText = message;
  result.style.color = "#0072ff";
}
