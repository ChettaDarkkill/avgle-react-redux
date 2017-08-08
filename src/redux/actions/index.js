import $ from 'jquery'
const API_AV = 'https://api.avgle.com/v1/'
export const getRandomVideo = (dispatch, state) => {
    dispatch({type:'IMAGE_LOADING'});
     try {
        var page = Math.floor(Math.random() * 20) + 1;
        const avgleApi = API_AV + 'videos/${page}';
            $.getJSON(avgleApi).done(data => {
                dispatch({ type:'IMAGES',data:data.response.videos })
            });
    } catch(error) {
       console.log(error)
    }
}

export const getSearchVideo = (dispatch, state) => {
  dispatch({type: 'IMAGE_LOADING'});
  try {
      const avgleApi = API_AV + 'search/'+state.search.text+'/1';
            $.getJSON(avgleApi).done(data => {
                dispatch({ type:'IMAGES',data:data.response.videos })
            });
  } catch (error){
      console.log(error);
  }
}
