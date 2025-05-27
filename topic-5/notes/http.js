// fetch(URL, options)

const options = {
    method: "GET"
}

fetch("https://jsonplaceholder.typicode.com/users", options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then(data => {
        // Data handling
        console.log(data);
    })
    .catch(error => {
        // Error handling
        console.log(error);
    })