import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>RCN Docs</span>,
  head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="RCN Docs" />
      </>
  ),
  project: {
    link: 'https://github.com/RCNOverwatcher',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/RCNOverwatcher/docs/tree/main',
}

export default config
