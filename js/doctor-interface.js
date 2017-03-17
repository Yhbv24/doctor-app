var Doctor = require("./../js/Doctor.js").doctorModule;
var displayDoctors = function(medicalIssue, doctors) {
  if (doctors.length === 0) {
    $("#fail").show();
    $("#results").hide();
  } else {
    $("#fail").hide();
    for (var i = 0; i < doctors.length; i++) {
      $("#results-list").append(
        "<tr>" +
          "<td>" + doctors[i].name + "</td>" + // Doctor's name
          "<td>" + doctors[i].address + "</td>" + // Doctor's address
          "<td>" + doctors[i].phone_number + "</td>" + // Doctor's phone number
          "<td>" + doctors[i].website + "</td>" + // Doctor's website
          "<td>" + doctors[i].specialties + "</td>" + // Doctor's specialties
        "</tr>"
      );
    }
  }
};

$(function() {
  var DoctorObject = new Doctor();
  $("#find").click(function() {
    var medicalIssue = $("#medical-issue").val();

    if (!medicalIssue) {
      alert("Please enter something.");
    }

    $("#fail").hide();
    $("#medical-issue").val("");
    $("#results-list").empty();
    DoctorObject.getDoctors(medicalIssue, displayDoctors);
    $("#results").show();
  });
});
