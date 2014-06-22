(function() {
	var videotest = angular.module('videoPlayer', []);
	
	app.controller('VideoController', function() {
    this.videos = videoitems;
 	});
	
	var videoitems = [{
		name: 'Dianna Video',
		url: '',
		imagethumb: '',
		imagefull: '',
		}, {
		name: 'ACU Test',
		url: '',
		imagethumb: '',
		imagefull: '',
		}];
		

})();