import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'

import App from 'venadoinforma/app'

ReactGA.initialize('UA-161820237-1')

ReactDOM.render(<App />, document.getElementById('app'))
