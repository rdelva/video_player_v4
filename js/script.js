
$('video').mediaelementplayer({
	features: ['playpause', 'progress', 'tracks', 'volume', 'fullscreen'],
	startLangauge: 'en'
});


function captionListener () {

	const p = document.getElementsByTagName('p');
	const caption = document.querySelector('.caption');
	const span = document.querySelectorAll('p > span');
	/*const t_start = document.querySelectorAll('[data-start]');
	const t_end = document.querySelectorAll('[data-end]');*/
	const video = document.querySelector('video');
	let trackTime;

	console.log(span);
	video.addEventListener('timeupdate', function() {
		//console.log (span[0].dataset.start);
		
		let timeStamp   = video.currentTime;

		for (let i = 0; i <= span.length; i++ ) {

				let t_start = span[i].getAttribute('data-start');
				console.log("Start " + t_start);
				let t_end = span[i].getAttribute('data-end');
				console.log("Start " + t_start);


			if (timeStamp >=  t_start && timeStamp <= t_end) {
				
				span[i].setAttribute("class", "highlight");
			}

		
		}

	}); 





}

captionListener();
