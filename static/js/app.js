const profileName = document.getElementById("profile");
var profileArray = [{name: "Kate", lastName: "B."}];

profileArray.forEach(function(person) {
    var fullName = person.name + " " + person.lastName;
    profileName.innerHTML = fullName;
});

var cardArray = [
    {   title1: "Headset", 
        image1: 'static/images/headset.png',
        subtitle1: "Fidelity first. See more than ever before",    
        description1: "We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.",
        comment1: "349", 
        views1: "49500"
    },

    {   title2: "Controllers", 
        image2: 'static/images/controllers.png',
        subtitle2: "Your hands, in Virtual Reality",    
        description2: "Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.",
        comment2: "349", 
        views2: "49500"
    },

    {   title3: "Base Stations", 
        image3: 'static/images/base-station.png',
        subtitle3: "Best-in-industry room-scale tracking",    
        description3: "The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.",
        comment3: "349", 
        views3: "49500"
    }
]
cardArray.forEach(function(card, index) {
    var titleElement = document.getElementById("card" + (index + 1) + "-title");
    titleElement.innerHTML = card["title" + (index + 1)];

    var subtitleElement = document.getElementById("card" + (index + 1) + "-subtitle");
    subtitleElement.innerHTML = card["subtitle" + (index + 1)];

    var textElement = document.getElementById("card" + (index + 1) + "-text");
    textElement.innerHTML = card["description" + (index + 1)];

    var imageElement = document.getElementById("card" + (index + 1) + "-image");
    imageElement.src = card["image" + (index + 1)];

    var commElement = document.getElementById("card" + (index + 1) + "-comments");
    commElement.innerHTML = card["comment" + (index + 1)];

    var viewElement = document.getElementById("card" + (index + 1) + "-views");
    viewElement.innerHTML = card["views" + (index + 1)];
});


var footerArray = [
    {
        text1: "CONTACT",
        text2: "HELP",
        text3: "TERMS OF USE",
        text4: "PRIVACY POLICY"
    },
    
    {
        logo1: 'static/images/Twitter.svg',
        logo2: 'static/images/Facebook.svg',
        logo3: 'static/images/YouTube.svg'
    }
]

var firstObjectValues = Object.values(footerArray[0]);
var secondObjectValues = Object.values(footerArray[1]);

firstObjectValues.forEach(function (value, index) {
  var footerLinks = document.getElementById("footer-link" + (index + 1));
  footerLinks.innerHTML = value;
});

secondObjectValues.forEach(function (value, index) {
  var MediaLogos = document.getElementById("socMediaLogo" + (index + 1));
  MediaLogos.src = value;
});