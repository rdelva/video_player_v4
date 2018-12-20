
$('video').mediaelementplayer({
	features: ['playpause', 'progress', 'tracks', 'volume', 'fullscreen'],
	startLangauge: 'en'
});


function captionListener () {

	const p = document.getElementsByTagName('p');
	const caption = document.querySelector('.caption');
	const spanText = document.querySelectorAll('p  span');
	
	const video = document.querySelector('video');
	let trackTime;
	let t_start;
	let t_end;
	let timeStamp;
	let prevSpan

	video.addEventListener('timeupdate', function(e) {
		
		timeStamp = video.currentTime;

		for (let i = 0; i < spanText.length; i++ ) {
				console.log("Counter " + i);
				t_start = spanText[i].dataset.start;
				t_end = spanText[i].dataset.end;

			if (timeStamp >=  t_start && timeStamp <= t_end) {

				spanText[i].setAttribute("class", "highlight");
				
				if (i < spanText.length || i === spanText.length) {
					
					prevSpan = spanText[i].previousElementSibling;
					if  (prevSpan !== null) {
						prevSpan.removeAttribute('class');
					}	
				}

				
			}

		
		}

	}); 





}

captionListener();
