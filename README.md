## Wetting One's Feet with REACT and Editor.js

This little project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and
it was my first attempt to get to know and incorporate [Editor.js](https://github.com/codex-team/editor.js).

In anticipation of my first MERN project ( a website for a local Baptist Church in San Blas, Nay Mexico ) I desired
to implement a basic CMS for the admin ( the pastor ) and I here tested an editable Editor.js instance as a UI and
the lazy use of a read only Editor.js instance as a renderer for the admin's content.

The documentation for [React-Editor-Js](https://www.npmjs.com/package/react-editor-js) was very helpful and useful for
me in doing this. However I chose against actually integrating its module as it seemed easier to just use some of its
ideas than to learn all of it's particular way of doing things.

Out of the several Editor.js tools available I only chose to use here the one's I foresaw as most often being needed.
I have only recently finished Rob Bunch's REACT Course on Udemy, so `Router 5` was used. I also used `redux-persist` so the
data you put into the editor will persist.

## Editor.js Tools Chosen for Demonstration

Available to use in the editable component's editor :

### `Header`

The [Header Tool](https://github.com/editor-js/header#heading-tool) provides Headings Blocks for the Editor.js.

### `Embed`

The [Embed Tool](https://github.com/editor-js/embed) provides Block tool for embedded content for the Editor.js. Tool uses
Editor.js pasted patterns handling and inserts iframe with embedded content. To use all you have to do is paste the URL
into the block. So far only have been able to make YouTube work but that's pretty cool.

### `SimpleImage`

The [Simple Image Tool](https://github.com/editor-js/simple-image) provides Image Blocks for the Editor.js. Works only with
pasted image URLs and requires no server-side uploader. As with the Embed tool all you have to do is paste the URL into the
block. However I had to open a `flickr` account as it is yet unclear to me as to why some image links work in comparison
to others that do not (which is most that I have tried).

### `List`

The [List Tool](https://github.com/editor-js/list) allows you to add ordered or unordered (bulleted) lists to your article.

### `CheckList`

The [CheckList Tool](https://github.com/editor-js/checklist) allows you to add checklists to your texts.

#### As well:

- Blocks default to a text block (paragraph).
- If you highlight text it gives you the option to make Bold, Italic or add HyperLink.
