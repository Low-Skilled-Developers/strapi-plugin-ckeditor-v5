const strapi = {
  id: "ckeditor5",
  name: "CKEditor5",
  description: "CKEditor for strapi v5",
  kind: "plugin",
  type: "richtext"
};
function register({ strapi: strapi$1 }) {
  strapi$1.customFields.register({
    plugin: strapi.id,
    name: strapi.name,
    type: strapi.type
  });
}
export {
  register
};
//# sourceMappingURL=index.mjs.map
