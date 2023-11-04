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

