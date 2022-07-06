import { BookmarkPreviewProps } from '../BookmarkPreview/BookmarkPreview.types'

export interface BookmarkFeedItemProps {
  createdAt: string
  bookmarkInfo: BookmarkPreviewProps
  source: string
  status: string
}
