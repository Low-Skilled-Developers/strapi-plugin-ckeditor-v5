import * as CKEditor5 from 'ckeditor5'

// import { StrapiMediaLibPlugin } from '../../plugins/strapi-media-lib.plugin'
import { EditorConfig } from '../../interfaces/editor-config.interface'
import { BaseConfig } from './base'

export const LightConfig: EditorConfig = {
  ...BaseConfig,
  plugins: [
    CKEditor5.Autoformat,
    CKEditor5.Bold,
    CKEditor5.Italic,
    CKEditor5.Essentials,
    CKEditor5.GeneralHtmlSupport,
    CKEditor5.Heading,
    CKEditor5.Image,
    CKEditor5.ImageCaption,
    CKEditor5.ImageStyle,
    CKEditor5.ImageToolbar,
    CKEditor5.ImageUpload,
    CKEditor5.Indent,
    CKEditor5.Link,
    CKEditor5.List,
    CKEditor5.Paragraph,
    CKEditor5.PasteFromOffice,
    CKEditor5.Table,
    CKEditor5.TableToolbar,
    CKEditor5.TableColumnResize,
    CKEditor5.TableCaption,
    CKEditor5.WordCount,
    CKEditor5.SourceEditing,
    // StrapiMediaLibPlugin,
  ],
  toolbar: [
    'undo', 'redo',
    '|',
    'heading',
    '|',
    'bold', 'italic',
    '|',
    'link', /*'strapiMediaLib',*/ 'insertTable',
    '|',
    'bulletedList', 'numberedList',
    'SourceEditing',
  ],
  heading: {
    options: [
      { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
      { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
    ],
  },
  image: {
    toolbar: [
      'imageStyle:inline',
      'imageStyle:block',
      'imageStyle:side',
      '|',
      'toggleImageCaption',
      'imageTextAlternative',
    ],
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      '|',
      'toggleTableCaption',
    ],
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: 'manual',
        label: 'Open in a new tab',
        attributes: {
          target: '_blank',
          rel: 'noopener noreferrer',
        },
      },
    },
  },
}
