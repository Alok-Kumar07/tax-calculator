document.getElementById("incomeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Reset error indicators
    document.querySelectorAll('.error-icon').forEach(function(icon) {
      icon.style.display = 'none';
    });
  
    var grossIncome = parseFloat(document.getElementById("grossIncome").value);
    var extraIncome = parseFloat(document.getElementById("extraIncome").value);
    var ageGroup = document.getElementById("ageGroup").value;
    var deductions = parseFloat(document.getElementById("deductions").value);
  
    // Validate inputs
    var isValid = true;
    if (isNaN(grossIncome)) {
      document.getElementById("grossIncomeError").style.display = 'inline-block';
      isValid = false;
    }
    if (isNaN(extraIncome)) {
      document.getElementById("extraIncomeError").style.display = 'inline-block';
      isValid = false;
    }
    if (ageGroup === '') {
      document.getElementById("ageGroupError").style.display = 'inline-block';
      isValid = false;
    }
    if (isNaN(deductions)) {
      document.getElementById("deductionsError").style.display = 'inline-block';
      isValid = false;
    }
  
    if (isValid) {
      var overallIncome = grossIncome + extraIncome - deductions;
      var tax = 0;
      if (overallIncome > 800000) {
        if (ageGroup === '<40') {
          tax = (overallIncome - 800000) * 0.3;
        } else if (ageGroup === '>=40&<60') {
          tax = (overallIncome - 800000) * 0.4;
        } else if (ageGroup === '>=60') {
          tax = (overallIncome - 800000) * 0.1;
        }
      }
      var output = "<h1>Your overall income after tax deductions: <strong>" + overallIncome.toFixed(2) + "</strong></h1><br>";
      output += "Tax to pay: " + tax.toFixed(2);
      document.getElementById("modal-content").innerHTML = output;
      document.getElementById("modal").style.display = "block";
    }
  });
  
  document.getElementById("close-modal-btn").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
