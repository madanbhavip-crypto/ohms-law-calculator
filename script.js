function calculate() {
  // Step 1: Get whatever the person typed (or empty if they left it blank)
  let V = document.getElementById("voltage").value;
  let I = document.getElementById("current").value;
  let R = document.getElementById("resistance").value;

  // Step 2: Convert text into actual numbers (or "nothing" if empty)
  V = V === "" ? null : parseFloat(V);
  I = I === "" ? null : parseFloat(I);
  R = R === "" ? null : parseFloat(R);

  let result = document.getElementById("result");

  // Step 3: Figure out which one is missing, and calculate it

  if (V === null && I !== null && R !== null) {
    V = I * R;
    result.innerText = `Voltage = ${V.toFixed(2)} V`;
  }
  else if (I === null && V !== null && R !== null) {
    I = V / R;
    result.innerText = `Current = ${I.toFixed(2)} A`;
  }
  else if (R === null && V !== null && I !== null) {
    R = V / I;
    result.innerText = `Resistance = ${R.toFixed(2)} Ω`;
  }
  else {
    result.innerText = "Please leave exactly ONE box empty.";
  }
}