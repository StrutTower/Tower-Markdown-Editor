(function () {
    'use strict';

    angular
        .module('app', [
            'ngSanitize',
            'twr-markdown-editor'
        ])
        .controller('demoController', demoController);

    demoController.$inject = ['$scope'];

    function demoController($scope) {
        var vm = this;
        vm.content = '# H1 Heading\n## H2 Heading\n### H3 Heading\n#### H4 Heading\n##### H5 Heading\n###### H6 Heading\n\n' +
            'This is a paragraph\n\n> This is a block quote\n>\n> This is another line of the quote\n\n' +
            '*This text will be italic*\n\n**This text will be bold**\n\n**Bold and _italic_ example**\n\n' +
            'a ~~Strikethrough~~ element\n\n' +
            '* unordered list item 1\n* list item 2\n  * nested list\n  * item 2\n- list item 3\n\n' +
            '1. ordered list item 1\n 1. Nested Ordered List\n2. list item 2\n   * Nested Unordered List\n3. list item 3\n\n' +
            'Inline `code` example\n\n    this is a code block\n    this must be indented 4 spaces\n\n' +
            "```\nThis is also a code block\nThis doesn't require 4 spaces at the start of each line\n```\n\n" +
            'Link to <https://github.com/StrutTower>\n\nLink to [GitHub](https://github.com/)\n\n' +
            '![Alt Text](https://avatars1.githubusercontent.com/u/12668790?v=3&s=460 \"Optional Title\")\n\n\n' +
            '| Tables |   are   |  cool |\n|:-------|:-------:|------:|\n| stuff  | stuff   | stuff |\n| stuff  | stuff   | stuff |';

        vm.showdownOptions = {
            strikethrough: true,
            tables: true
        }

        var converter = new showdown.Converter(vm.showdownOptions);

        var div = document.getElementById('markdown-output');

        $scope.$watch('vm.content', function (newVal) {
            var html = converter.makeHtml(vm.content);
            div.innerHTML = html;
        });
    }
})();