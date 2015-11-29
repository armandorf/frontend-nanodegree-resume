var bio = {
    "name": "Pedro Flores",
    "role": "Web Developer",
    "contacts": {
        "mobile": "408-509-4003",
        "email": "armandorf.05@gmail.com",
        "github": "github.com/armandorf",
        "location": "San Jose, CA"
        // NOTE for grader: I don't have a Twitter account nor do I have a blog (yet--working on it :) )
    },
    "welcomeMessage": "Hi, I'm a software engineer living in the San Francisco Bay Area. " +
                      "I love to create great-looking websites, " +
                      "and take great pride in making sure they are user friendly!",
    "skills": [
        "JavaScript",
        "HTML5",
        "CSS",
        "Python",
        "SQL",
        "Java",
        "Salesforce: Apex, SOQL, and Visualforce"
    ],
    "biopic": "images/biopic.jpg",
    "display": function () {
        var header = $("#header");

        // name and title
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);

        // contact information list using HTMLcontactGeneric
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
            skillsTag.append("<br />");
        }
    }
};
bio.display();


var work = {
    "jobs": [{
        "employer": "Apttus Corporation",
        "title": "Software Engineer",
        "location": "San Mateo, CA",
        "dates": "08/2015-Present",
        "description": "As a full stack sofware engineer, I create, test, and maintain software across a " +
                       "range of different software products in the company, as well as fix bugs as part of the " +
                       "ongoing software development process in an agile working environment."
    },
    {
        "employer": "The Home Depot",
        "title": "Sales Representative",
        "location": "San Jose, CA",
        "dates": "06/2012-11/2014",
        "description": "Worked in the plumbing department, troubleshooting customers " +
                       "plumbing problems as well as other home maintenance issues."
    }],
    "display": function () {
        var workExperience = $("#workExperience");

        for (var i = 0; i < this.jobs.length; i++) {
            var formattedWorkTitle = HTMLworkEmployer.replace('%data%', this.jobs[i].employer) +
                                     HTMLworkTitle.replace('%data%', this.jobs[i].title);
            var formattedWorkDates = HTMLworkDates.replace('%data%', this.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace('%data%', this.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace('%data%', this.jobs[i].description);

            // append work places to page
            workExperience.append(HTMLworkStart);
            var workExperienceEntry = $('.work-entry:last');

            workExperienceEntry.append(formattedWorkTitle,
                                       formattedWorkDates,
                                       formattedWorkLocation,
                                       formattedWorkDescription);
        }
    }
};
work.display();


var projects = {
    "projects": [{
        "title": "Portfolio Website",
        "dates": "05/2015-06/2015",
        "description": "A website to showcase the projects I have worked on.",
        "images": "images/portfolio-website-screenshot.jpg"
    }],
    "display": function () {
        for (var i = 0; i < this.projects.length; i++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[i].images);

            // grab most recently inserted project entry
            var currentProjectEntry = $(".project-entry:last");
            currentProjectEntry.append(formattedProjectTitle,
                                       formattedProjectDates,
                                       formattedProjectDescription,
                                       formattedProjectImage);
        }
    }
};
projects.display();


// used by Education sections
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];


var education = {
    "schools": [{
        "name": "San Jose State University",
        "location": "San Jose, CA",
        "degree": "BS",
        "majors": [
            "Computer Science"
        ],
        // dates must be an integer
        "dates": 1432105200000,
        "url": "http://www.sjsu.edu"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": 1451520000000,  // i.e. November 30, 2015
        "url": "http://www.udacity.com"
    }],
    "display": function () {

        // SCHOOLS
        for (var i = 0; i < this.schools.length; i++) {
            // append school entry
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", this.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
            // instantiate a Date object
            var date = new Date(this.schools[i].dates);
            var graduationDate = monthNames[date.getMonth()] + " " +
                                 date.getDate() +
                                 ", " +
                                 date.getFullYear() +
                                 "<span> </span>";
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", graduationDate);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors);

            // grab most recently inserted project entry and append data to it
            $(".education-entry:last").append(formattedSchoolName,
                                              formattedSchoolDegree,
                                              formattedSchoolDates,
                                              formattedSchoolLocation,
                                              formattedSchoolMajor);
        }

        // ONLINE COURSES SECTION
        // append header to education section
        $("#education").append("<br />" + HTMLonlineClasses);
        for (i = 0; i < this.onlineCourses.length; i++) {
            // append school entry
            $("#education").append(HTMLschoolStart);

            // set data
            var formattedOnlineTitle =
                HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
            var formattedOnlineSchool =
                HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
            // instantiate a Date object
            date = new Date(this.onlineCourses[i].date);
            var onlineClassEndDate = monthNames[date.getMonth()] + " " +
                                                date.getDate() + ", " +
                                                date.getFullYear() +
                                                "<span><i>(expected)</i></span>";
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

var letsConnect = {
    display: function () {
        var footerContacts = $('#letsConnect #footerContacts');

        for (var contact in bio.contacts) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
            formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);

            footerContacts.append(formattedContact);
        }
    }
};
letsConnect.display();


// append map to page
$('#mapDiv').append(googleMap);
