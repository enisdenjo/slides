# Slides

Guidelines for developing slides in this repository.

## Style

- Keep slides ultra minimal. The speaker carries the content, not the slides.
- Do not apply CSS classes to elements. Ever.
- Do not write inline styles, except on the cover `<h1>` where font size and margin-top adjustments are acceptable.
- Do not use `v-click` or any other click animations.
- Do not use custom Vue components unless they already exist in the project (e.g. `QRCode`).
- Do not use `<div>` wrappers or any HTML layout tricks to arrange content.

## Content

- Use plain markdown: headings, bullet lists, bold, inline code, fenced code blocks, tables.
- Use mermaid diagrams for architecture and flow visuals.

## Presenter Notes

- Notes are exactly what the presenter will talk during the slide.
- Every slide must have presenter notes in an HTML comment at the bottom.
- Every single slide must have notes.
- Written as a bullet list of short sentences, one thought per line.
- Each bullet is exactly one sentence.
- Never combine two thoughts into one bullet.
- Never write a paragraph.

## Layouts

- Use the built-in Slidev layouts and the hive theme layouts only.
- Available hive theme layouts: `cover`, `center`, `fact`, `intro`, `quote`, `section`, `statement`.
- Use `section` to introduce major topic changes.
- Use `statement` for a single impactful sentence the audience should remember.
- Use `fact` for a single large number or statistic.
- Use `two-cols-header` for side-by-side comparisons.

## Headmatter

- Always use `transition: none`.
- Always start with `layout: cover`.

## Cover Slide

The cover `<h1>` is the only place where inline styles are used:

```md
<h1 style="margin-top: 200px; font-size: 2.6rem; line-height: 1.2">
Title Here
</h1>
```
