
$('video').mediaelementplayer({
	features: ['playpause', 'progress', 'tracks', 'volume', 'fullscreen'],
	startLangauge: 'en'
});


function captionListener () {

	const p = document.getElementsByTagName('p');
	const caption = document.querySelector('.caption');
	const span = document.querySelectorAll('p span');
	const t_start = document.querySelectorAll('[data-start]');
	const t_end = document.querySelectorAll('[data-end]');
	const video = document.querySelector('video');
	let trackTime;

	console.log(span[0].dataset);
	video.addEventListener('timeupdate', function() {
		//console.log (span[0].dataset.start);
		
		let timeStamp   = video.currentTime;

		for (let i = 0; i <= span.length; i++ ) {

			console.log(span[i].dataset);
		
		}

	}); 





}

captionListener();
