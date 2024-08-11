# CKEditor for strapi v5
# Strapi Plugin for extended text formatting

This is a custom field plugin for richtext field type CKEditor5 for Strapi CMS v5

## Installation

To install this package, you can use npm or yarn:
```bash
npm install @strapi/plugin-ckeditor-v5@https://github.com/Low-Skilled-Developers/strapi-plugin-ckeditor-v5
```

or

```bash
yarn add @strapi/plugin-ckeditor-v5@https://github.com/Low-Skilled-Developers/strapi-plugin-ckeditor-v5
```

## Usage

After installing the package, you need to configure it in your Strapi project.

1. Create a new provider configuration in `config/plugins.ts` or `config/plugins.js`:

```javascript
module.exports = ({ env }) => ({
  // ...
  ckeditor5: {
    enabled: true,
  },
});
```

2. Rebuild your Strapi project:

```bash
strapi build
```

## Configuration

Coming soon...

[//]: # (- `directory`: The directory inside the bucket where you want to store your media. Optional.)

## Knowledge sources

- [Strapi admin panel plugin](https://docs-next.strapi.io/dev-docs/plugins/admin-panel-api)
- [Strapi server plugin](https://docs-next.strapi.io/dev-docs/plugins/server-api)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Acknowledgments

- [Source strapi-ckeditor plugin](https://github.com/ckeditor/strapi-plugin-ckeditor)
- [Popular version of strapi-ckeditor](https://github.com/nshenderov/strapi-plugin-ckeditor)

This package is developed by [Low-Skilled-Developers](https://github.com/Low-Skilled-Developers)
