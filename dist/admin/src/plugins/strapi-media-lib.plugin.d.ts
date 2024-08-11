import { Plugin } from 'ckeditor5';
export declare class StrapiMediaLibPlugin extends Plugin {
    static readonly pluginName = "strapiMediaLib";
    /**
     * Strapi function used to show media library modal.
     * Should be provided via connect method before using toggle method.
     *
     * @type {function|null}
     */
    private strapiToggle;
    init(): void;
    connect(strapiToggle: Function): void;
    toggle(): void;
}
declare module '@ckeditor/ckeditor5-core' {
    interface PluginsMap {
        [StrapiMediaLibPlugin.pluginName]: StrapiMediaLibPlugin;
    }
}
