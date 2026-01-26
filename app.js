const nextButton = document.querySelector(".nxt-btn");
const video = document.querySelector(".hero-video") ;

const movieList = [ 'videos/hero-1.mp4' , 'videos/hero-2.mp4' , 'videos/hero-3.mp4' , 'videos/hero-4.mp4' ] ;

let idx = 0 ;
nextButton.addEventListener( "click" , () => {
    idx += 1 ;
    video.src = movieList[idx] ;

    //for constant looping
    if( idx === (movieList.length-1) ){
        idx = -1 ; // so that when loop runs and 1 is added , it become 0 and first video runs
    }
})