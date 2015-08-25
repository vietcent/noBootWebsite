// Vincent Nguyen
// carousel.js


angular.module('website', ['ngAnimate'])
	.controller('MainCtrl', function ($scope) {
		$scope.slides = [
			{ image: '../images/promotionGirl.png', description: 'Image 00' },
			{ image: '../images/twitter.png', description: 'Image 01' },
			{ image: '../images/youtube.png', description: 'Image 02' }
		];
		
		$scope.currentIndex = 0;
		
		$scope.setCurrentSlideIndex = function (index) {
			$scope.currentIndex = index;
		};
		
		$scope.isCurrentSlideIndex = function (index) { 
			return $scope.currentIndex === index;
		};
		
		$scope.prevSlide = function () { 
			$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
		};
		
		$scope.nextSlide = function () { 
			$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
		};
	});