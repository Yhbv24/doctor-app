var apiKey = require("./../.env").apiKey;

function Doctor() {
}

Doctor.prototype.getDoctors = function(medicalIssue, displayDoctors) {
  var doctors = [];

  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" + medicalIssue + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=" + apiKey)
  .then(function(result) {
    for (var i = 0; i < result.data.length; i++) {
      var phone_number = result.data[i].practices[0].phones[0].number.slice(0, 3) +
      " " + result.data[i].practices[0].phones[0].number.slice(3, 6) + " " + result.data[i].practices[0].phones[0].number.slice(6, 10);

      if (!result.data[i].practices[0].website) {
        result.data[i].practices[0].website = "No website found.";
      }

      doctors[i] = {
        name: result.data[i].profile.first_name +
          " " + result.data[i].profile.last_name,
        address: result.data[i].practices[0].visit_address.street +
          ", " + result.data[i].practices[0].visit_address.city +
          ", " + result.data[i].practices[0].visit_address.state +
          ", " + result.data[i].practices[0].visit_address.zip,
        phone_number: phone_number,
        website: result.data[i].practices[0].website,
        specialties: result.data[i].specialties[0].name
      };
    }
    displayDoctors(medicalIssue, doctors);
  }).fail(function(result) {
    $(".results").text("Error in retrieving results.");
  });
};

exports.doctorModule = Doctor;
