
document.getElementById("calculateBtn").addEventListener("click", calculateBMI);

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    result.textContent = "দয়া করে সঠিক ওজন এবং উচ্চতা লিখুন!";
    result.style.color = "#ffcc00";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) category = "কম ওজন";
  else if (bmi < 24.9) category = "স্বাভাবিক ওজন";
  else if (bmi < 29.9) category = "অতিরিক্ত ওজন";
  else category = "স্থূলতা";


  result.textContent = `আপনার BMI: ${bmi.toFixed(2)} (${category})`;
  result.style.color = "#fff";
}

