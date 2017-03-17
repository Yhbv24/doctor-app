var Doctor = require("./../js/Doctor.js").doctorModule;
var displayDoctors = function(medicalIssue, doctorData) {
  alert(doctors[4]);
};

$(function() {
  var DoctorObject = new Doctor();

  $("#find").click(function() {
    var medicalIssue = $("#medical-issue").val();
    $("#medical-issue").val("");
    $("results").empty();

    DoctorObject.getDoctors(medicalIssue, displayDoctors);
  });
});
