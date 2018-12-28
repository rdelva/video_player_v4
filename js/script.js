
$('video').mediaelementplayer({
	useDefaultControls: true,
	stretching: 'responsive',
	startLangauge: 'en'
});


const video = document.querySelector('video');
const script = document.querySelectorAll('span');
const p = document.querySelectorAll('p');
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

					else {
						let highlight = document.querySelector('.highlight');
						let prevParagrah = highlight.parentNode;
						console.log(prevParagrah);
						let lastLine = prevParagrah.lastElementChild;
						lastLine.removeAttribute('class');


					}

				}
			
		}// end of for loop


			document.addEventListener('click', function(event){



				if (trackSelected == ""){
					event.target.setAttribute('class', 'highlight');
					trackSelected = document.querySelector('.highlight');
					video.currentTime = trackSelected.dataset.start;
				}


				else {
					trackSelected = document.querySelector('.highlight');
					trackSelected.removeAttribute('class');
					event.target.setAttribute('class', 'highlight');
					trackSelected = document.querySelector('.highlight');
					video.currentTime = trackSelected.dataset.start;

				}

			});


	});


});


