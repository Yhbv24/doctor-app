var Doctor = require("./../js/Doctor.js").doctorModule;
var displayDoctors = function(medicalIssue, doctors) {
  console.log(doctors);
  for (var i = 0; i < doctors.length; i++) {
    $("#results-list").append(
      "<tr>" +
        "<td>" + doctors[i].name + "</td>" + // Doctor's name
        "<td>" + doctors[i].address + "</td>" + // Doctor's address
        "<td>" + doctors[i].phone_number + "</td>" + // Doctor's phone number
        "<td>" + doctors[i].website + "</td>" + // Doctor's website
      "</tr>"
    );
  }
};

$(function() {
  var DoctorObject = new Doctor();

  $("#find").click(function() {
    var medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    $("#results-list").empty();

    DoctorObject.getDoctors(medicalIssue, displayDoctors);

    $("#results").show();
  });
});
