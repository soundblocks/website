'use strict';

var wavesurfer;

document.addEventListener('DOMContentLoaded', function() {
	wavesurfer = WaveSurfer.create({
		container: document.querySelector('#waveform'),
		//backend: 'MediaElement',
		//mediaControls: true
	});

	wavesurfer.on('error', function(e) {
		console.warn(e);
	});

	// Load audio from URL
	wavesurfer.load('media/unalata.wav');

	// Play button
	const button = document.querySelector('[data-action="play"]');
	button.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});
