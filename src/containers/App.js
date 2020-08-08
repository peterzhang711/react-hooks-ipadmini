import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Foot from '../components/foot'
import Content from '../components/content'
import { contentReducer, defaultContentState } from '../store/contentReducer'
import '../assets/sass/App.scss'

function App () {
  const [contentState, contentDispatch] = useReducer(contentReducer, defaultContentState)
  useEffect(() => {
    axios.get('./content.json')
      .then(res => {
        contentDispatch({ type: 'GET_IPAD_INFOS_SUCCESS', payload: res.data })
      })
      .catch(err => {
        contentDispatch({ type: 'GET_IPAD_INFOS_FAILED',  err})
      })
  }, [])

  return (
    <div className='app'>
      <ContentContext.Provider value = {{ contentState, contentDispatch }}>
        <Title />
        <div className={contentState.contentToggle ? 'show' : 'hide'}>
          <Content />
        </div>
        <Foot />
      </ContentContext.Provider>
    </div>
  )
}

App.PropTypes = {
  contentToggle: PropTypes.bool.isRequired
}

export const ContentContext = React.createContext()
export default App
