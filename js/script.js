

const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Tolong masukan data!");
    return;
  }


  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Kekurangan berat badan";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Berat badan normal";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Kelebihan berat badan";
  }
  if (BMI >= 30) {
    status = "Obesitas";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `<span id="comment">${status}</span>`;
});