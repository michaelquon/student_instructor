function studentInstrName(){
   var users = {
    "Students": [   {"first_name":  "Michael", "last_name" : "Jordan"},
                    {"first_name" : "John", "last_name" : "Rosales"},
                    {"first_name" : "Mark", "last_name" : "Guillen"},
                    {"first_name" : "KB", "last_name" : "Tonel"}],

    "Instructors":[ {"first_name" : "Michael", "last_name" : "Choi"},
                    {"first_name" : "Martin", "last_name" : "Puryear"}]
    };
    console.log("Students");
    for(var i=0; i< users["Students"].length;i++){
        console.log(i+1, '-', users.Students[i].first_name, users.Students[i].last_name, '-', (users.Students[i].first_name.length+users.Students[i].last_name.length) );
    }
    console.log("Instructors");
    for(var x=0; x< users["Instructors"].length;x++){
        console.log(x+1, '-', users.Instructors[x].first_name, users.Instructors[x].last_name, '-', (users.Instructors[x].first_name.length+users.Instructors[x].last_name.length) );
    }         
}
studentInstrName();