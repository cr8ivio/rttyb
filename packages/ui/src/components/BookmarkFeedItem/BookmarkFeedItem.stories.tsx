import React from 'react'
import BookmarkFeedItem from './BookmarkFeedItem'
import { BookmarkFeedItemProps } from './BookmarkFeedItem.types'
import { Story, Meta } from '@storybook/react'
import imgSrc from '../../stories/assets/twitter-pip.2.ico'

const meta: Meta<BookmarkFeedItemProps> = {
  title: 'Components/BookmarkFeedItem',
  component: BookmarkFeedItem,
}

const bookmarkInfo = {
  title: 'Lufthansa LH1445',
  favicon: imgSrc,
  url: '#',
  folder: 'Airbus A320-212',
  category: 'Economy',
}

const Template: Story<BookmarkFeedItemProps> = args => (
  <BookmarkFeedItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  bookmarkInfo,
  createdAt: '14:10',
  source: 'DME Moscow Domodedovo Airport',
  status: 'unread',
}

export const Viewed = Template.bind({})
Viewed.args = {
  bookmarkInfo,
  createdAt: '14:10',
  source: 'DME Moscow Domodedovo Airport',
  status: 'viewed',
}

export const Multiple = () => (
  <>
    <Viewed />
    <Viewed />
  </>
)
// export const Secondary = () => <BookmarkFeedItem theme="secondary" />

export default meta
