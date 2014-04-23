/// <reference path="../../Scripts/_references.js" />

var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', ['$scope', 'angelloHelper', 'angelloModel',
	function ($scope, angelloHelper, angelloModel) {

	    $scope.currentStory;

	    $scope.types = angelloModel.getTypes();
	    $scope.statuses = angelloModel.getStatuses();
	    $scope.stories = angelloModel.getStories();
	    $scope.typesIndex = angelloHelper.buildIndex($scope.types, 'name');
	    $scope.statusesIndex = angelloHelper.buildIndex($scope.statuses, 'name');

	    $scope.setCurrentStory = function (story) {
	        $scope.currentStory = story;
	        $scope.currentStatus = $scope.statusesIndex[story.status];
	        $scope.currentType = $scope.typesIndex[story.type];
	    };

	    $scope.setCurrentStatus = function (status) {
	        if (typeof $scope.currentStatus !== "undefined") {
	            $scope.currentStory.status = status.name;
	        }
	    };

	    $scope.setCurrentType = function (type) {
	        if (typeof $scope.currentType !== "undefined") {
	            $scope.currentStory.type = type.name;
	        }
	    };

	    $scope.createStory = function () {
	        $scope.stories.push({
	            title: 'Edit me!',
	            description: 'asd',
	            criteria: 'asdfasdf',
	            status: 'Back Log',
	            type: 'feature',
	            reporter: 'pending',
	            assigner: 'pending'
	        });
	    }
	}
]);

myModule.factory('angelloHelper', function () {
    var buildIndex = function (source, property) {
        var tempArray = [];
        for (var i = 0, len = source.length; i < len; ++i) {
            tempArray[source[i][property]] = source[i];
        }
        return tempArray;
    };
    return {
        buildIndex: buildIndex
    };
});

myModule.factory('angelloModel', function () {
    var getStatuses = function () {
        var tempArray = [
        { name: 'Back Log' },
        { name: 'To Do' },
        { name: 'In Progress' },
        { name: 'Code Review' },
        { name: 'QA Review' },
        { name: 'Verified' },
        { name: 'Done' }
        ];
        return tempArray;
    };
    var getTypes = function () {
        var tempArray = [
        { name: 'Feature' },
        { name: 'Enhancement' },
        { name: 'Bug' },
        { name: 'Spike' }
        ];
        return tempArray;
    };
    var getStories = function () {
        var tempArray = [
        {
            title: 'Jumbotron Padding',
            description: 'Description pending.',
            criteria: 'Criteria pending.',
            status: 'To Do',
            type: 'Feature',
            reporter: 'jtraver',
            assignee: 'jtraver'
        },

        {
            title: 'Inputs not skinned',
            description: 'Description pending.',
            criteria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'jtraver',
            assignee: 'jtraver'
        },

        {
            title: 'Stuff',
            description: 'Description pending.',
            criteria: 'Criteria pending.',
            status: 'Code Review',
            type: 'Enhancement',
            reporter: 'jtraver',
            assignee: 'jtraver'
        },

        {
            title: 'Something else',
            description: 'Description pending.',
            criteria: 'Criteria pending.',
            status: 'Done',
            type: 'Enhancement',
            reporter: 'jtraver',
            assignee: 'jtraver'
        },
        {
            title: 'idek',
            description: 'Description pending.',
            criteria: 'Criteria pending.',
            status: 'Verified',
            type: 'Bug',
            reporter: 'jtraver',
            assignee: 'jtraver'
        },

        {
            title: 'kittens',
            description: 'Description pending.',
            criteria: 'Criteria pending.',
            status: 'To Do',
            type: 'Spike',
            reporter: 'jtraver',
            assignee: 'jtraver'
        }
        ];
        return tempArray;
    };
    return {
        getStatuses: getStatuses,
        getTypes: getTypes,
        getStories: getStories
    };
});
