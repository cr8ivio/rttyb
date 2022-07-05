chrome.bookmarks.onCreated.addListener(function handleBookmarkCreated(id, bookmark) {
  console.log(`[CREATED] Bookmark-${id}`, bookmark)
})
