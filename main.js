"use strict";

/****************

 The most basic process for setting up a handleBars template

*********************/

let context = {

    "name": "Casey",
    "occupation": "Programmer",
    "language": "Handlebars"

};

// retrieve the template data from HTML
let template = $('#handlebars-starter').html();

// compile the template data into a funtion
let templateScript = Handlebars.compile(template);

// execute the newly created function 
// passing the data a s a n argument
let myHTML = templateScript(context);

$("#stuff").append(myHTML);

/**********

    Let's do that again

**************/

let lang_content = {
    "language": "handlebars",
    "adjective": "awesome"
};

lang_content.happy = "YEAH YEAH YEAH";

let tmp_language = $('#hbs-language').html();
let tmp_language_script = Handlebars.compile(tmp_language);
let html_language = tmp_language_script(lang_content);
$(document.body).append(html_language);


/************

using some logic in the template to navigate a more complex data structure

 *************/

let dev_context = {
  "occupation" : "developer",
  "website" : {
    "name" : "Nashville Software School"
  },
  "names" : [
    {"firstName" : "Brenda"},
    {"firstName" : "Jisie"},
    {"firstName" : "Casey"}
  ],
  "cities" : ["Nashville, Franklin, Green Hills"]
};

/**********

    Same steps as above, but check out the template in the html

*************/

// grab the template
let tpl_devs = $('#hbs-devs').html();

// convert template into function
let tpl_devs_script = Handlebars.compile(tpl_devs);

// execute the newly created function 
// passing the data as an argument
let html_devs = tpl_devs_script(dev_context);

// add this to the html
$(document.body).append(html_devs);



/*************

    Now let's write a helper function

****************/

var voter_context = {
  "person":[
    {"name" : "John", "year" : 1988},
    {"name" : "Liz" , "year" : 1972},
    {"name" : "Mike" , "year" : 2009},
  ]
}

// custom helper
// 'registerHelper' is method on Handlebars
Handlebars.registerHelper("voterStatus", function(year){
    if( year > 1988){
        return "can not vote";
    } else {
        return "is a voter";
    }
});


// same four steps as above:
// get the template,
// compile it to a script
// pass the context to the template script
// and append that html string to the body
let tpl_voter = $('#hbs-voter').html();
let tpl_voter_script = Handlebars.compile(tpl_voter);
let html_voter = tpl_voter_script(voter_context);
$(document.body).append(html_voter);