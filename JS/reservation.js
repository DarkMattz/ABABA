$(document).ready(function() {
    const navbarLinks = document.getElementsByClassName("navbar-links")[0]
    const toggleButton = document.getElementsByClassName("toggle-button")[0]

    toggleButton.addEventListener("click", function() {
    
        navbarLinks.classList.toggle("active")
    })
})

function validate() {
    var valid = true
    if(!$("#name").val().match("^[a-zA-Z ]+$")){
        $(".name-error").css("display", "initial")
        valid = false
    } else {
        $(".name-error").css("display", "none")
    }
    if(!$("#telp").val().match("[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")){
        $(".telp-error").css("display", "initial")
        valid = false
    } else {
        $(".telp-error").css("display", "none")
    }
    if($("#people").val() == ""){
        $(".people-error").css("display", "initial")
        valid = false
    } else {
        $(".people-error").css("display", "none")
    }
    const d = new Date()
    var dateVal = $("#date").val()
    alert(dateVal.substr(0,2) + d.getDate )
    return false
}