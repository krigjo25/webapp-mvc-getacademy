function modify()
{
    console.log(modal.inputs.modify.name, modal.inputs.modify.email)
    
    const object = findObject(modal.inputs.modify.id, modal.people)
    object.name = modal.inputs.modify.name;
    object.email = modal.inputs.modify.email;
    modal.app.currentpage = 'search';
    
    console.log(object.name, object.email, modal.app.currentpage)
    updateview();
}