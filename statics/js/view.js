function navigationMenu()
{
    return /*HTML*/`
    <button onclick="modal.app.currentpage='search'">Search</button>
    <button onclick="modal.app.currentpage='Pushview'"> Push a new person</button>
    <button onclick="modal.app.currentpage='confirmation'"> Remove a person </button>
    `;
    
}

function findObject(id, arrays) {
    /* Finds an object in a object*/

    for (let array of arrays)
    {
        if (id == array.id) return array;
        console.log("array id", array.id, "id", id)
    }
    return null;
}

function findIndex(id)
{
    for (let i = 0; modal.people.length; i++)
    {
        if (modal.people[i].id == id) return i;
    }
}