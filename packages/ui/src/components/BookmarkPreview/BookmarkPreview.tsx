import React from 'react'
import { BookmarkPreviewProps } from './BookmarkPreview.types'

const DefaultFavicon = props => (
  <>
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        d="M18 22L12 16L6 22V3C6 2.45 6.45 2 7 2H17C17.55 2 18 2.45 18 3V22Z"
      ></path>
    </svg>
  </>
)

const BookmarkPreview: React.FC<BookmarkPreviewProps> = ({
  favicon,
  url,
  folder,
  title,
  category,
}) => {
  const Favicon = favicon
    ? () => <img src={favicon} alt="favicon" className="h-full w-full" />
    : DefaultFavicon

  return (
    <a href={url}>
      <div
        data-testid="bookmark-preview"
        className="flex min-w-[327px] max-w-max items-center space-x-4 rounded-md border border-zinc-100 bg-white px-3 py-2 shadow"
      >
        <div className=" relative h-7 w-7 text-zinc-500">
          <Favicon />
        </div>
        <div className="space-y-2 text-sm">
          {/*  Meta */}
          <div className="font-medium text-zinc-600">{title}</div>
          <div className="space-x-1.5 divide-x-2 text-zinc-400">
            <span>{folder}</span>
            <span className="pl-1.5">{category}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default BookmarkPreview
