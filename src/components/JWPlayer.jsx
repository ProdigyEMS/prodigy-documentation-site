import { useEffect, useRef, useState } from 'react'

const PLAYER_SCRIPT = 'https://cdn.jwplayer.com/libraries/zkyx7DXI.js'

function generatePlayerId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `jwp-${crypto.randomUUID().slice(0, 8)}`
  }
  return `jwp-${Math.random().toString(36).slice(2, 11)}`
}

export function JWPlayer({ mediaId }) {
  const containerRef = useRef(null)
  const playerIdRef = useRef(generatePlayerId())
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!mediaId) return

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
      if (typeof window.jwplayer !== 'function') {
        setError(true)
        return
      }
      try {
        window.jwplayer(playerId).setup({
          playlist: `https://cdn.jwplayer.com/v2/media/${mediaId}`,
          width: '100%',
          aspectratio: '16:9',
        })
      } catch (_) {
        if (mounted) setError(true)
      }
    }

    const handleError = () => {
      if (mounted) setError(true)
    }

    if (typeof window.jwplayer === 'function') {
      init()
    } else {
      const existing = document.querySelector(`script[src="${PLAYER_SCRIPT}"]`)
      if (existing) {
        scriptEl = existing
        existing.addEventListener('load', init)
        existing.addEventListener('error', handleError)
      } else {
        const script = document.createElement('script')
        script.src = PLAYER_SCRIPT
        script.addEventListener('load', init)
        script.addEventListener('error', handleError)
        document.head.appendChild(script)
        scriptEl = script
      }
    }

    return () => {
      mounted = false
      if (scriptEl) {
        scriptEl.removeEventListener('load', init)
        scriptEl.removeEventListener('error', handleError)
      }
      try {
        window.jwplayer(playerId).remove()
      } catch (_) {}
      try {
        container.innerHTML = ''
      } catch (_) {}
    }
  }, [mediaId])

  if (!mediaId) {
    return (
      <div className="aspect-video w-full flex items-center justify-center bg-gray-100 rounded text-sm text-gray-500">
        No video ID provided.
      </div>
    )
  }

  if (error) {
    return (
      <div className="aspect-video w-full flex items-center justify-center bg-gray-100 rounded text-sm text-gray-500">
        Video unavailable.{' '}
        <a
          href={`https://cdn.jwplayer.com/v2/media/${mediaId}`}
          className="underline ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch here
        </a>
      </div>
    )
  }

  return <div ref={containerRef} />
}
