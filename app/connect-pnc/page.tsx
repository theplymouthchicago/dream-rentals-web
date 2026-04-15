'use client'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    Plaid: {
      create: (config: PlaidConfig) => { open: () => void }
    }
  }
}

interface PlaidConfig {
  token: string
  onSuccess: (publicToken: string, metadata: unknown) => void
  onExit: (err: unknown) => void
  receivedRedirectUri?: string
}

export default function ConnectPNC() {
  const [status, setStatus] = useState('')
  const [token, setToken] = useState('')
  const [loading, setLoading] = useState(false)
  const [linkToken, setLinkToken] = useState('')

  useEffect(() => {
    // Load Plaid script
    const script = document.createElement('script')
    script.src = 'https://cdn.plaid.com/link/v2/stable/link-initialize.js'
    script.async = true
    document.body.appendChild(script)

    // Fetch link token from our API
    fetch('/api/plaid/link-token')
      .then(r => r.json())
      .then(d => setLinkToken(d.link_token || ''))
      .catch(() => setStatus('Error loading. Please refresh.'))

    // Handle OAuth redirect return
    const params = new URLSearchParams(window.location.search)
    const oauthStateId = params.get('oauth_state_id')
    if (oauthStateId) {
      setStatus('Completing PNC connection...')
      const savedToken = localStorage.getItem('plaid_link_token')
      if (savedToken) {
        setTimeout(() => initPlaid(savedToken, window.location.href), 1000)
      }
    }
  }, [])

  function initPlaid(lt: string, redirectUri?: string) {
    const config: PlaidConfig = {
      token: lt,
      onSuccess: (publicToken: string) => {
        setToken(publicToken)
        setStatus('✅ Connected! Copy this token and send to Jakobi:')
        setLoading(false)
        // Save to server
        fetch('/api/plaid/exchange', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ public_token: publicToken })
        }).then(r => r.json()).then(d => {
          if (d.success) setStatus('✅ PNC fully connected! Balances are now live in your dashboard.')
        })
      },
      onExit: () => {
        setLoading(false)
        setStatus('Cancelled — try again.')
      }
    }
    if (redirectUri) config.receivedRedirectUri = redirectUri
    const handler = window.Plaid.create(config)
    handler.open()
  }

  function connect() {
    if (!linkToken) { setStatus('Loading... try again in a moment.'); return }
    setLoading(true)
    setStatus('Opening PNC login...')
    localStorage.setItem('plaid_link_token', linkToken)
    initPlaid(linkToken)
  }

  return (
    <div style={{
      minHeight: '100vh', background: '#0f0f1a', display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: '20px',
      fontFamily: '-apple-system, sans-serif'
    }}>
      <div style={{
        background: '#1a1a2e', borderRadius: '20px', padding: '40px',
        maxWidth: '420px', width: '100%', textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>🏦</div>
        <h1 style={{ color: '#c9a84c', fontSize: '22px', marginBottom: '8px' }}>
          Connect PNC Bank
        </h1>
        <p style={{ color: '#888', marginBottom: '28px', fontSize: '14px', lineHeight: 1.6 }}>
          Link your Dream Rentals PNC Business Checking.<br />
          <strong style={{ color: '#c9a84c' }}>Read-only. No payment access.</strong>
        </p>
        <button
          onClick={connect}
          disabled={loading || !linkToken}
          style={{
            background: '#c9a84c', color: '#1a1a2e', border: 'none',
            borderRadius: '12px', padding: '18px', fontSize: '17px',
            fontWeight: 700, cursor: 'pointer', width: '100%',
            opacity: (loading || !linkToken) ? 0.6 : 1
          }}
        >
          {loading ? 'Connecting...' : 'Connect PNC Bank Account'}
        </button>
        {status && (
          <div style={{ marginTop: '16px', fontSize: '13px', color: '#4ade80' }}>
            {status}
          </div>
        )}
        {token && (
          <div style={{
            background: '#0a0a15', borderRadius: '8px', padding: '12px',
            marginTop: '10px', wordBreak: 'break-all', fontSize: '10px',
            color: '#c9a84c', textAlign: 'left', border: '1px solid #c9a84c'
          }}>
            {token}
          </div>
        )}
      </div>
    </div>
  )
}
