import { ClassicEditor, Editor, EventInfo, WordCount } from 'ckeditor5'
import React, { useEffect, useRef, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useIntl } from 'react-intl'
import { Field, Flex } from '@strapi/design-system'

import 'ckeditor5/ckeditor5-editor.css'
import 'ckeditor5/ckeditor5.css'
import 'ckeditor5/ckeditor5-content.css'

import { strapi } from '../../../../package.json'
import { MediaLib } from '../media-lib'
import { normalizeConfig } from '../../config/normalize-config'
import { sanitize } from '../../utils/sanitize'
import { StrapiMediaLibPlugin } from '../../plugins/strapi-media-lib.plugin'
import { CKEditorInputProps } from './input-props.interface'
import { InputStyles } from './input.styles'


export const CKEditorInput = ({
  attribute,
  onChange,
  name,
  value = '',
  disabled = false,
  labelAction = null,
  intlLabel,
  required = false,
  description = null,
  error = null,
}: CKEditorInputProps) => {
  const { formatMessage } = useIntl()

  const [editorInstance, setEditorInstance] = useState<Editor | null>(null)
  const [uploadPluginConfig, setUploadPluginConfig] = useState(null);
  const [mediaLibVisible, setMediaLibVisible] = useState(false)

  const wordCounter = useRef(null)

  const editorConfig = normalizeConfig(attribute.options)

  const handleToggleMediaLib = () => setMediaLibVisible(prev => !prev)

  const handleChangeAssets = (assets: any[]) => {
    let imageHtmlString = ''

    assets.map(asset => {
      if(asset.mime.includes('image')) {
        const url = sanitize(asset.url)
        const alt = sanitize(asset.alt)

        imageHtmlString += `<img src="${url}" alt="${alt}" />`
      }
    })

    const viewFragment = editorInstance.data.processor.toView(imageHtmlString)
    const modelFragment = editorInstance.data.toModel(viewFragment)
    editorInstance.model.insertContent(modelFragment)

    handleToggleMediaLib()
  }

  const onEditorReady = (editor: Editor) => {
    const wordCountPlugin = editor.plugins.get(WordCount)
    const wordCountWrapper = wordCounter.current
    wordCountWrapper.appendChild(wordCountPlugin.wordCountContainer)

    const mediaLibPlugin = editor.plugins.get(StrapiMediaLibPlugin)
    mediaLibPlugin.connect(handleToggleMediaLib)

    setEditorInstance(editor)
  }

  const onEditorChange = (_: EventInfo<string, unknown>, editor: Editor) => {
    const data = editor.getData()
    onChange?.({ target: { name, value: data } })

    const wordCountPlugin = editor.plugins.get(WordCount)
    const numberOfCharacters = wordCountPlugin.characters

    if(numberOfCharacters > attribute.options.maxLengthCharacters) {
      return
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/${strapi.name}/config/upload`)
        const uploadPluginConfig = await response.json()

        setUploadPluginConfig(uploadPluginConfig)
      } catch(error) {
        console.log(error)
      }
    })();
  }, [])

  return (
    <>
      <InputStyles />
      <Field.Root
        name={name}
        id={name}
        error={error}
        hint={description && formatMessage(description)}
      >
        <Flex spacing={2} direction="column" alignItems="stretch">
          <Field.Label action={labelAction} required={required}>
            {intlLabel && formatMessage(intlLabel)}
          </Field.Label>
          <CKEditor
            editor={ClassicEditor}
            disabled={disabled}
            data={value}
            onReady={onEditorReady}
            onChange={onEditorChange}
            config={editorConfig}
          />
          {
            editorConfig.plugins.includes('WordCountPlugin') &&
            <div
              color={attribute.options.maxLengthCharacters ? "danger500" : "neutral400"}
              ref={wordCounter}>
            </div>
          }
          <Field.Hint />
          <Field.Error />
        </Flex>
        <MediaLib
          isOpen={mediaLibVisible}
          editor={editorInstance}
          uploadConfig={uploadPluginConfig}
          onToggle={handleToggleMediaLib}
        />
      </Field.Root>
    </>
  )
}
