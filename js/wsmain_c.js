'use strict';

var wavesurfer_m;
var wavesurfer_d1;
var wavesurfer_d2;

document.addEventListener('DOMContentLoaded', function() {
    wavesurfer_m = WaveSurfer.create({
    container: document.querySelector('#diatonica'),
    splitChannels: true
	});
	
	wavesurfer_m.on('error', function(e) {
		console.warn(e);
	});

	// Load audio from URL
	wavesurfer_m.load('media/diatonica.mp3');
	wavesurfer_m.setVolume(0.7);

	// Play button
	const button_m = document.querySelector('[data-action="play"]');
	button_m.addEventListener('click', wavesurfer_m.playPause.bind(wavesurfer_m));
	
	wavesurfer_d1 = WaveSurfer.create({
    container: document.querySelector('#deriva1'),
    splitChannels: false
	});
	
	wavesurfer_d1.on('error', function(e) {
		console.warn(e);
	});

	// Load audio from URL
	wavesurfer_d1.load('media/deriva_1.wav');
	wavesurfer_d1.setVolume(0.7);

	// Play button
	const button_d1 = document.querySelector('[data-action="playd1"]');
	button_d1.addEventListener('click', wavesurfer_d1.playPause.bind(wavesurfer_d1));
	
	wavesurfer_d2 = WaveSurfer.create({
    container: document.querySelector('#deriva2'),
    splitChannels: false
	});
	
	wavesurfer_d2.on('error', function(e) {
		console.warn(e);
	});

	// Load audio from URL
	wavesurfer_d2.load('media/deriva_2.wav');
	wavesurfer_d2.setVolume(0.7);

	// Play button
	const button_d2 = document.querySelector('[data-action="playd2"]');
	button_d2.addEventListener('click', wavesurfer_d2.playPause.bind(wavesurfer_d2));
	
});
