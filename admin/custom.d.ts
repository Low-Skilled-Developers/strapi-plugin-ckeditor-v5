declare module '@strapi/design-system/*';
declare module '@strapi/design-system';

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
