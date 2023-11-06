export async function fetchDataFromAPI()
{
    try {response = await
    fetch("https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps", options)
    const data = await response.json();
    return data;
} catch (error) {
    console.log('Error fetching data from the API:', error)
    throw error;
}
}