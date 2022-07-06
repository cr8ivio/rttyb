import React from 'react'
import BookmarkPreview from './BookmarkPreview'
import { BookmarkPreviewProps } from './BookmarkPreview.types'
import { Story, Meta } from '@storybook/react'
import imgSrc from '../../stories/assets/twitter-pip.2.ico'

const meta: Meta<BookmarkPreviewProps> = {
  title: 'Components/BookmarkPreview',
  component: BookmarkPreview,
}

const bookmarkInfo = {
  title: 'Lufthansa LH1445',
  favicon: imgSrc,
  url: '#',
  folder: 'Airbus A320-212',
  category: 'Economy',
}

const Template: Story<BookmarkPreviewProps> = args => (
  <BookmarkPreview {...args} />
)

export const WithFavicon = Template.bind({})
WithFavicon.args = {
  title: bookmarkInfo.title,
  url: bookmarkInfo.url,
  folder: bookmarkInfo.folder,
  category: bookmarkInfo.category,
  favicon: bookmarkInfo.favicon,
}

export const WithoutFavicon = Template.bind({})
WithoutFavicon.args = {
  title: bookmarkInfo.title,
  url: bookmarkInfo.url,
  folder: bookmarkInfo.folder,
  category: bookmarkInfo.category,
  favicon: undefined,
}
// export const Secondary = () => <BookmarkPreview theme="secondary" />

export default meta
