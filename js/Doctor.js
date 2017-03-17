var apiKey = require("./../.env").apiKey;

function Doctor() {

}

Doctor.prototype.getDoctors = function(medicalIssue) {
  var doctorList = [];

  // API Personal Information:
  // result.data.profile.first_name = doctor's first name
  // result.data.profile.last_name = doctor's last name
  // result.data.profile.bio = doctor's bio

  // API Office Information:
  // result.data.practices[0].name = office name
  // result.data.practices[0].visit_address.city = city
  // result.data.practices[0].visit_address.state = state
  // result.data.practices[0].visit_address.street = street
  // result.data.practices[0].visit_address.zip = zip

  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=" + apiKey)
  .then(function(result) {
    for (var i = 0; i < result.data.length; i++) {
      console.log(result.data[i]);
    }
  }).fail(function(result) {
    console.log("Could not get required information");
  });
};

exports.doctorModule = Doctor;
