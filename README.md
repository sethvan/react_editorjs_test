## Wetting Feet with REACT and Editor.js

This little project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and
it was my first attempt to get to know and incorporate [Editor.js](https://github.com/codex-team/editor.js).

In anticipation of my first MERN project ( a website for a local Baptist Church in San Blas, Nay Mexico ) I desired
to implement a basic CMS for the admin ( the pastor ) and I here tested an editable Editor.js instance as a UI and
the lazy use of a read only Editor.js instance as a renderer for the admin's content.

The documentation for [React-Editor-Js](https://www.npmjs.com/package/react-editor-js) was very helpful and useful for
me in doing this. However I chose against actually integrating its module as it seemed easier to just use some of its
ideas than to learn all of it's particular way of doing things.

## Editor.js Tools Chosen for Demonstration

Available to use in the editable component's editor :

### `Header`

the [Header Tool](https://github.com/editor-js/header#heading-tool) provides Headings Blocks for the Editor.js.

### `Embed`

the [Embed Tool](https://github.com/editor-js/embed) provides Block tool for embedded content for the Editor.js. Tool uses Editor.js pasted patterns handling and inserts iframe with embedded content.

### `SimpleImage`

the [Simple Image Tool](https://github.com/editor-js/simple-image) provides Image Blocks for the Editor.js. Works only with pasted image URLs and requires no server-side uploader.

### `List`

the [List Tool](https://github.com/editor-js/list) allows you to add ordered or unordered (bulleted) lists to your article.

### `CheckList`

the [CheckList Tool](https://github.com/editor-js/checklist) allows you to add checklists to your texts.
