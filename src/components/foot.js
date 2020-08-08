import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ContentContext } from '../containers/App'
import '../assets/sass/foot.scss'

function Foot () {
  const contentContext = useContext(ContentContext)
  const currentPageIndex = contentContext?.contentState?.currentIndex
  const contentDetails = contentContext?.contentState?.ipadInfos?.content

/* turn page over by click direction btn/send dispatch to change state
 * @param direction
 * @type left/right 
 * condition init pageIndex from state/length of the content array
*/
  const pageChange = (direction) => {
    if (direction === 'left') {
      if (currentPageIndex === 0) {
      } else {
        contentContext.contentDispatch({ type: 'LEFT_CLICK' })
      }
    } else if (direction === 'right') {
      if (contentDetails && currentPageIndex === (contentDetails && 
          contentDetails.length - 1)) {
      } else {
        contentContext.contentDispatch({ type: 'RIGHT_CLICK' })
      }
    }
  }

  return (
    <div className='footcontainer'>
      <div className='foot'>
        <button onClick={() => pageChange('left')} className='leftarrow'></button>
        <a href='#' onClick={() => pageChange('left')}>
          {
            (currentPageIndex === 0)
              ? 'Prev'
              : contentDetails?.[currentPageIndex - 1].title
          }
        </a>
      </div>
      <div className='foot'>
        <a href='#' onClick={() => pageChange('right')}>{(contentDetails && currentPageIndex === (contentDetails && 
        contentDetails.length - 1))? 'Next': contentDetails && contentDetails[currentPageIndex + 1].title
        }
        </a>
        <button onClick={() => pageChange('right')} className='rightarrow'></button>
      </div>
    </div>
  )
}

Foot.PropTypes = {
  ipadInfos: PropTypes.object.isRequired,
  currentIndex: PropTypes.number.isRequired
}

export default Foot
