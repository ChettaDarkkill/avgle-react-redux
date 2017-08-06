import $ from 'jquery'
export const getRandomVideo = (dispatch, state) => {
    dispatch({type:'IMAGE_LOADING'});
     try {
        var page = Math.floor(Math.random() * 20) + 1;
        const avgleApi = 'https://api.avgle.com/v1/videos/${page}';
            $.getJSON(avgleApi).done(data => {
                dispatch({ type:'IMAGES',data:data.response.videos })
            });
    } catch(error) {
       console.log(error)
    }
}
