import sanitizeHtml from 'sanitize-html'

import { EditorConfig } from '../../../interfaces/editor-config.interface'
import { BaseColors } from './base.colors'
import { BasePlugins } from './base.plugins'
import { BaseToolbar } from './base.toolbar'


export const BaseConfig: EditorConfig = {
  plugins: BasePlugins,
  toolbar: BaseToolbar,
  fontFamily: {
    supportAllValues: true,
  },
  fontSize: {
    options: [10, 12, 14, 'default', 18, 20, 22],
    supportAllValues: true,
  },
  fontColor: {
    columns: 12,
    documentColors: 12,
    colors: BaseColors,
  },
  fontBackgroundColor: {
    columns: 12,
    documentColors: 12,
    colors: BaseColors,
  },
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
      { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
      { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
    ],
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true,
      },
    ],
    disallow: [
      {
        attributes: [
          { key: /^on(.*)/i, value: true },
          { key: /.*/, value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i },
          { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i },
        ],
      },
      { name: 'script' },
    ],
  },
  sanitizeHtml: (inputHtml) => {
    const outputHtml = sanitizeHtml(inputHtml)

    return {
      html: outputHtml,
      hasChanged: true,
    }
  },
  htmlEmbed: {
    showPreviews: true,
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableProperties',
      'tableCellProperties',
      'toggleTableCaption',
    ],
  },
  image: {
    styles: {
      options: [
        'inline', 'alignLeft', 'alignRight',
        'alignCenter', 'alignBlockLeft', 'alignBlockRight',
        'block', 'side',
      ],
    },
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Default image width',
        value: null,
      },
      {
        name: 'resizeImage:50',
        label: '50% page width',
        value: '50',
      },
      {
        name: 'resizeImage:75',
        label: '75% page width',
        value: '75',
      },
    ],
    toolbar: [
      'imageTextAlternative',
      'toggleImageCaption',
      'linkImage',
      '|',
      'imageStyle:inline',
      'imageStyle:wrapText',
      'imageStyle:breakText',
      'imageStyle:side',
      '|',
      'resizeImage',
    ],
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: 'manual',
        label: 'Open in a new tab',
        defaultValue: true,
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file',
        },
      },
    },
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
  },
  style: {
    definitions: [
      {
        name: 'Title',
        element: 'h1',
        classes: ['document-title'],
      },
      {
        name: 'Subtitle',
        element: 'h2',
        classes: ['document-subtitle'],
      },
      {
        name: 'Callout',
        element: 'p',
        classes: ['callout'],
      },
      {
        name: 'Side quote',
        element: 'blockquote',
        classes: ['side-quote'],
      },
      {
        name: 'Needs clarification',
        element: 'span',
        classes: ['needs-clarification'],
      },
      {
        name: 'Wide spacing',
        element: 'span',
        classes: ['wide-spacing'],
      },
      {
        name: 'Small caps',
        element: 'span',
        classes: ['small-caps'],
      },
      {
        name: 'Code (dark)',
        element: 'pre',
        classes: ['stylish-code', 'stylish-code-dark'],
      },
      {
        name: 'Code (bright)',
        element: 'pre',
        classes: ['stylish-code', 'stylish-code-bright'],
      },
    ],
  },
}
