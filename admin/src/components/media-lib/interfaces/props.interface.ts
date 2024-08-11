import { Editor } from 'ckeditor5'

export interface MediaLibProps {
  isOpen?: boolean
  onToggle?: () => void
  editor?: Editor
  uploadConfig?: {
    responsiveDimensions?: boolean
  } | null
}
