import React from 'react'

import './comments.scss'

export const Comments: React.FC = () => {
  /* eslint-disable */
  // @ts-ignore
  const disqus_config = function() {
    // @ts-ignore
    this.page.url = 'https://reactcraft.dev/exit-early-from-if'
    // @ts-ignore
    this.page.identifier = 'reactcraft'
  }
  /* eslint-enable */

  const script = document.createElement('script')
  const doc = document.head || document.body

  script.src = 'https://reactcraft.disqus.com/embed.js'
  doc.appendChild(script)
  script.setAttribute('data-timestamp', `${new Date()}`)

  return (
    <div className="comments">
      <div className="comments__inner">
        <div id="disqus_thread" />
      </div>
    </div>
  )
}
