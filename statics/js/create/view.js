function createView()
{
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${navigationMenu()}
        
    <h3>Insert a user</h3>
    ${addObject()}
    <button onclick="pushObject()">Save </button>`;

    
}