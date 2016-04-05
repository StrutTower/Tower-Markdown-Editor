(function () {
    'use strict';

    angular
        .module('twr-markdown-editor', [])
        .directive('twrMarkdownEditor', twrMarkdownEditor);

    twrMarkdownEditor.$inject = ['$parse'];

    function twrMarkdownEditor($parse) {
        return {
            restrict: 'AE',
            require: 'ngModel',
            replace: true,
            scope: {
                ngModel: '=',
                showdownOptions: '='
            },
            templateUrl: '../src/twrMarkdownEditor.html',
            link: function (scope, element, attrs, ngModel) {
                scope.fullscreenLabel = 'Full Screen';
                scope.fullscreen = fullscreen;
                scope.showPreview = showPreview;
                scope.closePreview = closePreview;
                scope.showCheatSheet = showCheatSheet;
                scope.closeCheatSheet = closeCheatSheet;

                scope.content = scope.ngModel;
                scope.$watch('content', function (newVal) {
                    scope.$evalAsync(function () {
                        scope.ngModel = newVal;
                    });
                });

                //#region Check for ShowdownJS
                //Disables previewing if ShowdownJS is not found
                var converter;
                try {
                    if (scope.showdownOptions) {
                        converter = new showdown.Converter(scope.showdownOptions);
                    }
                    else {
                        converter = new showdown.Converter();
                    }
                }
                catch (err) {
                    console.log('ShowdownJS not found.');
                    scope.hidePreviewButton = true;
                }
                //#endregion

                //#region Functions
                var isFullscreen = false;
                function fullscreen() {
                    if (element.hasClass('twr-fullscreen')) {
                        isFullscreen = false;
                        scope.fullscreenLabel = 'Full Screen';
                        element.removeClass('twr-fullscreen');
                        angular.element(document.body).removeClass('twr-markdown-editor-no-scroll');
                    }
                    else {
                        isFullscreen = true;
                        scope.fullscreenLabel = 'Normal View';
                        element.addClass('twr-fullscreen');
                        angular.element(document.body).addClass('twr-markdown-editor-no-scroll');
                    }
                }


                function showPreview() {
                    scope.previewHtml = converter.makeHtml(scope.content);
                    scope.previewOpen = true;

                    if (isFullscreen) {
                        element.removeClass('twr-fullscreen');
                    }
                    else {
                        angular.element(document.body).addClass('twr-markdown-editor-no-scroll');
                    }
                }

                function closePreview() {
                    scope.previewOpen = false;

                    if (isFullscreen) {
                        element.addClass('twr-fullscreen');
                    }
                    else {
                        angular.element(document.body).removeClass('twr-markdown-editor-no-scroll');
                    }
                }

                function showCheatSheet() {
                    scope.cheatSheetOpen = true;

                    if (isFullscreen) {
                        element.removeClass('twr-fullscreen');
                    }
                    else {
                        angular.element(document.body).addClass('twr-markdown-editor-no-scroll');
                    }
                }

                function closeCheatSheet() {
                    scope.cheatSheetOpen = false;

                    if (isFullscreen) {
                        element.addClass('twr-fullscreen');
                    }
                    else {
                        angular.element(document.body).removeClass('twr-markdown-editor-no-scroll');
                    }
                }
                //#endregion
            }
        };
    }
})();
