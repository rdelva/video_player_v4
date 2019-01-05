
$('video').mediaelementplayer({
	useDefaultControls: true,
	stretching: 'responsive',
	startLangauge: 'en'
});


const video = document.querySelector('video');
const script = document.querySelectorAll('span');
const caption = document.querySelector('.caption');




video.addEventListener('play', () =>  {

	
		
	video.addEventListener ('timeupdate', () => {

		let track = video.currentTime;
	


		for (let i = 0; i < script.length; i++ ) {

			let start = script[i].getAttribute('data-start');
			let end =  script[i].getAttribute('data-end');


			if(track > start &&  track < end) {
				
				script[i].setAttribute('class', 'highlight');
				let prevTrack = script[i].previousElementSibling;
				
					if (prevTrack !== null) { // checks to see ifs not at the begining

						prevTrack.removeAttribute('class');

					}

					else {
						let highlight = document.querySelector('.highlight');
						let prevParagrah = highlight.parentNode;
						let lastLine = prevParagrah.lastElementChild;
						lastLine.removeAttribute('class');

					}

			} 

		}

	});	/* end of video addEventListener */



	caption.addEventListener('click', (event) => {
		let currentTrack;
		let trackSelected = "";

		if (trackSelected = ""){
				if(event.target.tagName == 'SPAN'){
				 currentTrack = event.target;
				currentTrack.setAttribute('class', 'highlight');
				video.currentTime = currentTrack.getAttribute('data-start');

			} 
		} else {

			for (let i = 0; i < script.length; i++){
				if (script[i].className == "highlight"){
					script[i].removeAttribute('class');
				}
				else {

					if(event.target.tagName == 'SPAN'){
						 currentTrack = event.target;
						currentTrack.setAttribute('class', 'highlight');
						video.currentTime = currentTrack.getAttribute('data-start');

					}

				}
			}
		}
		

	});	/* end of caption add Event Listener --*/

}); /* end of video add Event Listener --*/


