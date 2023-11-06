const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
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


const getWorkoutBtn = document.getElementById("getWorkoutBtn");
const finishWorkBtn = document.getElementById("finishWorkoutBtn");
const workoutSection = document.getElementById("workoutSection");
const workoutDetails = document.getElementById("workoutDetails");

getWorkoutBtn.addEventListener("click", () => {
    fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps", options)
    .then(response => response.json())
    .then(data => {
        //display workout details
        console.log(data)

        // data.for in((i) =>{
        //     console.log(data[i].difficulty)
        // })
        const workoutDetails = document.getElementById("workoutDetails");
        for(const exercise of data) {
            console.log(exercise.name);
            workoutDetails.textContent = exercise.name;
        }
        // for(const i in data){
        //     console.log(data[i].name)
        //     
        //     // workoutDetails.textContent = data[1].name;
        //     // workoutDetails.textContent = data[2].name;
        //     // workoutDetails.textContent = data[3].name;
        // }
        workoutSection.appendChild(workoutDetails);
        console.log(workoutDetails)

        workoutSection.style.display="auto";
        finishWorkBtn.style.display="auto";
        getWorkoutBtn.style.display="auto";
    })
    .catch(error => {
        console.error(error);
    })
})

finishWorkBtn.addEventListener("click",() => {
    // this will clear the workout
    workoutDetails.textContent= "";
    workoutSection.style.display="auto";
    finishWorkBtn.style.display = "auto";
    getWorkoutBtn.style.display = "auto"
})

