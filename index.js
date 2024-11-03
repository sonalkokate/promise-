function fetchPosts() {
    // GET
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
            var htmlString = `
            <tr> 
                <th> User Id </th>
                <th> Id </th>
                <th> Title </th>
                <th> Body </th>
            </tr>
        `;

            res.forEach(element => {
                htmlString += `
                <tr>
                    <td> ${element.userId} </td>
                    <td> ${element.id} </td>
                    <td> ${element.title} </td>
                    <td> ${element.body} </td>
                </tr>
            `
            });

            document.getElementById("post-table").innerHTML = htmlString;
        })
}

async function createNewPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: "ABCD",
                body: "ABCD Body",
                userId: 101
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

createNewPost();

async function hapiBookAPI() {
    const url = 'https://hapi-books.p.rapidapi.com/month/2024/3';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'c3bfc57163mshe3e68b1a54ea4adp147dabjsn29dc6b3ea246',
            'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const data = JSON.parse(result);
        var htmlString = ``;
        data.forEach(book => {
            htmlString += `
             <div class="col-md-3">
            <div class="card">
                <div class="card-header">
                    ${book.name}
                </div>
                <img src="${book.cover}"
                    alt="" class="card-img-top"
                    width="400" height="400">
                <div class="card-body">
                    <h3> Rating: ${book.rating} </h3>
                    <a href="${book.url}"> Download here </a>
                </div>
            </div>
        </div>
            
            `;
        });

        document.getElementById("book-row").innerHTML = htmlString;

    } catch (error) {
        console.error(error);
    }
}

