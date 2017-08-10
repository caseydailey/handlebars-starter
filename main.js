"use strict";

let context = {

    "name": "Casey",
    "occupation": "Programmer",
    "language": "Handlebars"

};

// retrieve the template data from HTML
let template = $('#handlebars-starter').html();

// compile the template data into a funtion
let templateScript = Handlebars.compile(template);

// execute the newly created funtion 
// passing the data a s a n argument
let myHTML = templateScript(context);

$("#stuff").append(myHTML);

let lang_content = {
    "language": "handlebars",
    "adjective": "awesome"
};

lang_content.happy = "YEAH YEAH YEAH";