const modal = {

    //  Application state
    app: {
        currentpage:"search", // Create delete, update
    },

    //  Page inputs
    inputs: {
        search: {
            text: "",
        },
        create: {
            name:"",
            email:"",
        },
        confirm: {
            id: null,
            confirmation: false,
            

        }
    },
    // Data
    people: [{id:1, name: "Jhon Doe", email: "JhonDoe@demo.com"}, {id:2,name: "Jhon Doe", email: "JhonDoe@demo.com"}],

}