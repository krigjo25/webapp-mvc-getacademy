function navigationMenu()
{
    return /*HTML*/`
    <button onclick="modal.app.currentpage='search'; updateview()">Search</button>
    <button onclick="modal.app.currentpage='create';updateview()"> Push a new person</button>
    <button onclick="modal.app.currentpage='confirm';updateview()"> Remove a person </button>
    `;
    
}

function findObject(id, arrays) {
    /* Finds an object in a object*/

    for (let array of arrays)
    {
        if (id == array.id) return array;
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


function getObjects(label,label1)
{
    const id = modal.inputs.confirm.id;
    const object = findObject(id, modal.people);
    return /*HTML*/ `
        <dl>
            <dt>${label}</dt>
            <dd>${object.name}</dd>
            <dt>${label1}</dt>
            <dd>${object.email}</dd>    
        </dl>`;
}

function modifyObject()
{
    return /*HTML*/ `
        Name
        <input type="text" value= "${modal.inputs.modify.name}" 
        oninput="modal.inputs.modify.name = this.value">
        email
        <input type="text" value= "${modal.inputs.modify.email}" oninput="modal.inputs.email = this.value">`;
}
function addObject()
{
    return /*HTML*/ `
        Name
        <input type="text" 
        oninput="modal.inputs.create.name = this.value">
        email
        <input type="text" oninput="modal.inputs.create.email = this.value">`;
}