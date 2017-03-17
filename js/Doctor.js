var apiKey = require("./../.env").apiKey;

// API Personal Information:
// result.data[i].profile.first_name = doctor's first name
// result.data[i].profile.last_name = doctor's last name
// result.data[i].profile.bio = doctor's bio

// API Address Information:
// result.data[i].practices[0].name = office name
// result.data[i].practices[0].visit_address.city = city
// result.data[i].practices[0].visit_address.state = state
// result.data[i].practices[0].visit_address.street = street
// result.data[i].practices[0].visit_address.zip = zip

// API Phone Information
// result.data[i].practices[0].phones.number = phone number

// API Website Information
// result.data[i].practices[0].website = website

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  var doctors = [];

  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=" + apiKey)
  .then(function(result) {
    for (var i = 0; i < result.data.length; i++) {
      doctors[i] = {
        name: result.data[i].profile.first_name +
          " " + result.data[i].profile.last_name,
        address: result.data[i].practices[0].visit_address.street +
          ", " + result.data[i].practices[0].visit_address.city +
          ", " + result.data[i].practices[0].visit_address.state +
          ", " + result.data[i].practices[0].visit_address.zip,
        phone_number: result.data[i].practices[0].phones.number,
        website: result.data[i].practices[0].website
      }
    };
    displayDoctors(medicalIssue, doctors);
  }).fail(function(result) {
    $(".results").text("Error in retrieving results.");
  });
};

exports.doctorModule = Doctor;
