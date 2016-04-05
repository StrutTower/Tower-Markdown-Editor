# Tower-Markdown-Editor


AngularJS directive that add UI options to preview Markdown output and fullscreen the textarea element. 
Also provides a cheat sheet to help with Markdown syntax.

[Live Demo](https://rawgit.com/StrutTower/Tower-Markdown-Editor/1.0.0/demo/index.html)


### Usage

```javascript
angular
    .module('appName', [
        'ngSanitize',
        'twr-markdown-editor'
    ]);
```

```html
<data-twr-markdown-editor data-ng-model="vm.markdownText" 
                          data-showdown-options="vm.showdownOptions">
</data-twr-markdown-editor>
```

Requires ngSanitize and an ngModel attribute

Optionally you can provide ShowdownJS options with the showdown-options attribute. 
This will be used when previewing the output.

If ShowdownJS is not found, previewing the HTML output will be disabled.