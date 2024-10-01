function modifyView()
{
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${navigationMenu()}
    
    <h3>Modify a user</h3>
    ${modifyObject()}
    <button onclick="modify()">Save</button>
    `;
}