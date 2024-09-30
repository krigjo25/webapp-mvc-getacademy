function searchView()
{
    document.getElementById('app').innerHTML = /*HTML*/`
    ${navigationMenu()}
    <h1> Search </h1>
    <input type="text" oninput="modal.inputs.search.text=this.value" value=${modal.inputs.search.text || ''}>
    <button onclick="updateview()">Search</button>
    
    <div>
    Søkeresultater : 
    <ul>
        ${searchResult()}
    </ul>
    </div>
    `;
    
}

function searchResult()
{
    //  Initialize variables
    let html = ``;
    let people = modal.people
    const search = modal.inputs.search.text;

    //  Ensure input has a value
    if (modal.inputs.search.text != "")
    {
        //  Filter people by given input
        people = filter(search, people)
    }

    for (let i = 0; i < people.length; i++)
    {
        //  Initialize a person variable
        const person = people[i]

        //  Create html
        html += /*HTML*/` 
        <li>${people[i].name} ${people[i].email}</li>
        
        `;

    }

    return html
}

function filter(search, arrays)
{
    //  Initialize an array
    results = []

    search = search.toLowerCase()

    for (let array of arrays)
    {
        //  Initialize user name / Email
        const name = array.name.toLowerCase();
        const email = array.email.toLowerCase();

        //  Ensure that the index has a value
        if (name.indexOf(search) != -1 || email.indexOf(search) != -1)
            
            //  Append to array
           results.push(array) 
    }
    return results;
}