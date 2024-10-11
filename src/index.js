const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const input = document.querySelector("input#searchByID").value; 

        fetch('http://localhost:3000/movies/${input}') 
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Movie not found"); 
                }
                return response.json();
            })
            .then((data) => {
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = data.title; 
                summary.innerText = data.summary; 
            })
            .catch((error) => {
                console.error(error);
                
                const title = document.querySelector("section#movieDetails h4");
                const summary = document.querySelector("section#movieDetails p");

                title.innerText = "Movie Not Found"; 
                summary.innerText = ""; 
            });
    });
};

document.addEventListener("DOMContentLoaded", init); 