import {FETCH_DOG, DOWNLOAD_DOG, DOG_CLICK_THUMBNAIL} from './types'

export const fetchDog = () => dispatch => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    return response.json();
  })
  .then(result => dispatch({
    type: FETCH_DOG,
    payload: result
  })
  )
}

export const downloadDog = () => dispatch => {
  
}

export const dogThumbNailClicked = () => dispatch => {

}
