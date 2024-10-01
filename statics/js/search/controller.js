
function confirmDeletion(id)
{
    modal.app.currentpage = 'confirm';
    modal.inputs.confirm.id = id;
    updateview();
    
}

function prepareobject(id)
{
    console.log(id)
    modal.app.currentpage = 'modify';

    const object = findObject(id, modal.people);

    modal.inputs.modify.name = object.name;
    modal.inputs.modify.email = object.email;
    modal.inputs.modify.id = id;

    console.log(modal.inputs.modify.id )
    updateview();
}


