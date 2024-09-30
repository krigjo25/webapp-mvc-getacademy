function confirmDeletion(id)
{
    modal.app.currentpage = 'confirm';
    modal.inputs.confirm.id = id;
    updateview();
    
}

