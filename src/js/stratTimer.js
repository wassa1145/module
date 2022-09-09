import { printTime } from './printResult.js';
import { Howl } from 'howler';

const stratTimer = (timeMinut) => {
	return setInterval(function () {
		let sec = timeMinut % 60;
		let min = timeMinut / 60 % 60;
		let hour = timeMinut / 60 / 60 % 60;
    
		const sound = new Howl({
			src: ['./audio/zvonok.mp3'],
			volume: 1,
			html5: true,
			format: ['mp3']
		});

		if (timeMinut < 3) {
			console.log(sound);
			sound.play();
		};
  
		if (timeMinut <= 0) {
			clearInterval(timer);
		} else {
			printTime(hour, min, sec);
		}
		--timeMinut;
	}, 1000);
};

export default stratTimer;
