var flag = 1;
if (flag === 1) {
  tabcontent = document.getElementsByClassName("tabcontent");
  tabcontent[0].style.display = "block";
  flag = 0;
}

function openInfo(evt, infoName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " active";
}

function showInfo(evt, infoName) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("info");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("imglinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(infoName).style.display = "block";
  evt.currentTarget.className += " active";
}