var Doctor = require("./../js/Doctor.js").doctorModule;

$(function() {
  var DoctorObject = new Doctor();

  $("#find").click(function() {
    $("#find-form").hide();
    var medicalIssue = $("#medical-issue").val();

    DoctorObject.getDoctors(medicalIssue);
  });
});
