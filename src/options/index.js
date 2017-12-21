document.addEventListener("DOMContentLoaded", () => {
  const inputNode = document.getElementById('collapse-pattern')
  const pattern = chrome.storage.sync.get('collapsePattern', result => {
    inputNode.value = result.collapsePattern || ''
  })

  inputNode.addEventListener('keydown', e => {
    setTimeout(() => {
      chrome.storage.sync.set({'collapsePattern': e.target.value})
    }, 1)
  })
});