function VideoController($scope) {
    $scope.videos = [{
		name: 'Dianna Video',
		url: 'http://s3.amazonaws.com/ygtv_videotest/Dianna_Video.mp4',
		imagethumb: '',
		imagefull: 'http://s3.amazonaws.com/ygtv_videotest/jpg_test.jpg',
		author: ''
		}, {
		name: 'ACU Test',
		url: '',
		imagethumb: '',
		imagefull: '',
		author: ''
		}];
		
		$scope.doPlay = function(videourl) {
		$scope.videoPlaying = videourl;
		};
}
