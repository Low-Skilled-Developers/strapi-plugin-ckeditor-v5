// import componentsRegistry from '@strapi/core/dist/registries/components'

import { prefixFileUrlWithBackendUrl } from '../../utils/prefix-file-url-with-backend-url'
import { MediaLibFile } from './interfaces/media-lib-file.interface'
import { MediaLibProps } from './interfaces/props.interface'

export const MediaLib = ({
  isOpen = false,
  onToggle = () => {},
  editor,
  uploadConfig
}: MediaLibProps) => {
  // const MediaLibraryDialog = componentsRegistry().get('media-library')

  const handleSelectAssets = (files: MediaLibFile[]) => {
    let newValue = ''

    files.forEach((mediaFile) => {
      const file = {
        name: mediaFile.name,
        alt: mediaFile.alternativeText || mediaFile.name,
        url: prefixFileUrlWithBackendUrl(mediaFile.url),
        mime: mediaFile.mime,
        formats: mediaFile.formats,
        width: mediaFile.width,
        height: mediaFile.height
      }

      if (file.mime.includes("image")) {
        if (file.formats && uploadConfig?.responsiveDimensions) {
          let set = "";
          let keys = Object.keys(file.formats).sort((a, b) => file.formats[a].width - file.formats[b].width);

          keys.map((k) => (set += prefixFileUrlWithBackendUrl(file.formats[k].url) + ` ${file.formats[k].width}w,`));

          newValue += `<img src="${file.url}" alt="${file.alt}" width="${file.width}" height="${file.height}" srcset="${set}" />`;
        } else {
          newValue += `<img src="${file.url}" alt="${file.alt}" width="${file.width}" height="${file.height}" />`;
        }
      } else if (file.mime.includes("video")) {
        newValue += `
          <video class="video" controls width="500px">
            <source src="${file.url}" type="${file.mime}" />
          </video>
        `
      } else {
        newValue += `<a href="${file.url}">${file.name || "Open document"}</a>`
      }
    })


    const viewFragment = editor.data.processor.toView(newValue);
    const modelFragment = editor.data.toModel(viewFragment);
    editor.model.insertContent(modelFragment);

    onToggle();
  }

  if(!isOpen) {
    return null
  }

  // return (
  //   <MediaLibraryDialog
  //     onClose={onToggle}
  //     onSelectAssets={handleSelectAssets}
  //   />
  // )
}
