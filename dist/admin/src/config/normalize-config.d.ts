import { EditorConfig } from 'ckeditor5';
interface FieldConfig extends Record<string, any> {
    maxLengthCharacters?: number;
}
export declare function normalizeConfig<T extends FieldConfig = object>({ maxLengthCharacters, ...options }: T): EditorConfig;
export {};
