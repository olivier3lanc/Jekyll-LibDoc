---
title: Markdown
description: Page example for Github Flavoured Markdown
layout: libdoc/page

#LibDoc specific below
category: Features
order: 100
#unlisted: true
---
* 
{:toc}

## Table of Content support

LibDoc supports [automatically generated kramdown TOC](https://kramdown.gettalong.org/converter/html.html#toc) styling the table of content onto a right sidebar as follows. Just add the following code at the beginning of your markdown file to automatically generate a TOC - Table Of Content. 

```markdown
* 
{:toc}
```

## No TOC support

Want to remove a title from the table of content? Just add `{:.no_toc}` after the element as follows:

```markdown
# Heading not to be seen into the TOC
{:.no_toc}
```

# The largest heading
{:.no_toc}
## The second largest heading
{:.no_toc}
###### The smallest heading
{:.no_toc}


```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

## Paragraphs and Line Breaks

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like a
blank line -- a line containing nothing but spaces or tabs is considered
blank.) Normal paragraphs should not be indented with spaces or tabs.

The implication of the "one or more consecutive lines of text" rule is
that Markdown supports "hard-wrapped" text paragraphs. This differs
significantly from most other text-to-HTML formatters (including Movable
Type's "Convert Line Breaks" option) which translate every line break
character in a paragraph into a `<br />` tag.

When you *do* want to insert a `<br />` break tag using Markdown, you
end a line with two or more spaces, then type return.

```markdown
A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like a
blank line -- a line containing nothing but spaces or tabs is considered
blank.) Normal paragraphs should not be indented with spaces or tabs.

