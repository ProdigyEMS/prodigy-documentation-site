import { useEffect, useRef } from 'react'

const PLAYER_SCRIPT = 'https://cdn.jwplayer.com/libraries/zkyx7DXI.js'

export function JWPlayer({ mediaId }) {
  const containerRef = useRef(null)
  const playerIdRef = useRef(`jwp-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    const playerId = playerIdRef.current
    const container = containerRef.current

    // Create a fresh div for JW Player to target imperatively so JW Player's
    // DOM replacement doesn't interfere with React's reconciliation.
    const playerDiv = document.createElement('div')
    playerDiv.id = playerId
    container.appendChild(playerDiv)

    let scriptEl = null
    let mounted = true

    const init = () => {
      if (!mounted) return
      window.jwplayer(playerId).setup({
        playlist: `https://cdn.jwplayer.com/v2/media/${mediaId}`,
        width: '100%',
        aspectratio: '16:9',
      })
    }

    if (window.jwplayer) {
      init()
    } else {
      const existing = document.querySelector(`script[src="${PLAYER_SCRIPT}"]`)
      if (existing) {
        scriptEl = existing
        existing.addEventListener('load', init)
      } else {
        const script = document.createElement('script')
        script.src = PLAYER_SCRIPT
        script.addEventListener('load', init)
        document.head.appendChild(script)
        scriptEl = script
      }
    }

    return () => {
      mounted = false
      if (scriptEl) scriptEl.removeEventListener('load', init)
      try {
        window.jwplayer(playerId).remove()
      } catch (_) {}
      try {
        container.innerHTML = ''
      } catch (_) {}
    }
  }, [mediaId])

  return <div ref={containerRef} />
}
