var request = require("request");
var inquirer = require("inquirer");
var fs = require("fs");


function start() {

  inquirer.prompt([
    {
      type: "list",
      name: "nodeReviewQ1",
      message: "What would you like to do (on a Friday review session)?",
      choices: ["Let's go home!", "Let's do Node!", "Yell at Peter!"]
    }
  ]).then(function(response) {
    console.log(response.nodeReviewQ1)
    switch (response.nodeReviewQ1) {
      case "Yell at Peter!":
      console.log("Peter YOU SUCK. GO HOME.");
      start();
      break;

      case "Let's do Node!":
      request("https://randomuser.me/api/?results=5", function(err, response, body){
        // console.log("error", err)
        // console.log("res", response)
        var bodyObj = JSON.parse(body);

        var albert = "";

        for (var i = 0; i < bodyObj.results.length; i++) {
          if (i === (bodyObj.results.length - 1)){
            albert += "and " + bodyObj.results[i].name.first;
          }
          else {
            albert += bodyObj.results[i].name.first + ", ";
          }

          //same as above --> albert = albert + bodyObj.results[i].name.first + ", ";
        }

        fs.appendFile('clarks_real_friendslist.txt', albert + " are definitely real and Clark's friends.\r\n", function (err) {
          if (err) throw err;
          console.log('Saved!');
          start();
        });
      })
      break;

      case "Let's go home!":
      console.log("Kay byeeeee~~!! xoxo")
      break;
    }

  })

}

start();