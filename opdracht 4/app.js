// GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Calorie Tracker Variables
let totalCalories = 0;
let calorieGoal = 2000; // Example calorie goal
let mealId = 0; // For tracking meal entries

// Function to update the calorie progress bar
function updateCalorieProgress() {
    const progressBar = document.getElementById("calorie-progress-bar");
    let percentage = (totalCalories / calorieGoal) * 100;
    gsap.to(progressBar, {
        width: percentage + '%',
        duration: 1
    });
}

// Add meal event listener
document.getElementById("add-meal-btn").addEventListener("click", function() {
    const calorieInput = document.getElementById("calorie-input");
    const calorieValue = parseInt(calorieInput.value);

    if (!isNaN(calorieValue) && calorieValue > 0) {
        totalCalories += calorieValue;
        addMealToList(calorieValue);
        updateCalorieProgress();
        calorieInput.value = ""; // Clear input
    }
});

// Add meal to the list
function addMealToList(calories) {
    const mealList = document.getElementById("meal-list");
    const mealItem = document.createElement("li");
    mealItem.id = `meal-${mealId++}`;
    mealItem.innerHTML = `
        Maaltijd: ${calories} kcal
        <button class="remove-meal-btn" onclick="removeMeal('${mealItem.id}', ${calories})">Verwijder</button>
    `;
    mealList.appendChild(mealItem);
}

// Remove meal function
function removeMeal(mealId, calories) {
    totalCalories -= calories;
    document.getElementById(mealId).remove();
    updateCalorieProgress();
}

// Stappenteller Animation
let steps = { count: 0 };
gsap.to(steps, {
    count: 10000, // Assume 10,000 steps goal
    duration: 3,
    ease: "none",
    onUpdate: function() {
        document.querySelector(".steps-display").innerText = `${Math.floor(steps.count)} stappen`;
    },
    scrollTrigger: {
        trigger: "#step-counter",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play none none none"
    }
});

// Steps Visual Circle Animation
gsap.to(".steps-visual", {
    scale: 1.5,
    scrollTrigger: {
        trigger: "#step-counter",
        start: "top center",
        end: "bottom center",
        scrub: 1,
        toggleActions: "play none none none"
    }
});

// Gewicht Tracker Animation (Chart.js as an example)
let ctx = document.getElementById('weightChart').getContext('2d');
let weightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Gewicht (kg)',
            data: [70, 68, 65, 66, 64],
            borderColor: '#4caf50',
            fill: false,
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeOutBounce'
        }
    }
});

ScrollTrigger.create({
    trigger: "#weight-tracker",
    start: "top center",
    onEnter: () => weightChart.update()
});

// Gezondheidstips Animation
const tips = [
    "Drink genoeg water!",
    "Eet meer groente!",
    "Beweeg dagelijks!",
    "Slaap minimaal 7 uur per nacht!"
];
document.getElementById('randomTipBtn').addEventListener('click', () => {
    let randomTip = tips[Math.floor(Math.random() * tips.length)];
    gsap.to("#tip", {
        opacity: 0,
        duration: 0.5,
        onComplete: function() {
            document.getElementById("tip").innerText = randomTip;
            gsap.to("#tip", { opacity: 1, duration: 0.5 });
        }
    });
});
