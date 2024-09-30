function navigationMenu()
{
    return /*HTML*/`
    <button onclick ="modal.app.page='search'">Search </button>
    <button onclick="modal.app.page='Pushview'"> Push a new person</button>
    <button onclick="modal.app.page='confirmation'"> Remove a person </button>
    `;
}

function findObject(id, arrays) {
    /* Finds an object in a object*/
    console.log(arrays)
    for (let array of arrays)
    {
        console.log(array)
        if (id == array.id) return array;
    }
    return null;
}