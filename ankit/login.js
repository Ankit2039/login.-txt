function myfun(){
  var user = document.getElementById("fname").value;
  var pass = document.getElementById("fpass").value;
  if (user == "") {
    document.getElementById("user").innerHTML = "** Please enter username";
    return false;
  }
  else {
    document.getElementById("user").innerHTML = "";
  }

  var pass = document.getElementById("fpass").value;
  if (pass == "") {
    document.getElementById("pass").innerHTML = "** Please enter password";
    return false;
  }
  else {
    document.getElementById("pass").innerHTML = "";
  }
  if(credentials.users.includes(user)){
  if( credentials.passwords.includes(pass) ){
    var i = credentials.users.indexOf(user);
    var j = credentials.passwords.indexOf(pass);
    console.log(i,j);
    if(i == j){
      localStorage.setItem('session',user);
      window.location.replace("homepage.html");
    }    
  }else{
    document.getElementById("error").innerHTML = '** Wrong password ';
  }}else
  document.getElementById("error").innerHTML = '** Invalid User ';
}