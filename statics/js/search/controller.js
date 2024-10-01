
function confirmDeletion(id)
{
    modal.app.currentpage = 'confirm';
    modal.inputs.confirm.id = id;
    updateview();
    
}

function modifyArray(id)
{
    modal.app.currentpage = 'modify';
    modal.inputs.modify.id = id;
    updateview();
}


