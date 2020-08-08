
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import '../assets/sass/content.scss'
import ipadmini from '../assets/images/ipad-mini.jpg'
import { ContentContext } from '../containers/App'

const Content = () => {
  const contentContext = useContext(ContentContext)
  const currentPageIndex = contentContext?.contentState?.currentIndex
  const contentDetails = contentContext?.contentState?.ipadInfos?.content && contentContext?.contentState?.ipadInfos?.content[currentPageIndex]

  return (
    <div className='content'>
      {contentContext.contentState.ipadInfos.content?.[0]?.thumbnail ? <img src={ipadmini} className='photo'/> : null }
      <div className = 'content-text' dangerouslySetInnerHTML={{ __html: contentDetails && contentDetails?.description }} />
    </div>
  )
}

Content.PropTypes = {
  ipadInfos: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired
}

export default Content
