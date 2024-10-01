function confirmView()
{
    document.getElementById('app').innerHTML = /*HTML*/`

        ${navigationMenu()}
        <h1> Confirm deletion </h1>
        ${getObjects('Name', 'Email')}
        <input type="checkbox" oninput="modal.inputs.confirm.confirmation = this.checked"> Are you sure you'd like to go this path?
        <button onclick="confirm_deletion()">Confirm deletion</button>
        `;
}
function  modifyObjects()
{
    const id = modal.inputs.modify.id;
    const person = findObject(id, modal.people);
    return /*HTML*/`
        Name:
        <input type="text" value =""${person.name}>
        Email
        <input type="text" value =""${person.email}>`;
}