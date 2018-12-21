
$('video').mediaelementplayer({
	features: ['playpause', 'progress', 'tracks', 'volume', 'fullscreen'],
	startLangauge: 'en'
});


function captionListener () {

	const p = document.getElementsByTagName('p');
	const caption = document.querySelector('.caption');
				const video = document.querySelector('video');
			const spanText = document.querySelectorAll('p > span');

	let trackTime;
	let t_start = 0;
	let t_end = 0;
	let timeStamp;
	let prevSpan

	

//click video to start counter
//
	video.addEventListener('timeupdate', function() {



		for (let i = 0; i <  spanText.length; i++ ) {


				timeStamp = video.currentTime;  
				console.log ("duration " + video.duration);
				console.log ("Counter " + i);

				t_start = spanText[i].dataset.start;
				t_end = spanText[i].dataset.end;

			if (timeStamp >=  t_start && timeStamp <= t_end) {
					console.log ("Counter " + i);
	
				spanText[i].setAttribute("class", "highlight");
				
				if (i < spanText.length || i === spanText.length) {
					
					prevSpan = spanText[i].previousElementSibling;
					if  (prevSpan !== null) {
						prevSpan.removeAttribute('class');
					}
					/*else if (prevSpan == spanText[i].lastElementChild )
					{
										spanText[i].setAttribute("class", "highlight");

					}	*/
				}

				
			}

		
		}

	}); 





}

captionListener();
