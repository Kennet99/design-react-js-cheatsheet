import React, { useState, useEffect } from 'react'
import { SyntaxExample, CodeExample, ReferenceCode } from '../components/SyntaxHighlightedCode'
import { Plus, Minus, RotateCcw, Eye, EyeOff, BookOpen, Code, Palette, Zap, Database, Layers, Settings, Home, Users, FileText, Navigation, Paintbrush, Globe, Type, Sparkles } from 'lucide-react'

function HTMLCSS() {
  const [activeTab, setActiveTab] = useState('html')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState(new Set())
  const [allExpanded, setAllExpanded] = useState(false)

  const htmlElements = [
    {
      category: 'Document Structure',
      elements: [
        { tag: '<!DOCTYPE html>', description: 'Document type declaration', example: '<!DOCTYPE html>' },
        { tag: '<html>', description: 'Root element', example: '<html lang="en">' },
        { tag: '<head>', description: 'Document metadata', example: '<head><title>Page Title</title></head>' },
        { tag: '<title>', description: 'Page title', example: '<title>My Website</title>' },
        { tag: '<body>', description: 'Document body', example: '<body>Content here</body>' },
        { tag: '<meta>', description: 'Metadata', example: '<meta charset="UTF-8">' },
        { tag: '<link>', description: 'External resource link', example: '<link rel="stylesheet" href="style.css">' },
        { tag: '<script>', description: 'JavaScript code', example: '<script src="script.js"></script>' }
      ]
    },
    {
      category: 'Text Elements',
      elements: [
        { tag: '<h1> to <h6>', description: 'Headings', example: '<h1>Main Heading</h1>' },
        { tag: '<p>', description: 'Paragraph', example: '<p>This is a paragraph.</p>' },
        { tag: '<span>', description: 'Inline text', example: '<span>Inline text</span>' },
        { tag: '<div>', description: 'Block container', example: '<div>Block content</div>' },
        { tag: '<br>', description: 'Line break', example: 'Text<br>New line' },
        { tag: '<hr>', description: 'Horizontal rule', example: '<hr>' },
        { tag: '<strong>', description: 'Bold text', example: '<strong>Bold text</strong>' },
        { tag: '<em>', description: 'Italic text', example: '<em>Italic text</em>' },
        { tag: '<mark>', description: 'Highlighted text', example: '<mark>Highlighted</mark>' },
        { tag: '<small>', description: 'Small text', example: '<small>Small text</small>' },
        { tag: '<sub>', description: 'Subscript', example: 'H<sub>2</sub>O' },
        { tag: '<sup>', description: 'Superscript', example: 'x<sup>2</sup>' }
      ]
    },
    {
      category: 'Lists',
      elements: [
        { tag: '<ul>', description: 'Unordered list', example: '<ul><li>Item 1</li></ul>' },
        { tag: '<ol>', description: 'Ordered list', example: '<ol><li>Item 1</li></ol>' },
        { tag: '<li>', description: 'List item', example: '<li>List item</li>' },
        { tag: '<dl>', description: 'Description list', example: '<dl><dt>Term</dt><dd>Definition</dd></dl>' },
        { tag: '<dt>', description: 'Description term', example: '<dt>Term</dt>' },
        { tag: '<dd>', description: 'Description details', example: '<dd>Definition</dd>' }
      ]
    },
    {
      category: 'Links & Media',
      elements: [
        { tag: '<a>', description: 'Hyperlink', example: '<a href="https://example.com">Link</a>' },
        { tag: '<img>', description: 'Image', example: '<img src="image.jpg" alt="Description">' },
        { tag: '<video>', description: 'Video', example: '<video src="video.mp4" controls></video>' },
        { tag: '<audio>', description: 'Audio', example: '<audio src="audio.mp3" controls></audio>' },
        { tag: '<iframe>', description: 'Inline frame', example: '<iframe src="https://example.com"></iframe>' }
      ]
    },
    {
      category: 'Forms',
      elements: [
        { tag: '<form>', description: 'Form container', example: '<form action="/submit" method="post">' },
        { tag: '<input>', description: 'Input field', example: '<input type="text" name="username">' },
        { tag: '<label>', description: 'Form label', example: '<label for="username">Username:</label>' },
        { tag: '<textarea>', description: 'Multi-line input', example: '<textarea name="message"></textarea>' },
        { tag: '<select>', description: 'Dropdown', example: '<select><option>Option 1</option></select>' },
        { tag: '<option>', description: 'Dropdown option', example: '<option value="1">Option 1</option>' },
        { tag: '<button>', description: 'Button', example: '<button type="submit">Submit</button>' },
        { tag: '<fieldset>', description: 'Form group', example: '<fieldset><legend>Group</legend></fieldset>' },
        { tag: '<legend>', description: 'Fieldset title', example: '<legend>Form Group</legend>' }
      ]
    },
    {
      category: 'Tables',
      elements: [
        { tag: '<table>', description: 'Table container', example: '<table></table>' },
        { tag: '<thead>', description: 'Table header', example: '<thead><tr><th>Header</th></tr></thead>' },
        { tag: '<tbody>', description: 'Table body', example: '<tbody><tr><td>Data</td></tr></tbody>' },
        { tag: '<tfoot>', description: 'Table footer', example: '<tfoot><tr><td>Footer</td></tr></tfoot>' },
        { tag: '<tr>', description: 'Table row', example: '<tr><td>Cell</td></tr>' },
        { tag: '<th>', description: 'Header cell', example: '<th>Header Cell</th>' },
        { tag: '<td>', description: 'Data cell', example: '<td>Data Cell</td>' },
        { tag: '<caption>', description: 'Table caption', example: '<caption>Table Title</caption>' }
      ]
    },
    {
      category: 'Semantic Elements',
      elements: [
        { tag: '<header>', description: 'Page header', example: '<header>Header content</header>' },
        { tag: '<nav>', description: 'Navigation', example: '<nav>Navigation links</nav>' },
        { tag: '<main>', description: 'Main content', example: '<main>Main content</main>' },
        { tag: '<section>', description: 'Content section', example: '<section>Section content</section>' },
        { tag: '<article>', description: 'Article content', example: '<article>Article content</article>' },
        { tag: '<aside>', description: 'Sidebar content', example: '<aside>Sidebar content</aside>' },
        { tag: '<footer>', description: 'Page footer', example: '<footer>Footer content</footer>' },
        { tag: '<figure>', description: 'Figure container', example: '<figure><img src="image.jpg"><figcaption>Caption</figcaption></figure>' },
        { tag: '<figcaption>', description: 'Figure caption', example: '<figcaption>Image description</figcaption>' }
      ]
    }
  ]

  const cssProperties = [
    {
      category: 'Layout & Display',
      properties: [
        { property: 'display', values: 'block, inline, inline-block, flex, grid, none, table, table-cell, table-row, contents, flow-root, list-item, run-in, ruby, ruby-base, ruby-text, ruby-base-container, ruby-text-container', description: 'Element display type' },
        { property: 'position', values: 'static, relative, absolute, fixed, sticky', description: 'Positioning method (affects how element is positioned relative to parent)' },
        { property: 'top', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'Y-axis top position offset (distance from top of positioned parent)' },
        { property: 'right', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'X-axis right position offset (distance from right of positioned parent)' },
        { property: 'bottom', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'Y-axis bottom position offset (distance from bottom of positioned parent)' },
        { property: 'left', values: 'auto, 0, 10px, 50%, 100%, inherit, initial, unset', description: 'X-axis left position offset (distance from left of positioned parent)' },
        { property: 'float', values: 'left, right, none, inline-start, inline-end', description: 'Element floating' },
        { property: 'clear', values: 'left, right, both, none, inline-start, inline-end', description: 'Clear floating elements' },
        { property: 'z-index', values: 'auto, 0, 1, 999, -1, inherit, initial, unset', description: 'Stacking order' },
        { property: 'overflow', values: 'visible, hidden, scroll, auto, clip, overlay', description: 'Content overflow handling' },
        { property: 'overflow-x', values: 'visible, hidden, scroll, auto, clip', description: 'Horizontal overflow' },
        { property: 'overflow-y', values: 'visible, hidden, scroll, auto, clip', description: 'Vertical overflow' },
        { property: 'visibility', values: 'visible, hidden, collapse', description: 'Element visibility' },
        { property: 'clip', values: 'auto, rect(0, 0, 0, 0), inherit, initial, unset', description: 'Element clipping (deprecated)' },
        { property: 'clip-path', values: 'none, url(), inset(), circle(), ellipse(), polygon(), path()', description: 'Element clipping path' },
        { property: 'contain', values: 'none, strict, content, size, layout, style, paint', description: 'Containment' }
      ]
    },
    {
      category: 'Box Model',
      properties: [
        { property: 'width', values: 'auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset', description: 'Element width' },
        { property: 'height', values: 'auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset', description: 'Element height' },
        { property: 'min-width', values: 'auto, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset', description: 'Minimum width' },
        { property: 'max-width', values: 'none, 100px, 50%, 100vw, max-content, min-content, fit-content, inherit, initial, unset', description: 'Maximum width' },
        { property: 'min-height', values: 'auto, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset', description: 'Minimum height' },
        { property: 'max-height', values: 'none, 100px, 50%, 100vh, max-content, min-content, fit-content, inherit, initial, unset', description: 'Maximum height' },
        { property: 'margin', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'Margin shorthand (space outside element - affects spacing with siblings)' },
        { property: 'margin-top', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'Y-axis top margin (space above element)' },
        { property: 'margin-right', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'X-axis right margin (space to the right of element)' },
        { property: 'margin-bottom', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'Y-axis bottom margin (space below element)' },
        { property: 'margin-left', values: '0, 10px, 1em, auto, inherit, initial, unset', description: 'X-axis left margin (space to the left of element)' },
        { property: 'padding', values: '0, 10px, 1em, inherit, initial, unset', description: 'Padding shorthand (space inside element - affects content spacing)' },
        { property: 'padding-top', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis top padding (space inside top of element)' },
        { property: 'padding-right', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis right padding (space inside right of element)' },
        { property: 'padding-bottom', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis bottom padding (space inside bottom of element)' },
        { property: 'padding-left', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis left padding (space inside left of element)' },
        { property: 'border', values: '1px solid black, none, inherit, initial, unset', description: 'Border shorthand' },
        { property: 'border-width', values: 'thin, medium, thick, 1px, inherit, initial, unset', description: 'Border width' },
        { property: 'border-style', values: 'none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset', description: 'Border style' },
        { property: 'border-color', values: 'black, #000, rgb(0,0,0), currentColor, transparent, inherit, initial, unset', description: 'Border color' },
        { property: 'border-top', values: '1px solid black, inherit, initial, unset', description: 'Top border shorthand' },
        { property: 'border-right', values: '1px solid black, inherit, initial, unset', description: 'Right border shorthand' },
        { property: 'border-bottom', values: '1px solid black, inherit, initial, unset', description: 'Bottom border shorthand' },
        { property: 'border-left', values: '1px solid black, inherit, initial, unset', description: 'Left border shorthand' },
        { property: 'border-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Border radius' },
        { property: 'border-top-left-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Top-left border radius' },
        { property: 'border-top-right-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Top-right border radius' },
        { property: 'border-bottom-right-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Bottom-right border radius' },
        { property: 'border-bottom-left-radius', values: '0, 5px, 50%, inherit, initial, unset', description: 'Bottom-left border radius' },
        { property: 'box-sizing', values: 'content-box, border-box, inherit, initial, unset', description: 'Box model calculation' },
        { property: 'box-shadow', values: 'none, 2px 2px 5px rgba(0,0,0,0.3), inset 2px 2px 5px rgba(0,0,0,0.3), inherit, initial, unset', description: 'Box shadow' },
        { property: 'outline', values: 'none, 1px solid black, inherit, initial, unset', description: 'Outline shorthand' },
        { property: 'outline-width', values: 'thin, medium, thick, 1px, inherit, initial, unset', description: 'Outline width' },
        { property: 'outline-style', values: 'none, hidden, dotted, dashed, solid, double, groove, ridge, inset, outset, inherit, initial, unset', description: 'Outline style' },
        { property: 'outline-color', values: 'black, #000, rgb(0,0,0), invert, inherit, initial, unset', description: 'Outline color' },
        { property: 'outline-offset', values: '0, 5px, inherit, initial, unset', description: 'Outline offset' }
      ]
    },
    {
      category: 'Flexbox',
      properties: [
        { property: 'display: flex', values: 'flex, inline-flex', description: 'Flex container (parent element)' },
        { property: 'flex-direction', values: 'row, row-reverse, column, column-reverse, inherit, initial, unset', description: 'Flex direction (parent - determines x-axis vs y-axis)' },
        { property: 'flex-wrap', values: 'nowrap, wrap, wrap-reverse, inherit, initial, unset', description: 'Flex wrapping (parent - allows items to wrap to new lines)' },
        { property: 'flex-flow', values: 'row nowrap, column wrap, inherit, initial, unset', description: 'Flex direction and wrap shorthand (parent)' },
        { property: 'justify-content', values: 'flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right, inherit, initial, unset', description: 'X-axis alignment (parent - aligns items horizontally)' },
        { property: 'align-items', values: 'stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end, self-start, self-end, inherit, initial, unset', description: 'Y-axis alignment (parent - aligns items vertically)' },
        { property: 'align-content', values: 'flex-start, flex-end, center, space-between, space-around, space-evenly, stretch, start, end, baseline, first baseline, last baseline, inherit, initial, unset', description: 'Multi-line Y-axis alignment (parent - when items wrap)' },
        { property: 'align-self', values: 'auto, flex-start, flex-end, center, baseline, stretch, inherit, initial, unset', description: 'Individual item Y-axis alignment (child - overrides parent align-items)' },
        { property: 'flex-grow', values: '0, 1, 2, inherit, initial, unset', description: 'Growth factor (child - how much item can grow)' },
        { property: 'flex-shrink', values: '0, 1, 2, inherit, initial, unset', description: 'Shrink factor (child - how much item can shrink)' },
        { property: 'flex-basis', values: 'auto, 0, 100px, 50%, content, inherit, initial, unset', description: 'Initial size (child - starting size before growing/shrinking)' },
        { property: 'flex', values: '0 1 auto, 1, 1 0 100px, none, inherit, initial, unset', description: 'Flex shorthand (child - combines grow, shrink, basis)' },
        { property: 'order', values: '0, 1, -1, inherit, initial, unset', description: 'Flex item order (child - changes display order)' }
      ]
    },
    {
      category: 'Grid',
      properties: [
        { property: 'display: grid', values: 'grid, inline-grid, subgrid', description: 'Grid container (parent element)' },
        { property: 'grid-template-columns', values: 'none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset', description: 'X-axis column definitions (parent - defines column widths)' },
        { property: 'grid-template-rows', values: 'none, 1fr, 100px, repeat(3, 1fr), minmax(100px, 1fr), inherit, initial, unset', description: 'Y-axis row definitions (parent - defines row heights)' },
        { property: 'grid-template-areas', values: 'none, "header header" "sidebar main", inherit, initial, unset', description: 'Grid area definitions (parent - creates named areas)' },
        { property: 'grid-template', values: 'none, "header header" 100px / 1fr 1fr, inherit, initial, unset', description: 'Grid template shorthand (parent)' },
        { property: 'grid-column-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis column gaps (parent - deprecated, use column-gap)' },
        { property: 'grid-row-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis row gaps (parent - deprecated, use row-gap)' },
        { property: 'grid-gap', values: '0, 10px, 10px 20px, inherit, initial, unset', description: 'Grid gaps shorthand (parent - deprecated, use gap)' },
        { property: 'gap', values: '0, 10px, 10px 20px, inherit, initial, unset', description: 'Grid and flexbox gaps (parent - combines row-gap and column-gap)' },
        { property: 'row-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'Y-axis row gaps (parent)' },
        { property: 'column-gap', values: '0, 10px, 1em, inherit, initial, unset', description: 'X-axis column gaps (parent)' },
        { property: 'grid-column', values: 'auto, 1, 1 / 3, span 2, inherit, initial, unset', description: 'X-axis column placement (child - which columns item occupies)' },
        { property: 'grid-row', values: 'auto, 1, 1 / 3, span 2, inherit, initial, unset', description: 'Y-axis row placement (child - which rows item occupies)' },
        { property: 'grid-column-start', values: 'auto, 1, span 2, inherit, initial, unset', description: 'X-axis column start position (child)' },
        { property: 'grid-column-end', values: 'auto, 1, span 2, inherit, initial, unset', description: 'X-axis column end position (child)' },
        { property: 'grid-row-start', values: 'auto, 1, span 2, inherit, initial, unset', description: 'Y-axis row start position (child)' },
        { property: 'grid-row-end', values: 'auto, 1, span 2, inherit, initial, unset', description: 'Y-axis row end position (child)' },
        { property: 'grid-area', values: 'auto, 1, header, inherit, initial, unset', description: 'Grid area shorthand (child - combines row and column placement)' },
        { property: 'justify-items', values: 'start, end, center, stretch, inherit, initial, unset', description: 'X-axis item alignment (parent - aligns all items horizontally)' },
        { property: 'align-items', values: 'start, end, center, stretch, inherit, initial, unset', description: 'Y-axis item alignment (parent - aligns all items vertically)' },
        { property: 'justify-self', values: 'auto, start, end, center, stretch, inherit, initial, unset', description: 'Individual X-axis alignment (child - overrides parent justify-items)' },
        { property: 'align-self', values: 'auto, start, end, center, stretch, inherit, initial, unset', description: 'Individual Y-axis alignment (child - overrides parent align-items)' },
        { property: 'justify-content', values: 'start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset', description: 'X-axis content alignment (parent - when grid is smaller than container)' },
        { property: 'align-content', values: 'start, end, center, stretch, space-around, space-between, space-evenly, inherit, initial, unset', description: 'Y-axis content alignment (parent - when grid is smaller than container)' },
        { property: 'grid-auto-columns', values: 'auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset', description: 'Auto-generated X-axis column size (parent)' },
        { property: 'grid-auto-rows', values: 'auto, 100px, 1fr, minmax(100px, 1fr), inherit, initial, unset', description: 'Auto-generated Y-axis row size (parent)' },
        { property: 'grid-auto-flow', values: 'row, column, row dense, column dense, inherit, initial, unset', description: 'Auto-placement algorithm (parent - how items flow when not explicitly placed)' }
      ]
    },
    {
      category: 'Typography',
      properties: [
        { property: 'font-family', values: 'Arial, "Times New Roman", sans-serif, etc.', description: 'Font family' },
        { property: 'font-size', values: '16px, 1em, 1.2rem, 120%, etc.', description: 'Font size' },
        { property: 'font-weight', values: 'normal, bold, 100-900, etc.', description: 'Font weight' },
        { property: 'font-style', values: 'normal, italic, oblique', description: 'Font style' },
        { property: 'line-height', values: 'normal, 1.5, 24px, etc.', description: 'Line height' },
        { property: 'text-align', values: 'left, center, right, justify', description: 'Text alignment' },
        { property: 'text-decoration', values: 'none, underline, overline, line-through', description: 'Text decoration' },
        { property: 'text-transform', values: 'none, uppercase, lowercase, capitalize', description: 'Text transformation' },
        { property: 'letter-spacing', values: 'normal, 1px, 0.1em, etc.', description: 'Letter spacing' },
        { property: 'word-spacing', values: 'normal, 2px, 0.2em, etc.', description: 'Word spacing' },
        { property: 'white-space', values: 'normal, nowrap, pre, pre-wrap', description: 'White space handling' },
        { property: 'text-overflow', values: 'clip, ellipsis', description: 'Text overflow' }
      ]
    },
    {
      category: 'Colors & Backgrounds',
      properties: [
        { property: 'color', values: 'black, #000, rgb(0,0,0), rgba(0,0,0,0.5), etc.', description: 'Text color' },
        { property: 'background-color', values: 'white, #fff, rgb(255,255,255), etc.', description: 'Background color' },
        { property: 'background-image', values: 'url("image.jpg"), linear-gradient(), etc.', description: 'Background image' },
        { property: 'background-repeat', values: 'repeat, no-repeat, repeat-x, repeat-y', description: 'Background repeat' },
        { property: 'background-position', values: 'center, top left, 50% 50%, etc.', description: 'Background position' },
        { property: 'background-size', values: 'auto, cover, contain, 100px 200px', description: 'Background size' },
        { property: 'background-attachment', values: 'scroll, fixed, local', description: 'Background attachment' },
        { property: 'background', values: 'shorthand for all background properties', description: 'Background shorthand' },
        { property: 'opacity', values: '0, 0.5, 1, etc.', description: 'Element opacity' }
      ]
    },
    {
      category: 'Transforms & Animations',
      properties: [
        { property: 'transform', values: 'translate(), rotate(), scale(), skew(), etc.', description: 'Element transformation' },
        { property: 'transform-origin', values: 'center, top left, 50% 50%, etc.', description: 'Transform origin' },
        { property: 'transition', values: 'all 0.3s ease, width 0.5s linear, etc.', description: 'Transition shorthand' },
        { property: 'transition-property', values: 'all, width, height, color, etc.', description: 'Transition properties' },
        { property: 'transition-duration', values: '0s, 0.3s, 1s, etc.', description: 'Transition duration' },
        { property: 'transition-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out', description: 'Transition timing' },
        { property: 'animation', values: 'slideIn 1s ease-in-out, etc.', description: 'Animation shorthand' },
        { property: 'animation-name', values: 'slideIn, fadeOut, bounce, etc.', description: 'Animation name' },
        { property: 'animation-duration', values: '0s, 1s, 2.5s, etc.', description: 'Animation duration' },
        { property: 'animation-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out', description: 'Animation timing' },
        { property: 'animation-delay', values: '0s, 1s, -1s, etc.', description: 'Animation delay' },
        { property: 'animation-iteration-count', values: '1, infinite, 3, etc.', description: 'Animation iterations' },
        { property: 'animation-direction', values: 'normal, reverse, alternate, alternate-reverse', description: 'Animation direction' },
        { property: 'animation-fill-mode', values: 'none, forwards, backwards, both', description: 'Animation fill mode' }
      ]
    },
    {
      category: 'Responsive Design',
      properties: [
        { property: '@media', values: '@media (max-width: 768px) { }', description: 'Media queries' },
        { property: 'min-width', values: '320px, 768px, 1024px, etc.', description: 'Minimum width' },
        { property: 'max-width', values: '767px, 1023px, 1200px, etc.', description: 'Maximum width' },
        { property: 'orientation', values: 'portrait, landscape', description: 'Device orientation' },
        { property: 'aspect-ratio', values: '16/9, 4/3, 1/1, etc.', description: 'Aspect ratio' },
        { property: 'viewport', values: 'width=device-width, initial-scale=1.0', description: 'Viewport meta tag' }
      ]
    },
    {
      category: 'Pseudo-classes & Pseudo-elements',
      properties: [
        { property: ':hover', values: 'element:hover { }', description: 'Mouse hover state' },
        { property: ':active', values: 'element:active { }', description: 'Active state' },
        { property: ':focus', values: 'element:focus { }', description: 'Focus state' },
        { property: ':focus-within', values: 'element:focus-within { }', description: 'Focus within element' },
        { property: ':focus-visible', values: 'element:focus-visible { }', description: 'Focus visible state' },
        { property: ':visited', values: 'a:visited { }', description: 'Visited link state' },
        { property: ':link', values: 'a:link { }', description: 'Unvisited link state' },
        { property: ':target', values: 'element:target { }', description: 'Target element' },
        { property: ':first-child', values: 'element:first-child { }', description: 'First child element' },
        { property: ':last-child', values: 'element:last-child { }', description: 'Last child element' },
        { property: ':only-child', values: 'element:only-child { }', description: 'Only child element' },
        { property: ':first-of-type', values: 'element:first-of-type { }', description: 'First of type element' },
        { property: ':last-of-type', values: 'element:last-of-type { }', description: 'Last of type element' },
        { property: ':only-of-type', values: 'element:only-of-type { }', description: 'Only of type element' },
        { property: ':nth-child()', values: 'element:nth-child(2n) { }', description: 'Nth child element' },
        { property: ':nth-last-child()', values: 'element:nth-last-child(2n) { }', description: 'Nth last child element' },
        { property: ':nth-of-type()', values: 'element:nth-of-type(2n) { }', description: 'Nth of type element' },
        { property: ':nth-last-of-type()', values: 'element:nth-last-of-type(2n) { }', description: 'Nth last of type element' },
        { property: ':empty', values: 'element:empty { }', description: 'Empty element' },
        { property: ':root', values: ':root { }', description: 'Root element' },
        { property: ':not()', values: 'element:not(.class) { }', description: 'Not selector' },
        { property: ':is()', values: ':is(h1, h2, h3) { }', description: 'Is selector' },
        { property: ':where()', values: ':where(h1, h2, h3) { }', description: 'Where selector' },
        { property: ':has()', values: 'element:has(child) { }', description: 'Has selector' },
        { property: '::before', values: 'element::before { content: ""; }', description: 'Before pseudo-element' },
        { property: '::after', values: 'element::after { content: ""; }', description: 'After pseudo-element' },
        { property: '::first-line', values: 'p::first-line { }', description: 'First line of text' },
        { property: '::first-letter', values: 'p::first-letter { }', description: 'First letter of text' },
        { property: '::selection', values: '::selection { }', description: 'Selected text' },
        { property: '::placeholder', values: 'input::placeholder { }', description: 'Input placeholder' },
        { property: '::marker', values: 'li::marker { }', description: 'List marker' },
        { property: '::backdrop', values: '::backdrop { }', description: 'Backdrop element' }
      ]
    },
    {
      category: 'Backgrounds & Borders',
      properties: [
        { property: 'background', values: 'red, url(image.jpg), linear-gradient(), inherit, initial, unset', description: 'Background shorthand' },
        { property: 'background-color', values: 'transparent, red, #ff0000, rgb(255,0,0), rgba(255,0,0,0.5), inherit, initial, unset', description: 'Background color' },
        { property: 'background-image', values: 'none, url(image.jpg), linear-gradient(), radial-gradient(), conic-gradient(), inherit, initial, unset', description: 'Background image' },
        { property: 'background-repeat', values: 'repeat, no-repeat, repeat-x, repeat-y, space, round, inherit, initial, unset', description: 'Background repeat' },
        { property: 'background-attachment', values: 'scroll, fixed, local, inherit, initial, unset', description: 'Background attachment' },
        { property: 'background-position', values: 'center, top left, 50% 50%, inherit, initial, unset', description: 'Background position' },
        { property: 'background-size', values: 'auto, cover, contain, 100px 200px, 50% 100%, inherit, initial, unset', description: 'Background size' },
        { property: 'background-clip', values: 'border-box, padding-box, content-box, text, inherit, initial, unset', description: 'Background clip' },
        { property: 'background-origin', values: 'border-box, padding-box, content-box, inherit, initial, unset', description: 'Background origin' },
        { property: 'border-image', values: 'none, url(image.jpg) 30 stretch, inherit, initial, unset', description: 'Border image' },
        { property: 'border-image-source', values: 'none, url(image.jpg), inherit, initial, unset', description: 'Border image source' },
        { property: 'border-image-slice', values: '100%, 30, 30 30 30, inherit, initial, unset', description: 'Border image slice' },
        { property: 'border-image-width', values: '1, 30px, 30%, inherit, initial, unset', description: 'Border image width' },
        { property: 'border-image-outset', values: '0, 30px, inherit, initial, unset', description: 'Border image outset' },
        { property: 'border-image-repeat', values: 'stretch, repeat, round, space, inherit, initial, unset', description: 'Border image repeat' }
      ]
    },
    {
      category: 'Text & Fonts',
      properties: [
        { property: 'font', values: 'italic bold 12px/1.5 Arial, inherit, initial, unset', description: 'Font shorthand' },
        { property: 'font-family', values: 'Arial, "Times New Roman", serif, sans-serif, monospace, inherit, initial, unset', description: 'Font family' },
        { property: 'font-size', values: '16px, 1em, 1.2rem, 120%, inherit, initial, unset', description: 'Font size' },
        { property: 'font-weight', values: 'normal, bold, 100-900, inherit, initial, unset', description: 'Font weight' },
        { property: 'font-style', values: 'normal, italic, oblique, inherit, initial, unset', description: 'Font style' },
        { property: 'font-variant', values: 'normal, small-caps, inherit, initial, unset', description: 'Font variant' },
        { property: 'font-stretch', values: 'normal, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded, inherit, initial, unset', description: 'Font stretch' },
        { property: 'font-size-adjust', values: 'none, 0.5, inherit, initial, unset', description: 'Font size adjust' },
        { property: 'font-synthesis', values: 'none, weight, style, weight style, inherit, initial, unset', description: 'Font synthesis' },
        { property: 'text-align', values: 'left, right, center, justify, start, end, inherit, initial, unset', description: 'X-axis text alignment (horizontal alignment of text content)' },
        { property: 'text-align-last', values: 'auto, left, right, center, justify, start, end, inherit, initial, unset', description: 'X-axis last line alignment (horizontal alignment of last line in justified text)' },
        { property: 'text-decoration', values: 'none, underline, overline, line-through, inherit, initial, unset', description: 'Text decoration shorthand' },
        { property: 'text-decoration-line', values: 'none, underline, overline, line-through, blink, inherit, initial, unset', description: 'Text decoration line' },
        { property: 'text-decoration-style', values: 'solid, double, dotted, dashed, wavy, inherit, initial, unset', description: 'Text decoration style' },
        { property: 'text-decoration-color', values: 'currentColor, red, #ff0000, inherit, initial, unset', description: 'Text decoration color' },
        { property: 'text-decoration-thickness', values: 'auto, 1px, 0.1em, inherit, initial, unset', description: 'Text decoration thickness' },
        { property: 'text-underline-offset', values: 'auto, 1px, inherit, initial, unset', description: 'Text underline offset' },
        { property: 'text-underline-position', values: 'auto, under, left, right, inherit, initial, unset', description: 'Text underline position' },
        { property: 'text-transform', values: 'none, uppercase, lowercase, capitalize, full-width, full-size-kana, inherit, initial, unset', description: 'Text transformation' },
        { property: 'text-indent', values: '0, 20px, 2em, inherit, initial, unset', description: 'Text indent' },
        { property: 'text-overflow', values: 'clip, ellipsis, inherit, initial, unset', description: 'Text overflow' },
        { property: 'white-space', values: 'normal, nowrap, pre, pre-wrap, pre-line, break-spaces, inherit, initial, unset', description: 'White space handling' },
        { property: 'word-spacing', values: 'normal, 2px, 0.2em, inherit, initial, unset', description: 'Word spacing' },
        { property: 'letter-spacing', values: 'normal, 1px, 0.1em, inherit, initial, unset', description: 'Letter spacing' },
        { property: 'line-height', values: 'normal, 1.5, 24px, inherit, initial, unset', description: 'Line height' },
        { property: 'vertical-align', values: 'baseline, sub, super, top, text-top, middle, bottom, text-bottom, inherit, initial, unset', description: 'Vertical alignment' },
        { property: 'word-break', values: 'normal, break-all, keep-all, break-word, inherit, initial, unset', description: 'Word break' },
        { property: 'word-wrap', values: 'normal, break-word, inherit, initial, unset', description: 'Word wrap (deprecated)' },
        { property: 'overflow-wrap', values: 'normal, break-word, anywhere, inherit, initial, unset', description: 'Overflow wrap' },
        { property: 'hyphens', values: 'none, manual, auto, inherit, initial, unset', description: 'Hyphenation' },
        { property: 'tab-size', values: '4, 8, inherit, initial, unset', description: 'Tab size' },
        { property: 'text-orientation', values: 'mixed, upright, sideways, inherit, initial, unset', description: 'Text orientation' },
        { property: 'writing-mode', values: 'horizontal-tb, vertical-rl, vertical-lr, sideways-rl, sideways-lr, inherit, initial, unset', description: 'Writing mode' },
        { property: 'direction', values: 'ltr, rtl, inherit, initial, unset', description: 'Text direction' },
        { property: 'unicode-bidi', values: 'normal, embed, isolate, bidi-override, isolate-override, plaintext, inherit, initial, unset', description: 'Unicode bidirectional' }
      ]
    },
    {
      category: 'Transforms & 3D',
      properties: [
        { property: 'transform', values: 'none, translate(10px), rotate(45deg), scale(2), skew(10deg), inherit, initial, unset', description: 'Element transformation (moves, rotates, scales, or skews element)' },
        { property: 'transform-origin', values: 'center, top left, 50% 50%, inherit, initial, unset', description: 'Transform origin (point around which transformations happen)' },
        { property: 'transform-style', values: 'flat, preserve-3d, inherit, initial, unset', description: 'Transform style' },
        { property: 'perspective', values: 'none, 1000px, inherit, initial, unset', description: 'Perspective' },
        { property: 'perspective-origin', values: 'center, top left, 50% 50%, inherit, initial, unset', description: 'Perspective origin' },
        { property: 'backface-visibility', values: 'visible, hidden, inherit, initial, unset', description: 'Backface visibility' },
        { property: 'translate', values: 'none, 10px, 10px 20px, inherit, initial, unset', description: 'Translate shorthand (moves element on X and Y axes)' },
        { property: 'rotate', values: 'none, 45deg, inherit, initial, unset', description: 'Rotate shorthand (rotates element around its center)' },
        { property: 'scale', values: 'none, 2, 2 3, inherit, initial, unset', description: 'Scale shorthand (scales element on X and Y axes)' },
        { property: 'skew', values: 'none, 10deg, 10deg 20deg, inherit, initial, unset', description: 'Skew shorthand (skews element on X and Y axes)' }
      ]
    },
    {
      category: 'Transitions & Animations',
      properties: [
        { property: 'transition', values: 'all 0.3s ease, width 0.5s linear, inherit, initial, unset', description: 'Transition shorthand' },
        { property: 'transition-property', values: 'all, width, height, color, inherit, initial, unset', description: 'Transition properties' },
        { property: 'transition-duration', values: '0s, 0.3s, 1s, inherit, initial, unset', description: 'Transition duration' },
        { property: 'transition-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset', description: 'Transition timing' },
        { property: 'transition-delay', values: '0s, 1s, inherit, initial, unset', description: 'Transition delay' },
        { property: 'animation', values: 'slideIn 1s ease-in-out, inherit, initial, unset', description: 'Animation shorthand' },
        { property: 'animation-name', values: 'none, slideIn, fadeOut, inherit, initial, unset', description: 'Animation name' },
        { property: 'animation-duration', values: '0s, 1s, 2.5s, inherit, initial, unset', description: 'Animation duration' },
        { property: 'animation-timing-function', values: 'ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(), inherit, initial, unset', description: 'Animation timing' },
        { property: 'animation-delay', values: '0s, 1s, -1s, inherit, initial, unset', description: 'Animation delay' },
        { property: 'animation-iteration-count', values: '1, infinite, 3, inherit, initial, unset', description: 'Animation iterations' },
        { property: 'animation-direction', values: 'normal, reverse, alternate, alternate-reverse, inherit, initial, unset', description: 'Animation direction' },
        { property: 'animation-fill-mode', values: 'none, forwards, backwards, both, inherit, initial, unset', description: 'Animation fill mode' },
        { property: 'animation-play-state', values: 'running, paused, inherit, initial, unset', description: 'Animation play state' },
        { property: '@keyframes', values: '@keyframes slideIn { from { } to { } }', description: 'Keyframe animation definition' }
      ]
    },
    {
      category: 'Tables',
      properties: [
        { property: 'table-layout', values: 'auto, fixed, inherit, initial, unset', description: 'Table layout algorithm (parent - how table calculates column widths)' },
        { property: 'border-collapse', values: 'separate, collapse, inherit, initial, unset', description: 'Border collapse (parent - how borders between cells are handled)' },
        { property: 'border-spacing', values: '0, 10px, 10px 20px, inherit, initial, unset', description: 'Border spacing (parent - space between table cells)' },
        { property: 'caption-side', values: 'top, bottom, inherit, initial, unset', description: 'Caption side (parent - where table caption appears)' },
        { property: 'empty-cells', values: 'show, hide, inherit, initial, unset', description: 'Empty cells (parent - how empty table cells are displayed)' }
      ]
    },
    {
      category: 'Lists',
      properties: [
        { property: 'list-style', values: 'disc outside none, inherit, initial, unset', description: 'List style shorthand (parent - affects all list items)' },
        { property: 'list-style-type', values: 'disc, circle, square, decimal, lower-alpha, upper-alpha, inherit, initial, unset', description: 'List style type (parent - bullet/number style for list items)' },
        { property: 'list-style-position', values: 'outside, inside, inherit, initial, unset', description: 'List style position (parent - where bullets/numbers appear relative to list items)' },
        { property: 'list-style-image', values: 'none, url(image.jpg), inherit, initial, unset', description: 'List style image (parent - custom image for bullets)' }
      ]
    },
    {
      category: 'Counters',
      properties: [
        { property: 'counter-reset', values: 'none, counter 0, inherit, initial, unset', description: 'Counter reset' },
        { property: 'counter-increment', values: 'none, counter 1, inherit, initial, unset', description: 'Counter increment' },
        { property: 'content', values: 'normal, "text", url(), counter(), attr(), inherit, initial, unset', description: 'Content' }
      ]
    },
    {
      category: 'Generated Content',
      properties: [
        { property: 'quotes', values: 'auto, "«" "»" "‹" "›", inherit, initial, unset', description: 'Quotes' },
        { property: 'resize', values: 'none, both, horizontal, vertical, inherit, initial, unset', description: 'Resize' },
        { property: 'cursor', values: 'auto, pointer, default, text, move, inherit, initial, unset', description: 'Cursor' },
        { property: 'caret-color', values: 'auto, red, #ff0000, inherit, initial, unset', description: 'Caret color' },
        { property: 'user-select', values: 'auto, none, text, all, contain, inherit, initial, unset', description: 'User select' },
        { property: 'appearance', values: 'auto, none, inherit, initial, unset', description: 'Appearance' },
        { property: 'accent-color', values: 'auto, red, #ff0000, inherit, initial, unset', description: 'Accent color' }
      ]
    }
  ]

  // Accordion functions
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }

  const expandAll = () => {
    const allSectionIds = [
      ...htmlElements.map(cat => `html-${cat.category}`),
      ...cssProperties.map(cat => `css-${cat.category}`)
    ]
    setExpandedSections(new Set(allSectionIds))
    setAllExpanded(true)
  }

  const collapseAll = () => {
    setExpandedSections(new Set())
    setAllExpanded(false)
  }

  // Auto-expand sections that contain search results
  useEffect(() => {
    if (searchTerm.trim()) {
      const sectionsToExpand = new Set()
      
      htmlElements.forEach(category => {
        const hasMatch = category.elements.some(element =>
          element.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
          element.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        if (hasMatch) {
          sectionsToExpand.add(`html-${category.category}`)
        }
      })
      
      cssProperties.forEach(category => {
        const hasMatch = category.properties.some(prop =>
          prop.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prop.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          prop.values.toLowerCase().includes(searchTerm.toLowerCase())
        )
        if (hasMatch) {
          sectionsToExpand.add(`css-${category.category}`)
        }
      })
      
      setExpandedSections(sectionsToExpand)
    } else {
      // Collapse all when search is cleared
      setExpandedSections(new Set())
    }
  }, [searchTerm])

  const filteredHTMLElements = htmlElements.map(category => ({
    ...category,
    elements: category.elements.filter(element =>
      element.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
      element.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.elements.length > 0)

  const filteredCSSProperties = cssProperties.map(category => ({
    ...category,
    properties: category.properties.filter(prop =>
      prop.property.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prop.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.properties.length > 0)

  return (
    <div className="section">
      <h1>HTML & CSS Cheatsheet</h1>
      <p>Complete reference for HTML elements and CSS properties</p>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search HTML elements or CSS properties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab ${activeTab === 'html' ? 'active' : ''}`}
          onClick={() => setActiveTab('html')}
        >
          <Globe className="tab-icon" />
          HTML Elements
        </button>
        <button
          className={`tab ${activeTab === 'css' ? 'active' : ''}`}
          onClick={() => setActiveTab('css')}
        >
          <Type className="tab-icon" />
          CSS Properties
        </button>
      </div>

      {/* HTML Elements Tab */}
      {activeTab === 'html' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>HTML Elements Reference</h2>
            <p>Complete list of HTML elements organized by category. Click on any element to see its usage.</p>
            <div className="accordion-controls">
              <button onClick={allExpanded ? collapseAll : expandAll} className="accordion-btn">
                {allExpanded ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
          </div>

          {filteredHTMLElements.map((category, index) => {
            const sectionId = `html-${category.category}`
            const isExpanded = expandedSections.has(sectionId)
            
            return (
              <div key={index} className="cheatsheet-category accordion-section">
                <div 
                  className="accordion-header"
                  onClick={() => toggleSection(sectionId)}
                >
                  <div className="accordion-header-content">
                    <h3 className="category-title">{category.category}</h3>
                    {!isExpanded && (
                      <div className="preview-tags">
                        {category.elements.slice(0, 3).map((element, idx) => (
                          <span key={idx} className="preview-tag">{element.tag.replace(/[<>]/g, '')}</span>
                        ))}
                        {category.elements.length > 3 && (
                          <span className="preview-tag">+{category.elements.length - 3} more</span>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="accordion-icon">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
                {isExpanded && (
                  <div className="accordion-content">
                    <div className="elements-grid">
                      {category.elements.map((element, elementIndex) => (
                        <div key={elementIndex} className="element-card">
                          <div className="element-header">
                            <code className="element-tag">{element.tag}</code>
                            <span className="element-description">{element.description}</span>
                          </div>
                          <div className="element-example">
                            <strong>Example:</strong>
                            <code className="example-code">{element.example}</code>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* CSS Properties Tab */}
      {activeTab === 'css' && (
        <div className="cheatsheet-content">
          <div className="cheatsheet-intro">
            <h2>CSS Properties Reference</h2>
            <p>Complete list of CSS properties organized by category. Common values and usage examples included.</p>
            <div className="accordion-controls">
              <button onClick={allExpanded ? collapseAll : expandAll} className="accordion-btn">
                {allExpanded ? 'Collapse All' : 'Expand All'}
              </button>
            </div>
          </div>

          {/* Box Model Visual */}
          <div className="box-model-visual">
            <h3>CSS Box Model</h3>
            <div className="box-model-container">
              <div className="box-model-margin">
                <div className="box-model-border">
                  <div className="box-model-padding">
                    <div className="box-model-content">
                      <span>Content</span>
                      <div className="box-model-label content-label">Content Area</div>
                    </div>
                    <div className="box-model-label padding-label">Padding</div>
                  </div>
                  <div className="box-model-label border-label">Border</div>
                </div>
                <div className="box-model-label margin-label">Margin</div>
              </div>
            </div>
            <div className="box-model-explanation">
              <div className="explanation-item">
                <div className="explanation-color margin-color"></div>
                <div>
                  <strong>Margin:</strong> Outer spacing between elements
                </div>
              </div>
              <div className="explanation-item">
                <div className="explanation-color border-color"></div>
                <div>
                  <strong>Border:</strong> Visible border around the element
                </div>
              </div>
              <div className="explanation-item">
                <div className="explanation-color padding-color"></div>
                <div>
                  <strong>Padding:</strong> Inner spacing between content and border
                </div>
              </div>
              <div className="explanation-item">
                <div className="explanation-color content-color"></div>
                <div>
                  <strong>Content:</strong> The actual content area (text, images, etc.)
                </div>
              </div>
            </div>
          </div>

          {filteredCSSProperties.map((category, index) => {
            const sectionId = `css-${category.category}`
            const isExpanded = expandedSections.has(sectionId)
            
            return (
              <div key={index} className="cheatsheet-category accordion-section">
                <div 
                  className="accordion-header"
                  onClick={() => toggleSection(sectionId)}
                >
                  <div className="accordion-header-content">
                    <h3 className="category-title">{category.category}</h3>
                    {!isExpanded && (
                      <div className="preview-tags">
                        {category.properties.slice(0, 3).map((prop, idx) => (
                          <span key={idx} className="preview-tag">{prop.property}</span>
                        ))}
                        {category.properties.length > 3 && (
                          <span className="preview-tag">+{category.properties.length - 3} more</span>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="accordion-icon">
                    {isExpanded ? '−' : '+'}
                  </span>
                </div>
                {isExpanded && (
                  <div className="accordion-content">
                    <div className="properties-grid">
                      {category.properties.map((prop, propIndex) => (
                        <div key={propIndex} className="property-card">
                          <div className="property-header">
                            <code className="property-name">{prop.property}</code>
                            <span className="property-description">{prop.description}</span>
                          </div>
                          <div className="property-values">
                            <strong>Values:</strong>
                            <code className="values-code">{prop.values}</code>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Quick Reference */}
      <div className="quick-reference">
        <h2>Quick Reference</h2>
        <div className="reference-grid">
          <div className="reference-card">
            <h2>HTML Structure</h2>
            <p className="section-summary">The foundation of web pages using semantic markup. HTML provides the structure and content of web pages, defining how elements are organized and what they represent.</p>
            <div className="figma-analogy">
              <strong>Figma Analogy:</strong> HTML structure is like the layer hierarchy in Figma - it defines the organization and relationships between elements.
            </div>
            <ReferenceCode
              code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- Content here -->
</body>
</html>`}
              language="html"
            />
          </div>
          <div className="reference-card">
            <h3>CSS Box Model</h3>
            <ReferenceCode
              code={`/* Box Model Properties */
.element {
  width: 200px;        /* Content width */
  height: 100px;       /* Content height */
  padding: 20px;       /* Inner spacing */
  border: 2px solid;   /* Border */
  margin: 10px;        /* Outer spacing */
  box-sizing: border-box; /* Include border in width */
}`}
              language="css"
            />
          </div>
          <div className="reference-card">
            <h3>Flexbox Layout</h3>
            <ReferenceCode
              code={`/* Flexbox Container */
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

/* Flexbox Items */
.item {
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
}`}
              language="css"
            />
          </div>
          <div className="reference-card">
            <h3>CSS Grid Layout</h3>
            <ReferenceCode
              code={`/* Grid Container */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  grid-template-areas: 
    "header header"
    "sidebar main";
}

/* Grid Items */
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`}
              language="css"
            />
          </div>
        </div>
      </div>
    </div>
  )

}

export default HTMLCSS