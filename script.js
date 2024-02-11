document.addEventListener('DOMContentLoaded', function () {
    const scheduling = document.getElementById('scheduling');

    scheduling.addEventListener('click', function(event) {
        event.preventDefault(); 
        
        var date_meeting = document.getElementById("start").value;
        var time_start = document.getElementById("meetingtime").value;

        var selectedTime = new Date("1970-01-01T" + time_start);
        var hours = selectedTime.getHours();
        var minutes = selectedTime.getMinutes();

       
        if (hours >= 15 && hours < 17) {
            
            alert(`Hello, your meeting is booked for ${date_meeting} at ${time_start}`);
        } else {
            
            alert("Please select a time between 3 PM and 5 PM.");
        }
    });
});
