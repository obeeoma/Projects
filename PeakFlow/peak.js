"use strict";
// Declare variables for table, button and day
const table = document.querySelector("table");
const btn = document.getElementById("btn");
btn.addEventListener("click", showVariability, false);
const clearbtn = document.getElementById("clear");
let dayCount = 0;
// Function to check variability
function showVariability() {
  dayCount += 1;
  const values = [];
  const amValue = parseFloat(document.querySelector("#am-value").value);
  const midValue = parseFloat(document.querySelector("#mid-value").value);
  const pmValue = parseFloat(document.querySelector("#pm-value").value);

  values.push(amValue);
  values.push(midValue);
  values.push(pmValue);
  // Calculate mean of values
  const largest = Math.max(...values);
  const smallest = Math.min(...values);
  const mean = (largest + smallest) / 2;
  console.log("Largest value: " + largest);
  console.log("Smallest value: " + smallest);
  console.log("Mean = " + mean);

  // Calculate Variability
  const variability = (largest - smallest) / mean;
  console.log("Variability:" + variability);
  // Enter data into table
  createTableEntry();
  function createTableEntry() {
    // Create table row
    const row = document.createElement("tr");
    // Create table cells
    const day = document.createElement("td");
    const amEntry = document.createElement("td");
    const midEntry = document.createElement("td");
    const pmEntry = document.createElement("td");
    const varEntry = document.createElement("td");
    // Append table cells to table row
    row.appendChild(day);
    row.appendChild(amEntry);
    row.appendChild(midEntry);
    row.appendChild(pmEntry);
    row.appendChild(varEntry);

    // Assign values to table cells
    day.textContent = dayCount;
    amEntry.textContent = amValue;
    midEntry.textContent = midValue;
    pmEntry.textContent = pmValue;
    varEntry.textContent = variability;
    // Append table row to table
    table.appendChild(row);
    if (dayCount > 14) {
      table.removeChild(row);
      alert("You have exceeded 14 days.");
    }
  }
}
