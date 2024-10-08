import { EditorConfig } from '../../../interfaces/editor-config.interface'

export const BaseToolbar: EditorConfig['toolbar'] = [
  {
    label: ' ',
    tooltip: null,
    icon: 'paragraph',
    items: ['heading', 'style', 'SourceEditing'],
  },
  '|',
  {
    label: ' ',
    tooltip: null,
    icon: 'text',
    items: ['bold', 'italic', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor'],
  },
  {
    label: ' ',
    tooltip: null,
    icon: `
        <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" fill="none" width="24" height="24"/>
          <g>
            <path d="M14.348 12H21v2h-4.613c.24.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.76-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.44 1.818.75 2.5.928.682.18 1.306.27 1.872.27.68 0 1.2-.13 1.562-.39.363-.26.545-.644.545-1.158 0-.285-.08-.54-.24-.763-.16-.222-.394-.437-.704-.643-.18-.12-.483-.287-.88-.49H3v-2H14.347zm-3.528-2c-.073-.077-.143-.155-.193-.235-.126-.202-.19-.44-.19-.713 0-.44.157-.795.47-1.068.313-.273.762-.41 1.348-.41.492 0 .993.064 1.502.19.51.127 1.153.35 1.93.67l1-2.405c-.753-.327-1.473-.58-2.16-.76-.69-.18-1.414-.27-2.173-.27-1.544 0-2.753.37-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z"/>
          </g>
        </svg>
      `,
    items: ['underline', 'strikethrough', 'superscript', 'subscript'],
  },
  'removeFormat',
  '|',
  'alignment',
  'outdent',
  'indent',
  '|',
  'bulletedList',
  'numberedList',
  '|',
  'insertImage',
  'mediaEmbed',
  'strapiMediaLib',
  'link',
  'blockquote',
  'insertTable',
  'specialCharacters',
  'htmlEmbed',
  'codeBlock',
  '|',
  'horizontalLine',
  'pageBreak',
  '|',
  '|',
  'showBlocks',
  '|',
  'undo',
  'redo',
  '|',
  'SourceEditing'
]
