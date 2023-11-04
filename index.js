const url = 'https://gym-workout1.p.rapidapi.com/exercise';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c795626373msh097bdf6cec9093fp1c326fjsnca7b69612bc2',
		'X-RapidAPI-Host': 'gym-workout1.p.rapidapi.com'
	}
};

async function GET () {
 
try {
	const response = await fetch("https://gym-workout1.p.rapidapi.com/exercise", options);
	const result = await response.text();
	console.log(result);
    console.log(response.content);

} catch (error) {
	console.error(error);
}
}

document.getElementById("myBtn").addEventListener("click", GET);

GET();

const getWorkoutBtn = document.getElementById("getWorkoutBtn");
const finishWorkBtn = document.getElementById("finishWorkoutBtn");
const workoutSection = document.getElementById("workoutSection");
const workoutDetails = document.getElementById("workoutDetails");

getWorkoutBtn.addEventListener("click", () => {
    fetch("https://gym-workout1.p.rapidapi.com/exercise", options)
    .then(response => response.json())
    .then(data => {
        //display workout details
        workoutDetails.textContent = data.details;
        workoutSection.style.display="block";
        finishWorkBtn.style.display="block";
        getWorkoutBtn.style.display="none";
    })
    .catch(error => {
        console.error(error);
    })
})

finishWorkBtn.addEventListener("click",() => {
    // this will clear the workout
    workoutDetails.textContent= "";
    workoutSection.style.display="none";
    finishWorkBtn.style.display = "none";
    getWorkoutBtn.style.display = "block"
})