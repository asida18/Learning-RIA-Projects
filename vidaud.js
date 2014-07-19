
    		window.onload = function(e){
    	       document.querySelector('#controls').addEventListener('click',
    	       function (e){
    	           var video = document.getElementById('video1');
    	           var audio = document.getElementById('audio1');
    	           var background = document.querySelector('body');
    	           switch(e.target.id){
    	               
    	               case 'play':
    	                   video.play();
    	                   background.classList.toggle('bgChangeone');
    	                   break;
    	               case 'pause':
    	                   video.pause();
    	                   background.classList.toggle('bgChangetwo');
    	                   break;
    	               case 'volumeUp':
    	                   video.volume+=0.1;
    	                   background.classList.toggle('bgChangethree');
    	                   break;
    	               case 'volumeDown':
    	                   video.volume-=0.1;
    	                   background.classList.toggle('bgChangefour');
    	               
    	               }
    	               
    	           switch(e.target.id){
    	               case 'playA':
    	                   audio.play();
    	                   background.classList.toggle('bgAChangeone');
    	                   break;
    	               case 'pauseA':
    	                   audio.pause();
    	                   background.classList.toggle('bgAChangetwo');
    	                   break;
    	               case 'volumeUpA':
    	                   audio.volume+=0.1;
    	                   background.classList.toggle('bgAChangethree');
    	                   break;
    	               case 'volumeDownA':
    	                   audio.volume-=0.1;
    	                   background.classList.toggle('bgAChangefour');
    	              }    
    	            }
    	          );
    	    }
	