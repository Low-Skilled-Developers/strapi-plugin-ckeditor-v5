const strapi = {
  name: "ckeditor5",
  displayName: "CKEditor5",
  description: "CKEditor for strapi v5",
  kind: "plugin",
  type: "richtext"
};
function register({ strapi: strapi$1 }) {
  strapi$1.customFields.register({
    plugin: strapi.name,
    name: strapi.displayName,
    type: strapi.type
  });
}
export {
  register
};
//# sourceMappingURL=index.mjs.map
