
var btnConect = document.querySelector('#btn-conect');
var btnDisconnect = document.querySelector('#btn-disconnect');
var container = document.querySelector('#meet-container');
var api = null;
var roomNamePrefix = "agiliSoft-EBA0A6D5FD694452ACF76C4E84336A2D"
const domain = 'meet.jit.si';
var containerwidth = 900
var containerheight = 500


btnConect.addEventListener('click', () => {

    ///if(api != null) return;

    var roomName = Array.apply(null, Array(100)).map(generateRoomName).join('');

    callApiMeeting(roomName);

    verifyButtons();

});

btnDisconnect.addEventListener('click', () => {

    container.innerHTML = "";
    btnDisconnect.style.display="none"
    btnConect.style.display="block";
 
});

function generateRoomName()
{
  return roomNamePrefix[Math.floor(Math.random() * roomNamePrefix.length)];
}

function callApiMeeting(roomName)
{
    const options = {
        roomName: roomName,
        width: containerwidth,
        height: containerheight,
        parentNode: container
    };

    api = new JitsiMeetExternalAPI(domain, options);
}

function verifyButtons()
{
    btnConect.style.display="none"
    btnDisconnect.style.visibility="visible";
    btnDisconnect.style.display="block";
}