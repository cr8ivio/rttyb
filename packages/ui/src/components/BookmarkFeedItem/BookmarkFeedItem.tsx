import React from 'react'
import { BookmarkFeedItemProps } from './BookmarkFeedItem.types'
import BookmarkPreview from '../BookmarkPreview'

const BookmarkFeedItem: React.FC<BookmarkFeedItemProps> = ({
  bookmarkInfo,
  source,
  status,
  createdAt,
}) => {
  return (
    <div className="relative flex  space-x-2 pb-8">
      <div className="font-medium text-zinc-700">{createdAt}</div>
      <div className="relative">
        <span
          className="absolute top-2 h-full w-0.5 bg-gray-200"
          aria-hidden="true"
        ></span>
        <span className="absolute top-2 -ml-[0.3110rem] h-3 w-3 rounded-full border border-white bg-gray-200"></span>
      </div>
      <div className="relative">
        <div className="relative ml-2 flex items-start">
          <div className="min-w-0 flex-1">
            <div>
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-900">
                  {source}
                </a>
              </div>
              {/*<p className="mt-0.5 text-sm text-gray-500">last viewed 6d ago</p>*/}
            </div>
            <div className="mt-2">
              <BookmarkPreview {...bookmarkInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookmarkFeedItem
