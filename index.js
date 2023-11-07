// this got it to show 2 exercises, i want at least 3-4
document.addEventListener("DOMContentLoaded", function() {

})
// the right API - switching the muscle type will get you different exercises
const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=glutes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c795626373msh097bdf6cec9093fp1c326fjsnca7b69612bc2',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};
async function getValue() {

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}

}
getValue()


// this was my first api, it had a total list itemof 1300, i wanted to get it to
// select 10 exercises but it was in a completely different language and wouldnt show on the browser 
// const url = 'https://gym-workout1.p.rapidapi.com/exercise';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c795626373msh097bdf6cec9093fp1c326fjsnca7b69612bc2',
// 		'X-RapidAPI-Host': 'gym-workout1.p.rapidapi.com'
// 	}
// };

// async function getValue() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }

// }
// getValue()

// here i got help from a classmate and made experiments on how to get it to work but still having trouble 

// const url = 'https://gym-workout1.p.rapidapi.com/exercise';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'API_Key': 'c795626373msh097bdf6cec9093fp1c326fjsnca7b69612bc2',
// 		'X-RapidAPI-Host': 'gym-workout1.p.rapidapi.com'
// 	}
// };
// const MY_API_KEY = `c795626373msh097bdf6cec9093fp1c326fjsnca7b69612bc2`

// async function getValue () {
 // this was not working either 
// try {
// 	const response = await fetch("https://gym-workout1.p.rapidapi.com/exercise?api_key=${MY_API_KEY}", options);
// 	const result = await response.text();
// 	console.log(result);
//     console.log(response.content);

// } catch (error) {
// 	console.error(error);
// }
// }

//  document.getElementById("myBtn").addEventListener("click", getValue);

//---------------------------------------

// below is my button actions they work perfectly fine

const getWorkoutBtn = document.getElementById("getWorkoutBtn");
const finishWorkBtn = document.getElementById("finishWorkoutBtn");
const workoutSection = document.getElementById("workoutSection");
const workoutDetails = document.getElementById("workoutDetails");

getWorkoutBtn.addEventListener("click", () => {
    fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=glutes", options)
    .then(response => response.json())
    .then(data => {
        //display workout details
        console.log(data)

   // for loop to get exercises 
        const workoutDetails = document.getElementById("workoutDetails");
        workoutDetails.innerHTML = ""
        for(const exercise of data) {
            console.log(exercise.name);
            workoutDetails.textContent = exercise.name;  
 
}

const numExercises = 4; // Number of random exercises you want to fetch
const randomExercises = [];

for (let i = 0; i < numExercises; i++) {
  const randomIndex = Math.floor(Math.random() * data.length); 
  const exercise = data[randomIndex]; 

  randomExercises.push(exercise); // addss the exercise to the randomExercises array

 const exerciseParagraph = document.createElement("p");
        numExercises.textContent = randomExercises;
}
//  workoutDetails.appendChild(exerciseParagraph);
        // console.log(workoutDetails)
console.log(randomExercises)


        // const exerciseParagraph = document.getElementById("p");
        // exerciseParagraph.textContent = exercise.name;
        // workoutDetails.appendChild(exerciseParagraph)
     
       

        workoutSection.style.display="block";
        finishWorkBtn.style.display="inline";
        getWorkoutBtn.style.display="inline";
    })
    .catch(error => {
        console.error(error);
    })
})

finishWorkBtn.addEventListener("click",() => {
    // this will clear the workout // works great unfortantly only one exercise shows up from the list not sure why 
    workoutDetails.textContent= "";
    workoutSection.style.display="inline";
    finishWorkBtn.style.display = "inline";
    getWorkoutBtn.style.display = "inline"
})

// gif movement shakes when clicked 

const jumpingGif = document.getElementById('jumpinggif');

jumpingGif.addEventListener('click', () => {
  jumpingGif.classList.add('shake'); // makes the "shake" class when clicked
  setTimeout(() => {
    jumpingGif.classList.remove('shake'); // stops the "shake" class after the animation
  }, 500); 
});