
$('video').mediaelementplayer({
	features: ['playpause', 'progress', 'tracks', 'volume', 'fullscreen'],
	stretching: 'responsive',
	startLangauge: 'en'
});


const video = document.querySelector('video');
console.log("Video Info" + video);

const script = document.querySelectorAll('p span');
console.log(script);
let duration = Math.ceil(video.duration); 

// select Video
//select span tags
// when you play the for loop starts and goes through the span tags. 
//For each span tag use the start time and end time. If current time is between start time and end time. add class
//turn highlightOn  to true this lets me know a highlight is active.
//for second to last loop





video.addEventListener('play', function(){


	video.addEventListener('timeupdate', function() {

		let track = video.currentTime;  // keeps track of the track time.
		let timer = Math.floor(video.duration);
		let highlightOn	= false;

		for (let i = 0; i < script.length;  i++){
				
				let dataStart = script[i].dataset.start;
				let dataEnd = script[i].dataset.end;

				if (track >= dataStart && track <= dataEnd ){

					
					script[i].setAttribute('class', 'highlight');
					let prevTrack = script[i].previousElementSibling;
											


					if (prevTrack !== null) {

						prevTrack.removeAttribute('class');

					}

					else if (prevTrack == script[i]) {
							script[i].setAttribute('class', 'highlight');

					}



				}
			

				console.log("Counter " + i);
				console.log("Tracktime " + track);
				console.log("Data Start " + dataStart);
				console.log("Data End " + dataEnd);

			console.log("------------------------------------------------");



		}



	});





/*
	for (let i = 0; i < script.length;  i++){

		console.log("Test " + i);

	}*/



});
