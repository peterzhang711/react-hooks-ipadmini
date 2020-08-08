import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ContentContext } from '../containers/App'
import '../assets/sass/title.scss'

function Title () {
  const contentContext = useContext(ContentContext)
  const contentDispatch = contentContext?.contentDispatch
  const contentTitle = contentContext.contentState.ipadInfos.title

  return (
    <div className='top'>
      <h1>{contentTitle}</h1>
      <div>
        <div 
        className='top__icon' 
        onClick={() => contentDispatch({ type: 'SHOW_HIDE_CONTENT' })}
        />
      </div>
    </div>
  )
}

Title.PropTypes = {
  ipadInfos: PropTypes.object.isRequired
}

export default Title
