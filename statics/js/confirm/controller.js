function confirm_deletion()
{
    console.log(modal.inputs.confirm.confirmation)
    if (modal.inputs.confirm.confirmation == true)
    {    
        
        modal.people.splice(findIndex(modal.inputs.confirm.id), 1);

    }

    //  Set modal.app page
    modal.app.currentpage = 'search';
    updateview();

}