import { AdminInput } from '@strapi/types/dist/plugin/config/strapi-admin';
import { StrapiApp } from '@strapi/admin/dist/admin/src/StrapiApp';
export declare class CKEditorPlugin implements AdminInput {
    private readonly logger;
    constructor();
    register: (app: StrapiApp) => void;
    registerTrads: AdminInput['registerTrads'];
}
