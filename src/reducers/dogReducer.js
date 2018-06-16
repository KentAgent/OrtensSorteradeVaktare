import {FETCH_DOG, DOWNLOAD_DOG, DOG_CLICK_THUMBNAIL} from '../actions/types'

const initialState = {
  img_URL : '',
  imagesArray : [],
  photoIndex: 0
}

export default function(state = initialState, action) {
  switch (action.type) {

    case FETCH_DOG:
      var newThumbnailArray = state.imagesArray;
      newThumbnailArray.push(action.payload.message);
      console.log('aa' , action.payload.message);
      return {
        ...state,
        img_URL: action.payload.message,
        imagesArray: newThumbnailArray
      }

    case DOWNLOAD_DOG:
      return {}

    case DOG_CLICK_THUMBNAIL:
      return {}

    default:
      return state

  }
}
