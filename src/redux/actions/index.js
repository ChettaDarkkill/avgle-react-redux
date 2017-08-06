import $ from 'jquery'
export const getRandomImages = (dispatch, state) => {
    dispatch({type:'IMAGE_LOADING'});
     try {
        var page = Math.floor(Math.random() * 20) + 1;
        const imgurApi = 'https://api.avgle.com/v1/videos/${page}';
            $.getJSON(imgurApi).done(data => {
                dispatch({ type:'IMAGES',data:data.response.videos })
            });
    } catch(error) {
       console.log(error)
    }
}
