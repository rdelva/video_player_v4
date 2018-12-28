
$('video').mediaelementplayer({
	features: ['playpause','current', 'progress', 'duration', 'tracks', 'volume', 'fullscreen'],
	stretching: 'responsive',
	startLangauge: 'en'
});


const video = document.querySelector('video');
const script = document.querySelectorAll('p span');
const p = document.querySelector('p');
let trackSelected = "";


video.addEventListener('play', function(){


	video.addEventListener('timeupdate', function() {

		let track = video.currentTime;  // keeps track of the track time.
		let timer = Math.floor(video.duration);

		for (let i = 0; i < script.length;  i++){
				
				let dataStart = script[i].dataset.start;
				let dataEnd = script[i].dataset.end;

				if (track > dataStart && track < dataEnd ){
					script[i].setAttribute('class', 'highlight');
					let prevTrack = script[i].previousElementSibling;						


					if (prevTrack !== null) { // checks to see ifs not at the begining


						prevTrack.removeAttribute('class');

					}

				}
			
		}// end of for loop


			p.addEventListener('click', function(event){



				if (trackSelected == ""){
					event.target.setAttribute('class', 'highlight');
					trackSelected = p.querySelector('.highlight');
					video.currentTime = trackSelected.dataset.start;
				}


				else {
					trackSelected = p.querySelector('.highlight');
					trackSelected.removeAttribute('class');
					event.target.setAttribute('class', 'highlight');
					trackSelected = p.querySelector('.highlight');
					video.currentTime = trackSelected.dataset.start;

				}

			});


	});


});


