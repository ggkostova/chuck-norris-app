export default async function fetchJoke(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            console.log(response);
            const data = await response.json();
            return data.value;
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}