(function() {
  document.addEventListener('DOMContentLoaded', initBo, false);
})();

function initBo(){
  console.log('fired');

  var bo = io();

  if(localStorage.getItem('myToken')){
    bo.emit("getToken", {token : localStorage.getItem('myToken')});
  } else{
    bo.emit("getToken", {token : "noToken"});
  }


  bo.on('credentials', function(data){
    document.getElementById('user').innerHTML = data.user;
  });

  bo.on('unAuth', function(data){
    window.location.href = "/";
  })

}
