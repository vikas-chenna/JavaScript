let btnresult = document.getElementById("btnresult");
let btnReset = document.getElementById("btnReset");

btnresult.addEventListener("click", () => {
  let userName = document.getElementById("username").value;
  let oldMeterValue = Number(document.getElementById("oldMeterValue").value);
  let newMeterValue = Number(document.getElementById("newMeterValue").value);
  let printResult = document.getElementById("printResult");
  const perUnit = Number(document.getElementById("perUnit").value);

  if (oldMeterValue == "" || newMeterValue == "" || userName == "") {
    alert("please enter All Values");
  } else if (oldMeterValue <= newMeterValue) {
    let subtractValue = newMeterValue - oldMeterValue; //because newMeterValue has greater than oldMeterValue
    let finalValue = subtractValue * perUnit;
    printResult.innerHTML = "Hii " + userName + " , " + finalValue;
  } else {
    alert(
      "Enter correct Values,  old meter values always less than new meter values",
    );
  }
});

btnReset.addEventListener("click", () => {
  document.getElementById("username").value = "";
  document.getElementById("oldMeterValue").value = "";
  document.getElementById("newMeterValue").value = "";
  document.getElementById("printResult").innerHTML = "";
});
