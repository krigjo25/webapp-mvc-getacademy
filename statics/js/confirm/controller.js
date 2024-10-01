function confirm_deletion()
{
    if (modal.inputs.confirm.confirmation)
    {    
        
        modal.people.splice(findIndex(modal.inputs.confirm.id), 1);

    }

    //  Set modal.app page
    modal.app.currentpage = 'search';
    updateview();

}