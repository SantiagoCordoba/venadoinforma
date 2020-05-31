import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Layout } from 'antd'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

import 'antd/dist/antd.css'

const App = () => {
  useEffect(() => {
    ReactGA.pageview('/')
  }, [])

  return (
    <Layout style={{ backgroundColor: '#202429' }}>
      <Layout.Content
        style={{ alignSelf: 'center', maxWidth: 640, width: '100%' }}
      >
        <TwitterTimelineEmbed
          lang='es'
          noFooter
          noHeader
          options={{ tweetLimit: 20 }}
          screenName='VenadoInforma'
          sourceType='profile'
          theme='dark'
        />
      </Layout.Content>
    </Layout>
  )
}

export default App
