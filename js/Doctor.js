var apiKey = require("./../.env").apiKey;

function Doctor() {

}

Doctor.prototype.getDoctors = function(medicalIssue) {
  var doctorList = [];

  // API Personal Information:
  // result.data[i].profile.first_name = doctor's first name
  // result.data[i].profile.last_name = doctor's last name
  // result.data[i].profile.bio = doctor's bio

  // API Office Information:
  // result.data[i].practices[0].name = office name
  // result.data[i].practices[0].visit_address.city = city
  // result.data[i].practices[0].visit_address.state = state
  // result.data[i].practices[0].visit_address.street = street
  // result.data[i].practices[0].visit_address.zip = zip

  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=" + apiKey)
  .then(function(result) {
    if (result.data.length === 0) {
      alert("No results found, sorry.");
    } else {
      for (var i = 0; i < result.data.length; i++) {
        $("#results-list").append (
          "<tr>" +
            "<td>" + result.data[i].profile.first_name + " " + result.data[i].profile.last_name + "</td>" +
            "<td>" + result.data[i].profile.bio + "</td>" +
          "</tr>"
        );
      }
    }
  }).fail(function(result) {
    console.log("Could not get required information");
  });
};

exports.doctorModule = Doctor;
