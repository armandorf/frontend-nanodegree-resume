var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var bio = {
    "name": "Pedro Flores",
    "role": "Web Developer",
    "contacts": {
        "mobile": "408-509-4003",
        "email": "armandorf.05@gmail.com",
        "location": "San Jose, CA"
    },
    "welcomeMessage": "Hi, I'm a software engineer living in the San Francisco Bay Area. I love to create great-looking websites, " +
    "and take great pride in making sure they are user friendly!",
    "skills": [
        "JavaScript",
        "HTML5",
        "CSS",
        "Python"
    ],
    "biopic": "images/biopic.jpg",
    "display": function () {
        var header = $("#header");

        // name and title
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        // contact information list
        header.prepend(formattedName + formattedRole);
        for (var contact in this.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
            formattedContact = formattedContact.replace("%data%", this.contacts[contact]);
            $("#topContacts").append(formattedContact);
        }

        // picture
        var bioPic = HTMLbioPic.replace("%data%", this.biopic);
        header.append(bioPic);

        // welcome message
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        header.append(formattedWelcomeMessage);


        // skillsTag at a glance
        header.append(HTMLskillsStart);
        var skillsTag = $("#skills");
        for (var i = 0; i < this.skills.length; i++) {
            var skill = this.skills[i];
            var skillListItemFormatted = HTMLskills.replace("%data%", skill);
            skillsTag.append(skillListItemFormatted);
            skillsTag.append("<br>");
        }
    }
};
bio.display();


var work = {
    "jobs": [
        {
            "employer": "The Home Depot",
            "title": "Sales Representative",
            "location": "San Jose, CA",
            "dates": "06/2012-11/2014",
            "description": "Worked in the Plumbing Department, troubleshooting customers plumbing problems as well as other home maintenance issues."
        }
    ],
    "display": function () {
        var workExperience = $("#workExperience");

        for (var i = 0; i < this.jobs.length; i++) {
            // TODO: FIX THIS THE WAY I DID IT WITH THE PROJECTS OBJECT!!!
            // add unique id to HTMLworkStart element
            var HTMLworkStartWithId = HTMLworkStart.replace("%id%", i);
            workExperience.append(HTMLworkStartWithId);
            var workExperienceEntry = $(".work-entry");
            workExperienceEntry.append(HTMLworkEmployer.replace('%data%', this.jobs[i].employer) +
                HTMLworkTitle.replace('%data%', this.jobs[i].title));
            workExperienceEntry.append(HTMLworkDates.replace('%data%', this.jobs[i].dates));
            workExperienceEntry.append(HTMLworkLocation.replace('%data%', this.jobs[i].location));
            workExperienceEntry.append(HTMLworkDescription.replace('%data%', this.jobs[i].description));
        }
    }
};
work.display();


var projects = {
    "projects": [
        {
            "title": "Portfolio Website",
            "dates": "05/2015-06/2015",
            "description": "A website to showcase the projects I have worked on.",
            "images": "images/portfolio-website-screenshot.jpg"
        }
    ],
    "display": function () {
        for (var i = 0; i < this.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",
                this.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%",
                this.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%",
                this.projects[i].description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%",
                this.projects[i].images);

            // grab most recently inserted project entry
            var currentProjectEntry = $(".project-entry:last");
            currentProjectEntry.append(formattedProjectTitle);
            currentProjectEntry.append(formattedProjectDates);
            currentProjectEntry.append(formattedProjectDescription);
            currentProjectEntry.append(formattedProjectImage);
        }

    }
};
projects.display();

var education = {
    "schools": [
        {
            "name": "San Jose State University",
            "location": "San Jose, CA",
            "degree": "BS",
            "majors": [
                "Computer Science"
            ],
            // dates must be an integer
            "dates": 1432105200000,
            "url": "http://www.sjsu.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": 1417392000000,  // i.e. November 30, 2015
            "url": "http://www.udacity.com"
        }
    ],
    "display": function () {
        // schools
        for (var i = 0; i < this.schools.length; i++) {
            // append school entry
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%",
                this.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",
                this.schools[i].degree);
            // instantiate a Date object
            var date = new Date(this.schools[i].dates);
            var graduationDate = monthNames[date.getMonth()] + " " +
                                 date.getDate() + ", " +
                                 date.getFullYear() + " ";
            var formattedSchoolDates = HTMLschoolDates.replace("%data%",
                graduationDate);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",
                this.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",
                this.schools[i].majors);

            // grab most recently inserted project entry
            $(".education-entry:last").append(formattedSchoolName,
                                         formattedSchoolDegree,
                                         formattedSchoolDates,
                                         formattedSchoolLocation,
                                         formattedSchoolMajor);
        }

        // ONLINE COURSES SECTION
        // append header to education section
        $("#education").append(HTMLonlineClasses);
        for (i = 0; i < this.onlineCourses.length; i++) {
            // append school entry
            $("#education").append(HTMLschoolStart);

            // set data
            var formattedOnlineTitle =
                HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
            var formattedOnlineSchool =
                HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
            // instantiate a Date object
            var date = new Date(this.onlineCourses[i].date);
            var onlineClassEndDate = monthNames[date.getMonth()] + " " +
                                     date.getDate() + ", " +
                                     date.getFullYear() + " ";
            var formattedOnlineDates =
                HTMLonlineDates.replace("%data%", onlineClassEndDate);
            var formattedOnlineURL =
                HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);

            // create education entry for each class with all data in it
            $(".education-entry:last").append(formattedOnlineTitle,
                                              formattedOnlineSchool,
                                              formattedOnlineDates,
                                              formattedOnlineURL);
        }
    }
};
education.display();


// QUESTIONS:
// What would be the best way to format the code, to break it up, so that we don't
// have those huge lines beyond 80 characters? What is standard practice?
