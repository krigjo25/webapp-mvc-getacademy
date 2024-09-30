function confirmView()
{
    document.getElementById('app').innerHTML = /*HTML*/`
        ${navigationMenu()}
        <h1> Confirm deletion </h1>
        ${getObjects()}
        <input type="checkbox"> Are you sure you'd like to go this path?
        <button onclick="updateview()">Confirm deletion</button>
        `;
}

function getObjects()
{
    const id = modal.inputs.confirm.id;
    const object = findObject(id, modal.people);
    return /*HTML*/ `
        <dl>
            <dt>Name</dt>
            <dd>${object.name}</dd>
            <dt> Email </dt>
            <dd>${object.email}</dd>    
        </dl>`
}
