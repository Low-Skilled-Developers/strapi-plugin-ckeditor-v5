import { ClassicEditor, Editor, EventInfo, WordCount } from 'ckeditor5'
import React, { forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { Field, Flex } from '@strapi/design-system'
// @ts-ignore
import { useField, useForm } from '@strapi/admin/strapi-admin';

import 'ckeditor5/ckeditor5-editor.css'
import 'ckeditor5/ckeditor5.css'
import 'ckeditor5/ckeditor5-content.css'

import { strapi } from '../../../../package.json'
import { MediaLib } from '../media-lib'
import { normalizeConfig } from '../../config/normalize-config'
// import { sanitize } from '../../utils/sanitize'
import { StrapiMediaLibPlugin } from '../../plugins/strapi-media-lib.plugin'
import { InputStyles } from './input.styles'
import { InputV5Props } from './input-v5-props.interface'


export const CKEditorInput = forwardRef<any, InputV5Props>(({
  attribute,
  placeholder,
  name,
  label,
  hint,
  disabled,
  required,
  error,
  labelAction,
}, ref) => {
  // FIXME: doesn't work
  const field = useField(name)

  const [editorInstance, setEditorInstance] = useState<Editor | null>(null)
  const [uploadPluginConfig, setUploadPluginConfig] = useState(null);
  const [mediaLibVisible, setMediaLibVisible] = useState(false)

  const wordCounter = useRef(null)

  const editorConfig = useMemo(() => {
    const config = normalizeConfig(attribute.options)
    config.placeholder = placeholder

    return config
  }, [attribute.options, placeholder])

  const isWordCounterEnabled = useMemo(() => editorConfig.plugins.includes(WordCount), [editorConfig.plugins])

  const handleToggleMediaLib = () => setMediaLibVisible(prev => !prev)

  // const handleChangeAssets = (assets: any[]) => {
  //   let imageHtmlString = ''
  //
  //   assets.map(asset => {
  //     if(asset.mime.includes('image')) {
  //       const url = sanitize(asset.url)
  //       const alt = sanitize(asset.alt)
  //
  //       imageHtmlString += `<img src="${url}" alt="${alt}" />`
  //     }
  //   })
  //
  //   const viewFragment = editorInstance.data.processor.toView(imageHtmlString)
  //   const modelFragment = editorInstance.data.toModel(viewFragment)
  //   editorInstance.model.insertContent(modelFragment)
  //
  //   handleToggleMediaLib()
  // }

  const onEditorReady = (editor: Editor) => {
    if(isWordCounterEnabled) {
      const wordCountPlugin = editor.plugins.get(WordCount)
      const wordCountWrapper = wordCounter.current
      wordCountWrapper.appendChild(wordCountPlugin.wordCountContainer)
    }

    const mediaLibPlugin = editor.plugins.get(StrapiMediaLibPlugin)
    mediaLibPlugin.connect(handleToggleMediaLib)

    setEditorInstance(editor)
  }

  const onEditorChange = (_: EventInfo<string, unknown>, editor: Editor) => {
    const data = editor.getData()

    field.onChange?.({
      target: {
        name,
        value: data,
        type: attribute.type,
      }
    })

    const wordCountPlugin = editor.plugins.get(WordCount)
    const numberOfCharacters = wordCountPlugin.characters

    if(numberOfCharacters > attribute.options.maxLengthCharacters) {
      return
    }
  }


  useEffect(() => {
    (async () => {
      try {
        // FIXME: 404, taken from another plugin realization
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
        error={error}
        required={required || attribute.required}
        disabled={disabled}
        hint={hint}
      >
        <Flex
          direction="column"
          alignItems="stretch"
          gap={1}
        >
          <Field.Label
            action={labelAction}
            name={name}
            // hint={hint}
            // required={attribute.required}
          >
            {label}
          </Field.Label>
          <CKEditor
            ref={ref}
            editor={ClassicEditor}
            config={editorConfig}
            // data={value}
            disabled={disabled}
            onReady={onEditorReady}
            onChange={onEditorChange}
          />
          {
            isWordCounterEnabled &&
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
})
