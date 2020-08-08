import { GET_IPAD_INFOS_SUCCESS,
         GET_IPAD_INFOS_FAILED,
         SHOW_HIDE_CONTENT,
         RIGHT_CLICK,
         LEFT_CLICK
 } from './actionTypes'

export const defaultContentState = {
    ipadInfos: {},
    pending: false,
    errorMessage: '',
    contentToggle: true,
    currentIndex: 0
  }

export const contentReducer = (state = defaultContentState, action) => {
    switch (action.type) {
      case GET_IPAD_INFOS_SUCCESS:
        return {
          ...state,
          pending: false,
          ipadInfos: { ...action.payload }
        }
      case GET_IPAD_INFOS_FAILED:
        return {
          ...state,
          pending: false,
          errorMessage: 'Could not find anything'
        }
      case SHOW_HIDE_CONTENT:
        return {
          ...state,
          contentToggle: !state.contentToggle
        }
      case RIGHT_CLICK:
        return {
          ...state,
          currentIndex: state.currentIndex + 1
        }
      case LEFT_CLICK:
        return {
          ...state,
          currentIndex: state.currentIndex - 1
        }
      default:
        return state
    }
  }