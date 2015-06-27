var bio = {
    "name": "Pedro Flores",
    "role": "Web Developer",
    "contacts": {
        "mobile": "408-509-4003",
        "email": "armandorf.05@gmail.com",
        "location": "San Jose, CA"
    },
    "welcomeMessage": "Hi, I am a software engineer living in the San Francisco Bay Area. I love to create great-looking websites, " +
    "great pride in making sure they are user friendly!",
    "skills": [
        "JavaScript",
        "HTML5",
        "CSS",
        "Python"
    ],
    "biopic": "images/biopic.jpg",
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        $("#header").prepend(formattedName + formattedRole);

        for (var contact in this.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
            formattedContact = formattedContact.replace("%data%", this.contacts[contact]);
            $("#topContacts").append(formattedContact);
        }


    }
};
bio.display();




var education = {
    "schools": [
        {
            "name": "San Jose State University",
            "location": "San Jose, CA",
            "degree": "BS",
            "majors": ["Computer Science"],
            // dates must be an integer
            "dates": 1435363323698,
            "url": "http://www.sjsu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "date": 1435363323698,
            "url": "http://www.udacity.com"
        }
    ],
    "display": function () {
        console.log("display info somehow here");
    }
};

var work = {
    "jobs": [
        {
            "employer": "The Home Depot",
            "title": "Sales Representative",
            "location": "San Jose, CA",
            "dates": "06/2012-11/2014",
            "description": "Worked in the Plumbing Department, troubleshooting customers plumbing problems as well as other house maintenance issues."
        }
    ],
    "display": function () {
        console.log("display info somehow here");
    }
};

var projects = {
    "projects": [
        {
            "title": "Portfolio Website",
            "dates": "05/2015-06/2015",
            "description": "A website to showcase the projects I have worked on.",
            // TO-DO: change to correct url
            "images": "images/portoflio-screenshot.jpg"
        }
    ],
    "display": function () {
        console.log("display info somehow here");
    }
};

