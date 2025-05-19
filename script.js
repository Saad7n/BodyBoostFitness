document.addEventListener("DOMContentLoaded", () => {
  const macroForm = document.getElementById("macroForm");
  if (macroForm) {
    macroForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const age = parseInt(document.getElementById("age").value);
      const gender = document.querySelector("input[name='gender']:checked").value;
      const feet = parseInt(document.getElementById("height-feet").value);
      const inches = parseInt(document.getElementById("height-inches").value);
      const weight = parseInt(document.getElementById("weight").value);
      const activity = parseFloat(document.getElementById("activity").value);
      const goal = document.getElementById("goal").value;

      const heightInInches = (feet * 12) + inches;

      let bmr;
      if (gender === "male") {
        bmr = 66 + (6.23 * weight) + (12.7 * heightInInches) - (6.8 * age);
      } else {
        bmr = 655 + (4.35 * weight) + (4.7 * heightInInches) - (4.7 * age);
      }

      let calories = bmr * activity;

      if (goal === "gain") calories += 500;
      else if (goal === "lose") calories -= 500;

      const protein = Math.round(weight * 1.1);
      const fat = Math.round((0.25 * calories) / 9);
      const carbs = Math.round((calories - (protein * 4 + fat * 9)) / 4);

      sessionStorage.setItem("protein", `${protein} grams/day`);
      sessionStorage.setItem("carbs", `${carbs} grams/day`);
      sessionStorage.setItem("fat", `${fat} grams/day`);
      sessionStorage.setItem("sugar", "<81 grams/day");
      sessionStorage.setItem("satFat", "<35 grams/day");
      sessionStorage.setItem("calories", `${Math.round(calories)} Calories/day`);

      window.location.href = "macroresult.html";
    });
  }

  const protein = sessionStorage.getItem("protein");
  const carbs = sessionStorage.getItem("carbs");
  const fat = sessionStorage.getItem("fat");
  const sugar = sessionStorage.getItem("sugar");
  const satFat = sessionStorage.getItem("satFat");
  const calories = sessionStorage.getItem("calories");

  if (document.getElementById("macroResults")) {
    document.getElementById("protein").textContent = protein;
    document.getElementById("carbs").textContent = carbs;
    document.getElementById("fat").textContent = fat;
    document.getElementById("sugar").textContent = sugar;
    document.getElementById("satFat").textContent = satFat;
    document.getElementById("calories").textContent = calories;
  }
});

    document.querySelectorAll('.membership-card').forEach(card => {
      card.addEventListener('click', () => {
		  
        document.querySelectorAll('.membership-card').forEach(c => c.classList.remove('active'));

        card.classList.add('active');

        const planName = card.getAttribute('data-plan');
        const planPrice = card.getAttribute('data-price');

        localStorage.setItem('selectedPlan', planName);
        localStorage.setItem('selectedPrice', planPrice);
      });
    });

    document.getElementById('membershipForm').addEventListener('submit', function(event) {
      event.preventDefault(); 

      const selectedCard = document.querySelector('.membership-card.active');
      const planName = selectedCard.getAttribute('data-plan');
      const planPrice = selectedCard.getAttribute('data-price');

      localStorage.setItem('selectedPlan', planName);
      localStorage.setItem('selectedPrice', planPrice);

      window.location.href = 'payment.html';
    });
	