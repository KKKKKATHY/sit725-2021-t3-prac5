// connect to the socket

let socket = io();


socket.on('number', (msg) => {
  console.log('Random number: ' + msg);
})

$(document).ready(() => {
  console.log('-> PageReady')
  $("#nav-bar").load('./component/navbar.html',() => {
    $('.sidenav').sidenav();
  })
  $("footer").load('./component/foot.html')

  //test get call
  $.get('/api/init', ({result}) => {
    console.log('--> page init: ', result)
    for(let project of result[0].items){
      $('#display').append(createProjectCard(project)); 
    }
  })

})