The implication of the "one or more consecutive lines of text" rule is
that Markdown supports "hard-wrapped" text paragraphs. This differs
significantly from most other text-to-HTML formatters (including Movable
Type's "Convert Line Breaks" option) which translate every line break
character in a paragraph into a `<br />` tag.

When you *do* want to insert a `<br />` break tag using Markdown, you
end a line with two or more spaces, then type return.
```

## Styling text

You can indicate emphasis with bold, italic, or strikethrough text.

**This is bold text**

*This text is italicized*

~~This was mistaken text~~

**This text is _extremely_ important**

***All this text is important***

```markdown
**This is bold text**

*This text is italicized*

~~This was mistaken text~~

**This text is _extremely_ important**

***All this text is important***
```

## Links

Markdown supports two style of links: *inline* and *reference*.

In both styles, the link text is delimited by [square brackets].

To create an inline link, use a set of regular parentheses immediately
after the link text's closing square bracket. Inside the parentheses,
put the URL where you want the link to point, along with an *optional*
title for the link, surrounded in quotes. For example:

This is [an example of local link](libdoc-markdown.html) inline link.

[Local link](libdoc-markdown.html) has no title attribute.

This is [an example of outgoing link](https://jekyllrb.com) inline link.

[Outgoing link](https://jekyllrb.com) has no title attribute.

```markdown
This is [an example of local link](libdoc-markdown.html) inline link.

[Local link](libdoc-markdown.html) has no title attribute.

This is [an example of outgoing link](https://jekyllrb.com) inline link.

[Outgoing link](https://jekyllrb.com) has no title attribute.
```
### Backward link

Defining a reference link:

[link]: https://wikipedia.org "Title of the backward link"

Then we reference [the backward link][link].

```markdown
Defining a reference link:

[link]: https://wikipedia.org "Title of the backward link"

Then we reference [the forward link][link].
```

### Forward link

Use a [forward link][forwardlink], then define it.

Unlike backward link, the link definition doesn't contain a title.

[forwardlink]: https://jekyllrb.com

```markdown
Use a [forward link][forwardlink], then define it.

Unlike backward link, the link definition doesn't contain a title.

[forwardlink]: https://jekyllrb.com
```

## Blockquotes

Markdown uses email-style `>` characters for blockquoting. If you're
familiar with quoting passages of text in an email message, then you
know how to create a blockquote in Markdown. It looks best if you hard
wrap the text and put a `>` before every line:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.
```

Markdown allows you to be lazy and only put the `>` before the first
line of a hard-wrapped paragraph:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

```markdown
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
```

Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by
adding additional levels of `>`:

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

```markdown
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
```

## Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

Unordered lists use asterisks, pluses, and hyphens -- interchangably
-- as list markers:

* Red
* Green
* Blue

is equivalent to:

+ Red
+ Green
+ Blue

and:

- Red
- Green
- Blue

```markdown
* Red
* Green
* Blue

is equivalent to:

+ Red
+ Green
+ Blue

and:

- Red
- Green
- Blue
```

Ordered lists use numbers followed by periods:

1.  Bird
2.  McHale
3.  Parish

It's important to note that the actual numbers you use to mark the
list have no effect on the HTML output Markdown produces. The HTML
Markdown produces from the above list is:

If you instead wrote the list in Markdown like this:

1.  Bird
1.  McHale
1.  Parish

or even:

3. Bird
1. McHale
8. Parish

```markdown
1.  Bird
2.  McHale
3.  Parish

It's important to note that the actual numbers you use to mark the
list have no effect on the HTML output Markdown produces. The HTML
Markdown produces from the above list is:

If you instead wrote the list in Markdown like this:

1.  Bird
1.  McHale
1.  Parish

or even:

3. Bird
1. McHale
8. Parish
```
you'd get the exact same HTML output. The point is, if you want to,
you can use ordinal numbers in your ordered Markdown lists, so that
the numbers in your source match the numbers in your published HTML.
But if you want to be lazy, you don't have to.

To make lists look nice, you can wrap items with hanging indents:

*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

But if you want to be lazy, you don't have to:

*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.

```markdown
*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

But if you want to be lazy, you don't have to:

*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.
```

List items may consist of multiple paragraphs. Each subsequent
paragraph in a list item must be indented by either 4 spaces
or one tab:

1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.

```markdown
1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.
```

It looks nice if you indent every line of the subsequent
paragraphs, but here again, Markdown will allow you to be
lazy:

*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.

To put a blockquote within a list item, the blockquote's `>`
delimiters need to be indented:

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.

To put a code block within a list item, the code block needs
to be indented *twice* -- 8 spaces or two tabs:

*   A list item with a code block:

        <code goes here>

```markdown
*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.

To put a blockquote within a list item, the blockquote's `>`
delimiters need to be indented:

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.

To put a code block within a list item, the code block needs
to be indented *twice* -- 8 spaces or two tabs:

*   A list item with a code block:

        <code goes here>

```

## Code Blocks

LibDoc uses [PrismJS](https://prismjs.com) to syntax highlight code blocks. Prism js configuration can be set in the [config file](libdoc-config.html#prism)

```markdown
    ```name_of_the_language
        <code goes here>
    ```
```

Example for HTML

```html
    <h1>A title</h1>
    <p>A paragraph</p>
```
```markdown
    ```html
        <h1>A title</h1>
        <p>A paragraph</p>
    ```
```

Example for SCSS

```scss
code {
    background-color: my-color(primary-edge);
    padding-right: my-spacing(xxs);
    letter-spacing: -0.015em;
    font-family: my-font-family('monospace');
    &:not([class]) {
        padding-left: my-spacing(xxs);
        padding-right: my-spacing(xxs);
        font-size: my-font-size(sm);
        position: relative;
        background-color: my-color(primary);
        color: my-color(primary-max);
        &::after,
        &::before {
            content: '';
            position: absolute;
            display: block;
            width: 100%;
            height: 4px;
            top: -4px;
            left: 0;
            background-color: my-color(primary);
            border-radius: 5px 5px 0px 0px;
        }
        &::before {
            top: 100%;
            border-radius: 0px 0px 5px 5px;
        }
    }
}
```
```markdown
    ```scss
    code {
        background-color: my-color(primary-edge);
        padding-right: my-spacing(xxs);
        letter-spacing: -0.015em;
        font-family: my-font-family('monospace');
        &:not([class]) {
            padding-left: my-spacing(xxs);
            padding-right: my-spacing(xxs);
            font-size: my-font-size(sm);
            position: relative;
            background-color: my-color(primary);
            color: my-color(primary-max);
            &::after,
            &::before {
                content: '';
                position: absolute;
                display: block;
                width: 100%;
                height: 4px;
                top: -4px;
                left: 0;
                background-color: my-color(primary);
                border-radius: 5px 5px 0px 0px;
            }
            &::before {
                top: 100%;
                border-radius: 0px 0px 5px 5px;
            }
        }
    }
    ```
```

Example for Javascript

```javascript
    // RESPONSIVE TABLES
    document.querySelectorAll('main table').forEach(function(el_table) {
        el_table.querySelectorAll('th').forEach(function(el_th, index_th) {
            const nth_child = index_th + 1;
            const title = el_th.innerText;
            el_table.querySelectorAll('tbody tr td:nth-child('+nth_child+')').forEach(function(el_td) {
                el_td.setAttribute('data-title', title);
            });
        });
    });
```
```markdown
    ```javascript
        // RESPONSIVE TABLES
        document.querySelectorAll('main table').forEach(function(el_table) {
            el_table.querySelectorAll('th').forEach(function(el_th, index_th) {
                const nth_child = index_th + 1;
                const title = el_th.innerText;
                el_table.querySelectorAll('tbody tr td:nth-child('+nth_child+')').forEach(function(el_td) {
                    el_td.setAttribute('data-title', title);
                });
            });
        });
    ```
```

## Task lists

To create a task list, preface list items with a regular space character followed by [ ]. To mark a task as complete, use [x].

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [ ] \(Optional) Open a followup issue

```markdown
    - [x] Finish my changes
    - [ ] Push my commits to GitHub
    - [ ] Open a pull request
    - [ ] \(Optional) Open a followup issue
```

## Images and media

![Alt text](assets/libdoc/img/150x150.webp) This is a text next to an image that is not as large as the page width.

![Alt text](assets/libdoc/img/850x150.webp) This is a text next to an image that is at least as large as the page width.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iWowJBRMtpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```markdown
![Alt text](assets/libdoc/img/150x150.webp) This is a text next to an image that is not as large as the page width.

![Alt text](assets/libdoc/img/850x150.webp) This is a text next to an image that is at least as large as the page width.

<iframe width="560" height="315" src="https://www.youtube.com/embed/iWowJBRMtpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

```

## Ignoring Markdown formatting

You can tell GitHub to ignore (or escape) Markdown formatting by using \ before the Markdown character.

Let's rename \*our-new-project\* to \*our-old-project\*.

```markdown
    Let's rename \*our-new-project\* to \*our-old-project\*.
```

## Creating a table

You can create tables with pipes `|` and hyphens `-`. Hyphens are used to create each column's header, while pipes separate each column. You must include a blank line before your table in order for it to correctly render.

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

```markdown
    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |
```

The pipes on either end of the table are optional.

Cells can vary in width and do not need to be perfectly aligned within columns. There must be at least three hyphens in each column of the header row.

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

```markdown
    | Command | Description |
    | --- | --- |
    | git status | List all new or modified files |
    | git diff | Show file differences that haven't been staged |
```

## Formatting content within your table

You can use formatting such as links, inline code blocks, and text styling within your table:

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |

```markdown
    | Command | Description |
    | --- | --- |
    | `git status` | List all *new or modified* files |
    | `git diff` | Show file differences that **haven't been** staged |
```

You can align text to the left, right, or center of a column by including colons : to the left, right, or on both sides of the hyphens within the header row.

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

```markdown
    | Left-aligned | Center-aligned | Right-aligned |
    | :---         |     :---:      |          ---: |
    | git status   | git status     | git status    |
    | git diff     | git diff       | git diff      |
```

To include a pipe | as content within your cell, use a \ before the pipe:

| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |

```markdown
    | Name     | Character |
    | ---      | ---       |
    | Backtick | `         |
    | Pipe     | \|        |
```

## Cheatsheet

![Github Markdown cheatsheet](assets/libdoc/img/gfm-cheatsheet.webp)

Here is the official [Github Markdown cheatsheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf)