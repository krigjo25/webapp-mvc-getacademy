function pushObject()
{
    const person = {}
    person.id = modal.people.length +1
    person.name = modal.inputs.create.name;
    person.email = modal.inputs.create.email;
    modal.app.currentpage = 'search';
    modal.people.push(person);
    console.log(person)
    updateview();
}