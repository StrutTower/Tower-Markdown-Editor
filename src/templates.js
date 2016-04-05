angular.module("twr-markdown-editor").run(["$templateCache", function($templateCache) {$templateCache.put("twrMarkdownEditor.html","<div class=\"twr-markdown-editor\">\r\n    <div class=\"twr-toolbar\">\r\n        <button type=\"button\" data-ng-click=\"showCheatSheet()\">Cheat Sheet</button>\r\n        <button type=\"button\" data-ng-click=\"showPreview()\" data-ng-hide=\"hidePreviewButton\">Preview</button>\r\n        <button type=\"button\" data-ng-click=\"fullscreen()\">{{fullscreenLabel}}</button>\r\n    </div>\r\n\r\n    <textarea data-ng-model=\"content\"></textarea>\r\n\r\n\r\n    <div class=\"twr-preview\" data-ng-if=\"previewOpen\">\r\n        <div class=\"twr-toolbar\">\r\n            <button type=\"button\" data-ng-click=\"closePreview()\">Close Preview</button>\r\n        </div>\r\n        <div data-ng-bind-html=\"previewHtml\" class=\"markdown twr-preview-content\"></div>\r\n    </div>\r\n\r\n\r\n    <div class=\"twr-cheat-sheet\" data-ng-if=\"cheatSheetOpen\">\r\n        <div class=\"twr-toolbar\">\r\n            <button type=\"button\" data-ng-click=\"closeCheatSheet()\">Close Cheat Sheet</button>\r\n        </div>\r\n        <div class=\"twr-cheat-sheet-content\">\r\n            <h4>Headings</h4>\r\n            <p>\r\n                <div># This is a h1 heading</div>\r\n                <div>## This is a h2 heading</div>\r\n                <div>### This is a h3 heading</div>\r\n                <div>#### This is a h4 heading</div>\r\n                <div>##### This is a h5 heading</div>\r\n                <div>###### This is a h6 heading</div>\r\n            </p>\r\n\r\n            <hr />\r\n\r\n            <h4>Font Styles</h4>\r\n            <p>\r\n                <div>* This is italic text *</div>\r\n                <div>** This is bold text **</div>\r\n                <div>** This is bold and _italic_ text **</div>\r\n                <div>This a ~~strikethrough~~ element - <i>This element is disabled by default</i></div>\r\n            </p>\r\n\r\n            <hr />\r\n\r\n            <h4>Lists</h4>\r\n            <p>\r\n                <div>* Unordered List Item 1</div>\r\n                <div>* Unordered List Item 2</div>\r\n                <div>&nbsp;&nbsp;* Unordered Sublist Item 1</div>\r\n                <div>&nbsp;&nbsp;* Unordered Sublist Item 2</div>\r\n                <div>* Unordered List Item 3</div>\r\n            </p>\r\n            <p>\r\n                <div>1. Ordered List Item 1</div>\r\n                <div>2. Ordered List Item 2</div>\r\n                <div>3. Ordered List Item 3</div>\r\n            </p>\r\n\r\n            <hr />\r\n\r\n            <h4>Code</h4>\r\n            <p>\r\n                Inline `code` using single backticks\r\n            </p>\r\n            <p>\r\n                <div>```</div>\r\n                <div>Code block</div>\r\n                <div>Second line of a code block</div>\r\n                <div>```</div>\r\n            </p>\r\n            <p>\r\n                <div>```c-sharp</div>\r\n                <div>Adding text right after the backticks add a class to the code block for PrismJS highlighting</div>\r\n                <div>```</div>\r\n            </p>\r\n\r\n            <hr />\r\n\r\n            <h4>Blockquote</h4>\r\n            <p>\r\n                <div>> This is a blockquote</div>\r\n                <div>></div>\r\n                <div>> This is the second line of a blockqoute</div>\r\n            </p>\r\n\r\n            <hr />\r\n\r\n        </div>\r\n    </div>\r\n</div>");}]);