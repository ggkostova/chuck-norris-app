export default async function fetchFunction(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            // console.log(response);
            const data = await response.json();
            console.log(data);
            return data;
        }
    } catch (error) {
        console.error('Error: ', error);
    }
}