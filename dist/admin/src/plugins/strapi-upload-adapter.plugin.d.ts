import { Plugin } from 'ckeditor5';
import { PluginDependencies } from '@ckeditor/ckeditor5-core/src/plugin';
/**
 * Similar to Simple upload adapter but customized for Strapi.
 * Inspired by https://github.com/ckeditor/ckeditor5/blob/master/packages/ckeditor5-upload/src/adapters/simpleuploadadapter.js
 * Taken from "https://github.com/nshenderov/strapi-plugin-ckeditor/blob/master/admin/src/components/Input/CKEditor/plugins/StrapiUploadAdapter.js"
 */
export default class StrapiUploadAdapter extends Plugin {
    static readonly pluginName = "strapiUploadAdapter";
    static readonly requires: PluginDependencies;
    /**
     * @inheritdoc
     */
    init(): void;
}
declare module '@ckeditor/ckeditor5-core' {
    interface PluginsMap {
        [StrapiUploadAdapter.pluginName]: StrapiUploadAdapter;
    }
}
