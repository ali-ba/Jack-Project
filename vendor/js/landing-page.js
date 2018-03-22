//@CONNOR START

var APIKey = 'AIzaSyCARzd4Q9zzpYBHgPtvH3pH8-NsHRNWM9U',
 channelId = 'UCXZfInGOrvkr3m7cYDmxVhQ',
 userName = 'arduinoversusevil',
 videoIds = [],
 videoSrc1 = "https://www.youtube.com/embed/",
 videoSrc2 = "?mute=1&controls=0&rel=0&autoplay=1&loop=1&playlist=",
 video1 = document.getElementById('video1'),
 videoPlayer1 = document.getElementById('videoPlayer1'),
 videoPlayer2 = document.getElementById('videoPlayer2'),
 videoPlayer3 = document.getElementById('videoPlayer3'),
 videoPlayer4 = document.getElementById('videoPlayer4'),
 videoPlayer5 = document.getElementById('videoPlayer5'),
 i,
 ludmila = document.getElementsByClassName('ludmila')[0],
 ernest = document.getElementsByClassName('ernest')[0],
 arthur = document.getElementsByClassName('arthur')[0],
 denys = document.getElementsByClassName('denys')[0],
 vlad = document.getElementsByClassName('vlad')[0],
 names = document.getElementsByClassName('name');

ludmila.addEventListener("mouseenter", setLudmila);
ernest.addEventListener("mouseenter", setErnest);
arthur.addEventListener("mouseenter", setArthur);
denys.addEventListener("mouseenter", setDenys);
vlad.addEventListener("mouseenter", setVlad);

//https://www.youtube.com/embed/SagaKl0JT-Q?mute=1&controls=0&autoplay=1&loop=1&playlist=

//0,1,7,8,11  XhlataYxdz8
      
/*=====================================================*/
                    //YOUTUBE GET REQUEST 

$(document).ready(function(){


  $.get(
      "https://www.googleapis.com/youtube/v3/channels",{
        part:'contentDetails', 
        id: channelId,
        // forUsername: userName,
        key: APIKey},
        function(data){
          uploadsId = data.items[0].contentDetails.relatedPlaylists.uploads;
        //   console.log(uploadsId);
          getVideoIds(uploadsId);
        }
    );
    function getVideoIds(uploadsId){
        $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",{
        part:'snippet', 
        maxResults: 25,
        playlistId: uploadsId,
        // success: logValues,
        key: APIKey},
        function(data){
          for(i = 0;i<data.items.length;i++){
              videoIds.push(data.items[i].snippet.resourceId.videoId);
          }
          (function(){
            videoPlayer1.setAttribute('src', videoSrc1 + videoIds[0] + videoSrc2 + videoIds[0]);
            videoPlayer2.setAttribute('src', videoSrc1 + videoIds[1] + videoSrc2 + videoIds[1]);
            videoPlayer3.setAttribute('src', videoSrc1 + videoIds[7] + videoSrc2 + videoIds[7]);
            videoPlayer4.setAttribute('src', videoSrc1 + videoIds[8] + videoSrc2 + videoIds[8]);
            videoPlayer5.setAttribute('src', videoSrc1 + videoIds[11] + videoSrc2 + videoIds[11]);
          })();
        }
    );
    }
});

function logValues(){
  setTimeout(function(){
    console.log(videoIds[0])
    videoPlayer1.setAttribute('src', videoSrc1 + videoIds[0] + videoSrc2 + videoIds[0]);
  },1000);
}

function setLudmila(){
  if(videoPlayer1.classList.contains('hide')){
    videoPlayer1.classList.remove('hide');
    videoPlayer1.classList.add('show');
  }
  if(videoPlayer2.classList.contains('show')){
    videoPlayer2.classList.remove('show');
    videoPlayer2.classList.add('hide');
  }
  if(videoPlayer3.classList.contains('show')){
    videoPlayer3.classList.remove('show');
    videoPlayer3.classList.add('hide');
  }
  if(videoPlayer4.classList.contains('show')){
    videoPlayer4.classList.remove('show');
    videoPlayer4.classList.add('hide');
  }
  if(videoPlayer5.classList.contains('show')){
    videoPlayer5.classList.remove('show');
    videoPlayer5.classList.add('hide');
  }
}
function setErnest(){
  if(videoPlayer2.classList.contains('hide')){
    videoPlayer2.classList.remove('hide');
    videoPlayer2.classList.add('show');
  }
  if(videoPlayer1.classList.contains('show')){
    videoPlayer1.classList.remove('show');
    videoPlayer1.classList.add('hide');
  }
  if(videoPlayer3.classList.contains('show')){
    videoPlayer3.classList.remove('show');
    videoPlayer3.classList.add('hide');
  }
  if(videoPlayer4.classList.contains('show')){
    videoPlayer4.classList.remove('show');
    videoPlayer4.classList.add('hide');
  }
  if(videoPlayer5.classList.contains('show')){
    videoPlayer5.classList.remove('show');
    videoPlayer5.classList.add('hide');
  }
}
function setArthur(){
  if(videoPlayer3.classList.contains('hide')){
    videoPlayer3.classList.remove('hide');
    videoPlayer3.classList.add('show');
  }
  if(videoPlayer2.classList.contains('show')){
    videoPlayer2.classList.remove('show');
    videoPlayer2.classList.add('hide');
  }
  if(videoPlayer1.classList.contains('show')){
    videoPlayer1.classList.remove('show');
    videoPlayer1.classList.add('hide');
  }
  if(videoPlayer4.classList.contains('show')){
    videoPlayer4.classList.remove('show');
    videoPlayer4.classList.add('hide');
  }
  if(videoPlayer5.classList.contains('show')){
    videoPlayer5.classList.remove('show');
    videoPlayer5.classList.add('hide');
  }
}
function setDenys(){
  if(videoPlayer4.classList.contains('hide')){
    videoPlayer4.classList.remove('hide');
    videoPlayer4.classList.add('show');
  }
  if(videoPlayer2.classList.contains('show')){
    videoPlayer2.classList.remove('show');
    videoPlayer2.classList.add('hide');
  }
  if(videoPlayer3.classList.contains('show')){
    videoPlayer3.classList.remove('show');
    videoPlayer3.classList.add('hide');
  }
  if(videoPlayer1.classList.contains('show')){
    videoPlayer1.classList.remove('show');
    videoPlayer1.classList.add('hide');
  }
  if(videoPlayer5.classList.contains('show')){
    videoPlayer5.classList.remove('show');
    videoPlayer5.classList.add('hide');
  }
}
function setVlad(){
  if(videoPlayer5.classList.contains('hide')){
    videoPlayer5.classList.remove('hide');
    videoPlayer5.classList.add('show');
  }
  if(videoPlayer2.classList.contains('show')){
    videoPlayer2.classList.remove('show');
    videoPlayer2.classList.add('hide');
  }
  if(videoPlayer3.classList.contains('show')){
    videoPlayer3.classList.remove('show');
    videoPlayer3.classList.add('hide');
  }
  if(videoPlayer4.classList.contains('show')){
    videoPlayer4.classList.remove('show');
    videoPlayer4.classList.add('hide');
  }
  if(videoPlayer1.classList.contains('show')){
    videoPlayer1.classList.remove('show');
    videoPlayer1.classList.add('hide');
  }
}


/*=====================================================*/
                    //YOUTUBE GET REQUEST 


//@CONNOR END
