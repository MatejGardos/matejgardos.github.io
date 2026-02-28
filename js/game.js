const canvas = document.getElementById('canvas');
const gameContainer = document.getElementById('gameContainer');
const originalWidth = 640;
const originalHeight = 480;

function scaleCanvas() {
	const windowRatio = window.innerWidth / window.innerHeight;
	const gameRatio = originalWidth / originalHeight;

	let width, height;

	if (windowRatio > gameRatio) {
		height = window.innerHeight;
		width = height * gameRatio;
	} else {
		// Window is taller → limit by width
		width = window.innerWidth;
		height = width / gameRatio;
	}

	canvas.style.width = width + 'px';
	canvas.style.height = height + 'px';
}

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		if (canvas.requestFullscreen) canvas.requestFullscreen();
		else if (canvas.webkitRequestFullscreen) canvas.webkitRequestFullscreen();
		else if (canvas.msRequestFullscreen) canvas.msRequestFullscreen();

		scaleCanvas();
		window.addEventListener('resize', scaleCanvas);
	} else {
		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		else if (document.msExitFullscreen) document.msExitFullscreen();
		
		window.removeEventListener('resize', scaleCanvas);
		gameContainer.style.width = originalWidth + 'px';
		gameContainer.style.height = originalHeight + 'px';
		canvas.style.width = '100%';
		canvas.style.height = '100%';
	}
}

document.addEventListener('fullscreenchange', () => {
	if (document.fullscreenElement) scaleCanvas();
	else {
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		container.style.width = originalWidth + 'px';
		container.style.height = originalHeight + 'px';
	}
});

let isMuted = false;

function toggleMute() {
	isMuted = !isMuted;

	// TODO

	document.querySelector('.mute-button').textContent = isMuted ? "Unmute" : "Mute";
}