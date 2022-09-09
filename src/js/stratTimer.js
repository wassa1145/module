import { printTime } from './printResult.js';
import { Howl } from 'howler';

import soundSrc from '../audio/zvonok.mp3';

const stratTimer = (timeMinut) => {
	return setInterval(function () {
		let sec = timeMinut % 60;
		let min = timeMinut / 60 % 60;
		let hour = timeMinut / 60 / 60 % 60;
    
		const sound = new Howl({
			src: [soundSrc],
		});

		if (timeMinut < 2) {
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
