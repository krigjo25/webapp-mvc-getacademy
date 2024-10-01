function confirm_deletion()
{

    modal.people.splice(findIndex(modal.inputs.confirm.id), 1);
    modal.app.currentpage = 'search';
    updateview();

}