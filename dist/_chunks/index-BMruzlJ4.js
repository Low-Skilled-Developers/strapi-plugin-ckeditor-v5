"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const CKEditor5 = require("ckeditor5");
const react = require("react");
const ckeditor5React = require("@ckeditor/ckeditor5-react");
const reactIntl = require("react-intl");
const designSystem = require("@strapi/design-system");
require("ckeditor5/ckeditor5-editor.css");
require("ckeditor5/ckeditor5.css");
require("ckeditor5/ckeditor5-content.css");
const index = require("./index-BAJoHDhQ.js");
const sanitizeHtml = require("sanitize-html");
const styledComponents = require("styled-components");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const CKEditor5__namespace = /* @__PURE__ */ _interopNamespace(CKEditor5);
const sanitizeHtml__default = /* @__PURE__ */ _interopDefault(sanitizeHtml);
const MediaLib = ({
  isOpen = false,
  onToggle = () => {
  },
  editor,
  uploadConfig
}) => {
  if (!isOpen) {
    return null;
  }
};
const BaseColors = [
  { label: "Red 50", color: "#FFEBEE" },
  { label: "Purple 50", color: "#F3E5F5" },
  { label: "Indigo 50", color: "#E8EAF6" },
  { label: "Blue 50", color: "#E3F2FD" },
  { label: "Cyan 50", color: "#E0F7FA" },
  { label: "Teal 50", color: "#E0F2F1" },
  { label: "Light green 50", color: "#F1F8E9" },
  { label: "Lime 50", color: "#F9FBE7" },
  { label: "Amber 50", color: "#FFF8E1" },
  { label: "Orange 50", color: "#FFF3E0" },
  { label: "Grey 50", color: "#FAFAFA" },
  { label: "Blue grey 50", color: "#ECEFF1" },
  { label: "Red 100", color: "#FFCDD2" },
  { label: "Purple 100", color: "#E1BEE7" },
  { label: "Indigo 100", color: "#C5CAE9" },
  { label: "Blue 100", color: "#BBDEFB" },
  { label: "Cyan 100", color: "#B2EBF2" },
  { label: "Teal 100", color: "#B2DFDB" },
  { label: "Light green 100", color: "#DCEDC8" },
  { label: "Lime 100", color: "#F0F4C3" },
  { label: "Amber 100", color: "#FFECB3" },
  { label: "Orange 100", color: "#FFE0B2" },
  { label: "Grey 100", color: "#F5F5F5" },
  { label: "Blue grey 100", color: "#CFD8DC" },
  { label: "Red 200", color: "#EF9A9A" },
  { label: "Purple 200", color: "#CE93D8" },
  { label: "Indigo 200", color: "#9FA8DA" },
  { label: "Blue 200", color: "#90CAF9" },
  { label: "Cyan 200", color: "#80DEEA" },
  { label: "Teal 200", color: "#80CBC4" },
  { label: "Light green 200", color: "#C5E1A5" },
  { label: "Lime 200", color: "#E6EE9C" },
  { label: "Amber 200", color: "#FFE082" },
  { label: "Orange 200", color: "#FFCC80" },
  { label: "Grey 200", color: "#EEEEEE" },
  { label: "Blue grey 200", color: "#B0BEC5" },
  { label: "Red 300", color: "#E57373" },
  { label: "Purple 300", color: "#BA68C8" },
  { label: "Indigo 300", color: "#7986CB" },
  { label: "Blue 300", color: "#64B5F6" },
  { label: "Cyan 300", color: "#4DD0E1" },
  { label: "Teal 300", color: "#4DB6AC" },
  { label: "Light green 300", color: "#AED581" },
  { label: "Lime 300", color: "#DCE775" },
  { label: "Amber 300", color: "#FFD54F" },
  { label: "Orange 300", color: "#FFB74D" },
  { label: "Grey 300", color: "#E0E0E0" },
  { label: "Blue grey 300", color: "#90A4AE" },
  { label: "Red 400", color: "#EF5350" },
  { label: "Purple 400", color: "#AB47BC" },
  { label: "Indigo 400", color: "#5C6BC0" },
  { label: "Blue 400", color: "#42A5F5" },
  { label: "Cyan 400", color: "#26C6DA" },
  { label: "Teal 400", color: "#26A69A" },
  { label: "Light green 400", color: "#9CCC65" },
  { label: "Lime 400", color: "#D4E157" },
  { label: "Amber 400", color: "#FFCA28" },
  { label: "Orange 400", color: "#FFA726" },
  { label: "Grey 400", color: "#BDBDBD" },
  { label: "Blue grey 400", color: "#78909C" },
  { label: "Red 500", color: "#F44336" },
  { label: "Purple 500", color: "#9C27B0" },
  { label: "Indigo 500", color: "#3F51B5" },
  { label: "Blue 500", color: "#2196F3" },
  { label: "Cyan 500", color: "#00BCD4" },
  { label: "Teal 500", color: "#009688" },
  { label: "Light green 500", color: "#8BC34A" },
  { label: "Lime 500", color: "#CDDC39" },
  { label: "Amber 500", color: "#FFC107" },
  { label: "Orange 500", color: "#FF9800" },
  { label: "Grey 500", color: "#9E9E9E" },
  { label: "Blue grey 500", color: "#607D8B" },
  { label: "Red 600", color: "#E53935" },
  { label: "Purple 600", color: "#8E24AA" },
  { label: "Indigo 600", color: "#3949AB" },
  { label: "Blue 600", color: "#1E88E5" },
  { label: "Cyan 600", color: "#00ACC1" },
  { label: "Teal 600", color: "#00897B" },
  { label: "Light green 600", color: "#7CB342" },
  { label: "Lime 600", color: "#C0CA33" },
  { label: "Amber 600", color: "#FFB300" },
  { label: "Orange 600", color: "#FB8C00" },
  { label: "Grey 600", color: "#757575" },
  { label: "Blue grey 600", color: "#546E7A" },
  { label: "Red 700", color: "#D32F2F" },
  { label: "Purple 700", color: "#7B1FA2" },
  { label: "Indigo 700", color: "#303F9F" },
  { label: "Blue 700", color: "#1976D2" },
  { label: "Cyan 700", color: "#0097A7" },
  { label: "Teal 700", color: "#00796B" },
  { label: "Light green 700", color: "#689F38" },
  { label: "Lime 700", color: "#AFB42B" },
  { label: "Amber 700", color: "#FFA000" },
  { label: "Orange 700", color: "#F57C00" },
  { label: "Grey 700", color: "#616161" },
  { label: "Blue grey 700", color: "#455A64" },
  { label: "Red 800", color: "#C62828" },
  { label: "Purple 800", color: "#6A1B9A" },
  { label: "Indigo 800", color: "#283593" },
  { label: "Blue 800", color: "#1565C0" },
  { label: "Cyan 800", color: "#00838F" },
  { label: "Teal 800", color: "#00695C" },
  { label: "Light green 800", color: "#558B2F" },
  { label: "Lime 800", color: "#9E9D24" },
  { label: "Amber 800", color: "#FF8F00" },
  { label: "Orange 800", color: "#EF6C00" },
  { label: "Grey 800", color: "#424242" },
  { label: "Blue grey 800", color: "#37474F" },
  { label: "Red 900", color: "#B71C1C" },
  { label: "Purple 900", color: "#4A148C" },
  { label: "Indigo 900", color: "#1A237E" },
  { label: "Blue 900", color: "#0D47A1" },
  { label: "Cyan 900", color: "#006064" },
  { label: "Teal 900", color: "#004D40" },
  { label: "Light green 900", color: "#33691E" },
  { label: "Lime 900", color: "#827717" },
  { label: "Amber 900", color: "#FF6F00" },
  { label: "Orange 900", color: "#E65100" },
  { label: "Grey 900", color: "#212121" },
  { label: "Blue grey 900", color: "#263238" }
];
const BasePlugins = [
  CKEditor5__namespace.Alignment,
  CKEditor5__namespace.Autoformat,
  CKEditor5__namespace.AutoImage,
  CKEditor5__namespace.BlockQuote,
  CKEditor5__namespace.Bold,
  CKEditor5__namespace.Code,
  CKEditor5__namespace.CodeBlock,
  CKEditor5__namespace.Essentials,
  CKEditor5__namespace.FontBackgroundColor,
  CKEditor5__namespace.FontColor,
  CKEditor5__namespace.FontFamily,
  CKEditor5__namespace.FontSize,
  CKEditor5__namespace.GeneralHtmlSupport,
  CKEditor5__namespace.Heading,
  CKEditor5__namespace.HorizontalLine,
  CKEditor5__namespace.HtmlEmbed,
  CKEditor5__namespace.Image,
  CKEditor5__namespace.ImageCaption,
  CKEditor5__namespace.ImageInsert,
  CKEditor5__namespace.ImageResize,
  CKEditor5__namespace.ImageStyle,
  CKEditor5__namespace.ImageToolbar,
  CKEditor5__namespace.ImageUpload,
  CKEditor5__namespace.Indent,
  CKEditor5__namespace.IndentBlock,
  CKEditor5__namespace.Italic,
  CKEditor5__namespace.List,
  CKEditor5__namespace.ListProperties,
  CKEditor5__namespace.Link,
  CKEditor5__namespace.LinkImage,
  CKEditor5__namespace.MediaEmbed,
  CKEditor5__namespace.PageBreak,
  CKEditor5__namespace.Paragraph,
  CKEditor5__namespace.PasteFromOffice,
  CKEditor5__namespace.PictureEditing,
  CKEditor5__namespace.RemoveFormat,
  CKEditor5__namespace.SpecialCharacters,
  CKEditor5__namespace.SpecialCharactersArrows,
  CKEditor5__namespace.SpecialCharactersCurrency,
  CKEditor5__namespace.SpecialCharactersLatin,
  CKEditor5__namespace.SpecialCharactersMathematical,
  CKEditor5__namespace.SpecialCharactersText,
  CKEditor5__namespace.Strikethrough,
  CKEditor5__namespace.Style,
  CKEditor5__namespace.Subscript,
  CKEditor5__namespace.Superscript,
  CKEditor5__namespace.ShowBlocks,
  CKEditor5__namespace.Table,
  CKEditor5__namespace.TableCaption,
  CKEditor5__namespace.TableCellProperties,
  CKEditor5__namespace.TableColumnResize,
  CKEditor5__namespace.TableProperties,
  CKEditor5__namespace.TableToolbar,
  CKEditor5__namespace.Underline,
  CKEditor5__namespace.WordCount,
  CKEditor5__namespace.SourceEditing
  // StrapiPlugins.StrapiMediaLib,
  // StrapiPlugins.StrapiUploadAdapter,
];
const BaseToolbar = [
  {
    label: " ",
    tooltip: null,
    icon: "paragraph",
    items: ["heading", "style", "SourceEditing"]
  },
  "|",
  {
    label: " ",
    tooltip: null,
    icon: "text",
    items: ["bold", "italic", "fontSize", "fontFamily", "fontColor", "fontBackgroundColor"]
  },
  {
    label: " ",
    tooltip: null,
    icon: `
        <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" fill="none" width="24" height="24"/>
          <g>
            <path d="M14.348 12H21v2h-4.613c.24.515.368 1.094.368 1.748 0 1.317-.474 2.355-1.423 3.114-.947.76-2.266 1.138-3.956 1.138-1.557 0-2.934-.293-4.132-.878v-2.874c.985.44 1.818.75 2.5.928.682.18 1.306.27 1.872.27.68 0 1.2-.13 1.562-.39.363-.26.545-.644.545-1.158 0-.285-.08-.54-.24-.763-.16-.222-.394-.437-.704-.643-.18-.12-.483-.287-.88-.49H3v-2H14.347zm-3.528-2c-.073-.077-.143-.155-.193-.235-.126-.202-.19-.44-.19-.713 0-.44.157-.795.47-1.068.313-.273.762-.41 1.348-.41.492 0 .993.064 1.502.19.51.127 1.153.35 1.93.67l1-2.405c-.753-.327-1.473-.58-2.16-.76-.69-.18-1.414-.27-2.173-.27-1.544 0-2.753.37-3.628 1.108-.874.738-1.312 1.753-1.312 3.044 0 .302.036.58.088.848h3.318z"/>
          </g>
        </svg>
      `,
    items: ["underline", "strikethrough", "superscript", "subscript"]
  },
  "removeFormat",
  "|",
  "alignment",
  "outdent",
  "indent",
  "|",
  "bulletedList",
  "numberedList",
  "|",
  "insertImage",
  "mediaEmbed",
  "strapiMediaLib",
  "link",
  "blockquote",
  "insertTable",
  "specialCharacters",
  "htmlEmbed",
  "codeBlock",
  "|",
  "horizontalLine",
  "pageBreak",
  "|",
  "|",
  "showBlocks",
  "|",
  "undo",
  "redo",
  "|",
  "SourceEditing"
];
const BaseConfig = {
  plugins: BasePlugins,
  toolbar: BaseToolbar,
  fontFamily: {
    supportAllValues: true
  },
  fontSize: {
    options: [10, 12, 14, "default", 18, 20, 22],
    supportAllValues: true
  },
  fontColor: {
    columns: 12,
    documentColors: 12,
    colors: BaseColors
  },
  fontBackgroundColor: {
    columns: 12,
    documentColors: 12,
    colors: BaseColors
  },
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
      { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
      { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
      { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" },
      { model: "heading5", view: "h5", title: "Heading 5", class: "ck-heading_heading5" },
      { model: "heading6", view: "h6", title: "Heading 6", class: "ck-heading_heading6" }
    ]
  },
  htmlSupport: {
    allow: [
      {
        name: /.*/,
        attributes: true,
        classes: true,
        styles: true
      }
    ],
    disallow: [
      {
        attributes: [
          { key: /^on(.*)/i, value: true },
          { key: /.*/, value: /(\b)(on\S+)(\s*)=|javascript:|(<\s*)(\/*)script/i },
          { key: /.*/, value: /data:(?!image\/(png|jpeg|gif|webp))/i }
        ]
      },
      { name: "script" }
    ]
  },
  sanitizeHtml: (inputHtml) => {
    const outputHtml = sanitizeHtml__default.default(inputHtml);
    return {
      html: outputHtml,
      hasChanged: true
    };
  },
  htmlEmbed: {
    showPreviews: true
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true
    }
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "tableProperties",
      "tableCellProperties",
      "toggleTableCaption"
    ]
  },
  image: {
    styles: {
      options: [
        "inline",
        "alignLeft",
        "alignRight",
        "alignCenter",
        "alignBlockLeft",
        "alignBlockRight",
        "block",
        "side"
      ]
    },
    resizeOptions: [
      {
        name: "resizeImage:original",
        label: "Default image width",
        value: null
      },
      {
        name: "resizeImage:50",
        label: "50% page width",
        value: "50"
      },
      {
        name: "resizeImage:75",
        label: "75% page width",
        value: "75"
      }
    ],
    toolbar: [
      "imageTextAlternative",
      "toggleImageCaption",
      "linkImage",
      "|",
      "imageStyle:inline",
      "imageStyle:wrapText",
      "imageStyle:breakText",
      "imageStyle:side",
      "|",
      "resizeImage"
    ]
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Open in a new tab",
        defaultValue: true,
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer"
        }
      },
      toggleDownloadable: {
        mode: "manual",
        label: "Downloadable",
        attributes: {
          download: "file"
        }
      }
    },
    addTargetToExternalLinks: true,
    defaultProtocol: "https://"
  },
  style: {
    definitions: [
      {
        name: "Title",
        element: "h1",
        classes: ["document-title"]
      },
      {
        name: "Subtitle",
        element: "h2",
        classes: ["document-subtitle"]
      },
      {
        name: "Callout",
        element: "p",
        classes: ["callout"]
      },
      {
        name: "Side quote",
        element: "blockquote",
        classes: ["side-quote"]
      },
      {
        name: "Needs clarification",
        element: "span",
        classes: ["needs-clarification"]
      },
      {
        name: "Wide spacing",
        element: "span",
        classes: ["wide-spacing"]
      },
      {
        name: "Small caps",
        element: "span",
        classes: ["small-caps"]
      },
      {
        name: "Code (dark)",
        element: "pre",
        classes: ["stylish-code", "stylish-code-dark"]
      },
      {
        name: "Code (bright)",
        element: "pre",
        classes: ["stylish-code", "stylish-code-bright"]
      }
    ]
  }
};
const LightConfig = {
  ...BaseConfig,
  plugins: [
    CKEditor5__namespace.Autoformat,
    CKEditor5__namespace.Bold,
    CKEditor5__namespace.Italic,
    CKEditor5__namespace.Essentials,
    CKEditor5__namespace.GeneralHtmlSupport,
    CKEditor5__namespace.Heading,
    CKEditor5__namespace.Image,
    CKEditor5__namespace.ImageCaption,
    CKEditor5__namespace.ImageStyle,
    CKEditor5__namespace.ImageToolbar,
    CKEditor5__namespace.ImageUpload,
    CKEditor5__namespace.Indent,
    CKEditor5__namespace.Link,
    CKEditor5__namespace.List,
    CKEditor5__namespace.Paragraph,
    CKEditor5__namespace.PasteFromOffice,
    CKEditor5__namespace.Table,
    CKEditor5__namespace.TableToolbar,
    CKEditor5__namespace.TableColumnResize,
    CKEditor5__namespace.TableCaption,
    CKEditor5__namespace.WordCount,
    CKEditor5__namespace.SourceEditing
    // StrapiMediaLibPlugin,
  ],
  toolbar: [
    "undo",
    "redo",
    "|",
    "heading",
    "|",
    "bold",
    "italic",
    "|",
    "link",
    /*'strapiMediaLib',*/
    "insertTable",
    "|",
    "bulletedList",
    "numberedList"
  ],
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
      { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
      { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
      { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" }
    ]
  },
  image: {
    toolbar: [
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "|",
      "toggleImageCaption",
      "imageTextAlternative"
    ]
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "|",
      "toggleTableCaption"
    ]
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Open in a new tab",
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer"
        }
      }
    }
  }
};
const RichConfig = {
  ...BaseConfig,
  plugins: [
    CKEditor5__namespace.Alignment,
    CKEditor5__namespace.Autoformat,
    CKEditor5__namespace.Bold,
    CKEditor5__namespace.Italic,
    CKEditor5__namespace.Underline,
    CKEditor5__namespace.Strikethrough,
    CKEditor5__namespace.Code,
    CKEditor5__namespace.CodeBlock,
    CKEditor5__namespace.GeneralHtmlSupport,
    CKEditor5__namespace.Subscript,
    CKEditor5__namespace.Superscript,
    CKEditor5__namespace.BlockQuote,
    CKEditor5__namespace.Essentials,
    CKEditor5__namespace.FontSize,
    CKEditor5__namespace.FontFamily,
    CKEditor5__namespace.FontColor,
    CKEditor5__namespace.FontBackgroundColor,
    CKEditor5__namespace.FindAndReplace,
    CKEditor5__namespace.Heading,
    CKEditor5__namespace.HorizontalLine,
    CKEditor5__namespace.HtmlEmbed,
    CKEditor5__namespace.Image,
    CKEditor5__namespace.ImageCaption,
    CKEditor5__namespace.ImageStyle,
    CKEditor5__namespace.ImageToolbar,
    CKEditor5__namespace.ImageUpload,
    CKEditor5__namespace.ImageResize,
    CKEditor5__namespace.Indent,
    CKEditor5__namespace.IndentBlock,
    CKEditor5__namespace.Link,
    CKEditor5__namespace.LinkImage,
    CKEditor5__namespace.List,
    CKEditor5__namespace.ListProperties,
    CKEditor5__namespace.TodoList,
    CKEditor5__namespace.MediaEmbed,
    CKEditor5__namespace.Paragraph,
    CKEditor5__namespace.PasteFromOffice,
    CKEditor5__namespace.RemoveFormat,
    CKEditor5__namespace.SpecialCharacters,
    CKEditor5__namespace.SpecialCharactersArrows,
    CKEditor5__namespace.SpecialCharactersEssentials,
    CKEditor5__namespace.SpecialCharactersCurrency,
    CKEditor5__namespace.SpecialCharactersLatin,
    CKEditor5__namespace.SpecialCharactersMathematical,
    CKEditor5__namespace.SpecialCharactersText,
    CKEditor5__namespace.Table,
    CKEditor5__namespace.TableToolbar,
    CKEditor5__namespace.TableProperties,
    CKEditor5__namespace.TableCellProperties,
    CKEditor5__namespace.TableColumnResize,
    CKEditor5__namespace.TableCaption,
    CKEditor5__namespace.WordCount,
    CKEditor5__namespace.Highlight,
    CKEditor5__namespace.SourceEditing
    // StrapiMediaLibPlugin,
  ],
  toolbar: {
    items: [
      "undo",
      "redo",
      "|",
      "findAndReplace",
      "selectAll",
      "|",
      "heading",
      "|",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "superscript",
      "subscript",
      "code",
      "removeFormat",
      "-",
      "link",
      // 'strapiMediaLib',
      "mediaEmbed",
      "insertTable",
      "horizontalLine",
      "blockQuote",
      "codeBlock",
      "htmlEmbed",
      "specialCharacters",
      "highlight",
      "|",
      "alignment",
      "|",
      "bulletedList",
      "numberedList",
      "todoList",
      "outdent",
      "indent",
      "|",
      "SourceEditing"
    ],
    shouldNotGroupWhenFull: true
  },
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
      { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
      { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
      { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" }
    ]
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true
    }
  },
  image: {
    resizeUnit: "%",
    resizeOptions: [
      {
        name: "resizeImage:original",
        value: null,
        icon: "original"
      },
      {
        name: "resizeImage:25",
        value: "25",
        icon: "small"
      },
      {
        name: "resizeImage:50",
        value: "50",
        icon: "medium"
      },
      {
        name: "resizeImage:75",
        value: "75",
        icon: "large"
      }
    ],
    toolbar: [
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "|",
      "toggleImageCaption",
      "imageTextAlternative",
      "|",
      "linkImage",
      "|",
      "resizeImage:25",
      "resizeImage:50",
      "resizeImage:75",
      "resizeImage:original"
    ]
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "|",
      "tableCellProperties",
      "tableProperties",
      "|",
      "toggleTableCaption"
    ]
  },
  fontSize: {
    options: [
      9,
      11,
      13,
      "default",
      17,
      19,
      21,
      27,
      35
    ],
    supportAllValues: false
  },
  fontFamily: {
    options: [
      "default",
      "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
      "Courier New, Courier, monospace",
      "Georgia, serif",
      "Lucida Sans Unicode, Lucida Grande, sans-serif",
      "Tahoma, Geneva, sans-serif",
      "Times New Roman, Times, serif",
      "Trebuchet MS, Helvetica, sans-serif",
      "Verdana, Geneva, sans-serif",
      "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif"
    ],
    supportAllValues: true
  },
  fontColor: {
    columns: 5,
    documentColors: 10
  },
  fontBackgroundColor: {
    columns: 5,
    documentColors: 10
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Open in a new tab",
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer"
        }
      }
    }
  }
};
const StandardConfig = {
  ...BaseConfig,
  plugins: [
    CKEditor5__namespace.Autoformat,
    CKEditor5__namespace.AutoImage,
    CKEditor5__namespace.Bold,
    CKEditor5__namespace.Italic,
    CKEditor5__namespace.BlockQuote,
    CKEditor5__namespace.CodeBlock,
    CKEditor5__namespace.GeneralHtmlSupport,
    CKEditor5__namespace.Essentials,
    CKEditor5__namespace.Heading,
    CKEditor5__namespace.Image,
    CKEditor5__namespace.ImageCaption,
    CKEditor5__namespace.ImageStyle,
    CKEditor5__namespace.ImageToolbar,
    CKEditor5__namespace.ImageUpload,
    CKEditor5__namespace.Indent,
    CKEditor5__namespace.Link,
    CKEditor5__namespace.LinkImage,
    CKEditor5__namespace.List,
    CKEditor5__namespace.MediaEmbed,
    CKEditor5__namespace.Paragraph,
    CKEditor5__namespace.PasteFromOffice,
    CKEditor5__namespace.Table,
    CKEditor5__namespace.TableToolbar,
    CKEditor5__namespace.TableColumnResize,
    CKEditor5__namespace.TableCaption,
    CKEditor5__namespace.WordCount,
    CKEditor5__namespace.SourceEditing
    // StrapiMediaLibPlugin,
  ],
  toolbar: [
    "undo",
    "redo",
    "|",
    "heading",
    "|",
    "bold",
    "italic",
    "|",
    "link",
    /*'strapiMediaLib',*/
    "mediaEmbed",
    "blockQuote",
    "insertTable",
    "codeBlock",
    "|",
    "bulletedList",
    "numberedList",
    "outdent",
    "indent"
  ],
  heading: {
    options: [
      { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
      { model: "heading1", view: "h1", title: "Heading 1", class: "ck-heading_heading1" },
      { model: "heading2", view: "h2", title: "Heading 2", class: "ck-heading_heading2" },
      { model: "heading3", view: "h3", title: "Heading 3", class: "ck-heading_heading3" },
      { model: "heading4", view: "h4", title: "Heading 4", class: "ck-heading_heading4" }
    ]
  },
  image: {
    toolbar: [
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
      "|",
      "toggleImageCaption",
      "imageTextAlternative",
      "|",
      "linkImage"
    ]
  },
  table: {
    contentToolbar: [
      "tableColumn",
      "tableRow",
      "mergeTableCells",
      "|",
      "toggleTableCaption"
    ]
  },
  link: {
    decorators: {
      openInNewTab: {
        mode: "manual",
        label: "Open in a new tab",
        attributes: {
          target: "_blank",
          rel: "noopener noreferrer"
        }
      }
    }
  }
};
function normalizeConfig({ maxLengthCharacters, ...options }) {
  const baseConfig = getBaseConfig(options.preset);
  if (options.output === "Markdown") {
    baseConfig.plugins.push(CKEditor5.Markdown);
  }
  return baseConfig;
}
function getBaseConfig(preset) {
  switch (preset) {
    case "light":
      return LightConfig;
    case "standard":
      return StandardConfig;
    case "rich":
      return RichConfig;
    default:
      throw new TypeError(`Invalid preset name: ${preset}`);
  }
}
const MediaLibIcon = "data:image/svg+xml,%3csvg%20width='1em'%20height='1em'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.3.6a.9.9%200%20100%201.8h15.311a.9.9%200%20100-1.8H4.301zm17.1%203.7A1.6%201.6%200%200123%205.9v15.5a1.6%201.6%200%2001-1.6%201.6H2.6A1.601%201.601%200%20011%2021.4V8%205.915C1%205.03%201.716%204.3%202.6%204.3h18.8zM5.032%2019.18h14.336l-3.136-3.205-1.792%201.831-4.032-4.12-5.376%205.494zm13.44-8.697c0%201.282-.985%202.289-2.24%202.289-1.254%200-2.24-1.007-2.24-2.29%200-1.281.986-2.288%202.24-2.288%201.255%200%202.24%201.007%202.24%202.289z'%3e%3c/path%3e%3c/svg%3e";
class StrapiMediaLibPlugin extends CKEditor5.Plugin {
  static pluginName = "strapiMediaLib";
  /**
   * Strapi function used to show media library modal.
   * Should be provided via connect method before using toggle method.
   *
   * @type {function|null}
   */
  strapiToggle = null;
  init() {
    this.editor.ui.componentFactory.add(StrapiMediaLibPlugin.pluginName, () => {
      const button = new CKEditor5.ButtonView();
      button.set({
        label: "Media Library",
        icon: MediaLibIcon,
        tooltip: true
      });
      button.on("execute", this.toggle.bind(this));
      return button;
    });
  }
  connect(strapiToggle) {
    if (typeof strapiToggle !== "function") {
      throw new TypeError("Input parameter for toggle should be a function");
    }
    this.strapiToggle = strapiToggle;
  }
  toggle() {
    if (typeof this.strapiToggle !== "function") {
      throw new TypeError("Strapi media library toggle function not connected. Use connect function first");
    }
    this.strapiToggle();
  }
}
const common = styledComponents.css`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
    --ck-font-size-normal: 1rem;
  }


  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }

  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;

    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1, h2, h3, h4, h5, h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote, ol, p, ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul, ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused, .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;

      ::-webkit-scrollbar {
        width: 7px;
      }

      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }

      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }

      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }

      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea {
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;

    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }

    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
        & > div:first-child{
          order: 2;
        }
        & > div:last-child{
          order: 1;
        }
      }
    }
  }
`;
const light = styledComponents.css`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    --ck-powered-by-background: #ffffff;
    --ck-powered-by-border-color: #ffffff;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: #001234;
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`;
const dark = styledComponents.css`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;
    --ck-powered-by-background: #212134;
    --ck-powered-by-border-color: #212134;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: rgb(236, 236, 236);
  }

  .ck.ck-powered-by > a > svg > path:nth-child(3) {
    fill: rgb(172, 156, 251);
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }
`;
const additional = styledComponents.css`
  /* --- expanding --- */
  .ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
  .ck.ck-editor__main .ck-focused {
    max-height: 700px;
  }

  /* --- color-grid --- */

  .ck.ck-color-ui-dropdown {
    --ck-color-grid-tile-size: 22px !important;
  }
  .ck.ck-color-grid__tile{
    width:auto;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid {
    grid-gap: 2px;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
    border-radius: 2px;
  }
  .ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
  .ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
    z-index: 1;
    transform: scale(1.1);
    border-radius: 2px;
  }

  /* ---- Style feature config ------------------------------------------------------ */

  :root {
    --ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
  }

  .ck-content h1.document-title {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 50px;
    font-weight: bold;
    border: 0;
  }

  .ck-content h2.document-subtitle {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 20px;
    font-weight: bold;
    color: #d1d1d1;
    letter-spacing: 10px;
  }

  .ck-content p.callout {
    --border-color: #e91e1e;
    padding: 1.2em 2em;
    border: 1px solid var(--border-color);
    border-left: 10px solid var(--border-color);
    background: #fff9fb;
    border-radius: 5px;
    margin: 1.5em 2em;
    box-shadow: 5px 5px 0 #ffe6ef;
  }

  .ck-content blockquote.side-quote {
    font-family: var(--ck-georgia-serif-font-stack);
    font-style: normal;
    float: right;
    width: 35%;
    position: relative;
    border: 0;
    overflow: visible;
    z-index: 1;
    margin-left: 1em;
  }

  .ck-content blockquote.side-quote::before {
    content: "“";
    position: absolute;
    top: -37px;
    left: -10px;
    display: block;
    font-size: 200px;
    color: #e7e7e7;
    z-index: -1;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p {
    font-size: 2em;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p:last-child:not(:first-child) {
    font-size: 1.3em;
    text-align: right;
    color: #555;
  }

  .ck-content span.needs-clarification {
    outline: 1px dashed #c8a24b;
    background: #ffe19c;
    border-radius: 2px;
    position: relative;
  }

  .ck-content span.needs-clarification::after {
    content: "?";
    display: inline-block;
    color: #fff;
    background: #3b3b3b;
    font-size: 12px;
    vertical-align: super;
    width: 12px;
    height: 12px;
    line-height: 12px;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    right: -6px;
    top: -6px;
    font-weight: bold;
    letter-spacing: initial;
  }

  .ck-content span.wide-spacing {
    letter-spacing: 0.3em;
  }

  .ck-content span.small-caps {
    font-variant: small-caps;
  }

  .ck-content span.spoiler {
    background: #000;
    color: #000;
  }

  .ck-content span.spoiler:hover {
    background: #000;
    color: #fff;
  }

  .ck-content pre.stylish-code {
    border-color: transparent;
    margin-left: 2em;
    margin-right: 2em;
    border-radius: 10px;
  }

  .ck-content pre.stylish-code::before {
    content: "";
    display: block;
    height: 13px;
    background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==) no-repeat;
    margin-bottom: 8px;
  }

  .ck-content pre.stylish-code-dark,
  .ck-content pre.stylish-code-bright {
    padding: 1em;
  }

  .ck-content pre.stylish-code-dark {
    background: #272822;
    box-shadow: 5px 5px 0 #0000001f;
    color: white;
  }

  .ck-content pre.stylish-code-dark code {
    color: white;
  }

  .ck-content pre.stylish-code-bright {
    background: #dddfe0;
    color: #000;
    box-shadow: 5px 5px 0 #b3b3b3;
  }

  .ck-content pre.stylish-code-bright code {
    color: #222;
  }
`;
const InputStyles = (() => {
  const storedTheme = localStorage.getItem("STRAPI_THEME");
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const palettes = [common];
  const theme = storedTheme ?? defaultTheme;
  if (theme === "light") {
    palettes.push(light);
  } else if (theme === "dark") {
    palettes.push(dark);
  }
  palettes.push(additional);
  return styledComponents.createGlobalStyle`${palettes.join(" ")}`;
})();
const CKEditorInput = ({
  attribute,
  onChange,
  name,
  value = "",
  disabled = false,
  labelAction = null,
  intlLabel,
  required = false,
  description = null,
  error = null
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const [editorInstance, setEditorInstance] = react.useState(null);
  const [uploadPluginConfig, setUploadPluginConfig] = react.useState(null);
  const [mediaLibVisible, setMediaLibVisible] = react.useState(false);
  const wordCounter = react.useRef(null);
  const editorConfig = normalizeConfig(attribute.options);
  const handleToggleMediaLib = () => setMediaLibVisible((prev) => !prev);
  const onEditorReady = (editor) => {
    const wordCountPlugin = editor.plugins.get(CKEditor5.WordCount);
    const wordCountWrapper = wordCounter.current;
    wordCountWrapper.appendChild(wordCountPlugin.wordCountContainer);
    const mediaLibPlugin = editor.plugins.get(StrapiMediaLibPlugin);
    mediaLibPlugin.connect(handleToggleMediaLib);
    setEditorInstance(editor);
  };
  const onEditorChange = (_, editor) => {
    const data = editor.getData();
    onChange?.({ target: { name, value: data } });
    const wordCountPlugin = editor.plugins.get(CKEditor5.WordCount);
    const numberOfCharacters = wordCountPlugin.characters;
    if (numberOfCharacters > attribute.options.maxLengthCharacters) {
      return;
    }
  };
  react.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/${index.strapi.id}/config/upload`);
        const uploadPluginConfig2 = await response.json();
        setUploadPluginConfig(uploadPluginConfig2);
      } catch (error2) {
        console.log(error2);
      }
    })();
  }, []);
  react.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/ckeditor/config/upload`);
        const uploadPluginConfig2 = await response.json();
        console.log("===> uploadPluginConfig: ", uploadPluginConfig2);
        setUploadPluginConfig(uploadPluginConfig2);
      } catch (error2) {
        console.log(error2);
      }
    })();
  }, []);
  if (!editorInstance) {
    return /* @__PURE__ */ jsxRuntime.jsx(
      designSystem.Grid.Root,
      {
        gridCols: 1,
        hasRadius: true,
        children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Loader, {})
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(InputStyles, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      designSystem.Field.Root,
      {
        name,
        id: name,
        error,
        hint: description && formatMessage(description),
        children: [
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { spacing: 2, direction: "column", alignItems: "stretch", children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Label, { action: labelAction, required, children: intlLabel && formatMessage(intlLabel) }),
            /* @__PURE__ */ jsxRuntime.jsx(
              ckeditor5React.CKEditor,
              {
                editor: CKEditor5.ClassicEditor,
                disabled,
                data: value,
                onReady: onEditorReady,
                onChange: onEditorChange,
                config: editorConfig
              }
            ),
            editorConfig.plugins.includes("WordCountPlugin") && /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                color: attribute.options.maxLengthCharacters ? "danger500" : "neutral400",
                ref: wordCounter
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("div", { ref: wordCounter }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {}),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Error, {})
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(
            MediaLib,
            {
              isOpen: mediaLibVisible,
              editor: editorInstance,
              uploadConfig: uploadPluginConfig,
              onToggle: handleToggleMediaLib
            }
          )
        ]
      }
    )
  ] });
};
exports.CKEditorInput = CKEditorInput;
//# sourceMappingURL=index-BMruzlJ4.js.map
