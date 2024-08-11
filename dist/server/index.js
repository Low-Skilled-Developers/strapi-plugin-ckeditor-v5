"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.register = register;
//# sourceMappingURL=index.js.map
