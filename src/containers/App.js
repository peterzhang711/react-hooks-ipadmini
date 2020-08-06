import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
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
        contentDispatch({ type: 'GET_IPAD_INFOS_FAILED' })
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

export const ContentContext = React.createContext()
export default App
