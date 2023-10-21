function isValidDay(day) {
    if (day > 31) {
      return "Must be a valid day";
    }
    if (day === 0 || !day) {
      return "This field is required";
    }
    return false;
  }
  
  function isValidMonth(month) {
    if (month > 12) {
      return "Must be a valid month";
    }
    if (month === 0 || !month) {
      return "This field is required";
    }
    return false;
  }
  
  function isValidYear(year) {
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
      return "Must be a valid year";
    }
    if (year === 0 || !year) {
      return "This field is required";
    }
    return false;
  }
  
  
  const birthYearInput = document.getElementById("birth_year");
  const birthMonthInput = document.getElementById("birth_month");
  const birthDayInput = document.getElementById("birth_day");
  
  const birthYearError = document.getElementById("birth_year_error");
  const birthMonthError = document.getElementById("birth_month_error");
  const birthDayError = document.getElementById("birth_day_error");
  
  birthDayInput.addEventListener("input", () => {
    const errorMessage = isValidDay(birthDayInput.value);
    birthDayError.textContent = errorMessage || "";
  });
  
  birthMonthInput.addEventListener("input", () => {
    const errorMessage = isValidMonth(birthMonthInput.value);
    birthMonthError.textContent = errorMessage || "";
  });
  
  birthYearInput.addEventListener("input", () => {
    const errorMessage = isValidYear(birthYearInput.value);
    birthYearError.textContent = errorMessage || "";
  });
  
  const calculateAge = (day, month, year) => {
    const birthday = `${day}/${month}/${year}`;
  
    const birthdate = new Date(year, month - 1, day); 
  
    const currentDate = new Date();
  
    let years = currentDate.getFullYear() - birthdate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthdate.getMonth();
  
    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDate.getDate() < birthdate.getDate())
    ) {
      years--;
    }
  
    const months = (currentDate.getMonth() - birthdate.getMonth() + 12) % 12;
  
    const days = Math.abs(currentDate.getDate() - birthdate.getDate());
  
    return {
      years: years,
      months: months,
      days: days,
    };
  };
  
  function validateForm() {
    const isYearValid = isValidYear(birthYearInput.value);
    const isMonthValid = isValidMonth(birthMonthInput.value);
    const isDayValid = isValidDay(birthDayInput.value);
  
    birthYearError.textContent = isYearValid || "";
    birthMonthError.textContent = isMonthValid || "";
    birthDayError.textContent = isDayValid || "";
  
    if (isYearValid || isMonthValid || isDayValid) {
      alert("Please fill in all fields correctly.");
      return false;
    }
  
    return true;
  }
  
  const ageForm = document.getElementById("ageForm");
  
  const ageYearResult = document.getElementById("age_year");
  const ageMonthResult = document.getElementById("age_month");
  const ageDayResult = document.getElementById("age_day");
  
  ageForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const isValid = validateForm();
  
    if (isValid) {
      const age = calculateAge(
        birthDayInput.value,
        birthMonthInput.value,
        birthYearInput.value
      );
  
      ageYearResult.textContent = age.years;
      ageMonthResult.textContent = age.months;
      ageDayResult.textContent = age.days;
    }
  });
  
