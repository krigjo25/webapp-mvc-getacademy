function confirmDeletion(id)
{
    modal.app.page = 'delete';
    modal.inputs.confirm.id = id;
    updateview();
    
}

