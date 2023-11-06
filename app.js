import { fetchDataFromAPI } from './config';
async function main () {
    try {
        const data = await fetchDataFromAPI();
        console.log('Data from API:', data)
    } catch (error) {
        console.error; {
            console.error('Error in the main application:', error)
        }
    }
}

main();