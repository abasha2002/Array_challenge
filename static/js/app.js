const profileName = document.getElementById("profile");
var profileArray = [{name: "Kate", lastName: "B."}];

profileArray.forEach(function(person) {
    var fullName = person.name + " " + person.lastName;
    profileName.innerHTML = fullName;
});
