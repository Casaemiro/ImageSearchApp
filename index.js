
const input = document.getElementById("search-bar-id");
const display = document.getElementsByClassName("grid")[0];
const inputbtn = document.getElementById("formsection");
console.log(inputbtn);
inputbtn.addEventListener('submit', submit)
// inputbtn.addEventListener('click',function(event){
//     if (event.key == 'Enter')
//     loadImg();
// })
const newInput = document.getElementById("searchbarid");
console.log(newInput);
function submit(event){
    event.preventDefault();
    
    console.log(newInput)
    loadImg();
}
function loadImg(){
    removeImages();
    const url = 'https://api.unsplash.com/search/photos?query='+newInput.value+'&per_page=9&client_id=SF70ZK36aVoMRCrGlSO6tDxwwNY1fg3oX0Tq3uiTh9o';
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }else{
            alert(response.status)
        }
    })
    .then(data =>{
        const imageNode = [];
        console.log("wow")
        console.log(data)
        for(let i = 0;i < data.results.length; i++){ 
            // imageNode[i] = document.createElement('div');
            // imageNode[i].className = "img";
            // imageNode[i].style.backgroundImage = 'url('+data.results[i].urls.regular +')';
            console.log(data.results[i].urls.regular)
            display.innerHTML += "<img src="+ data.results[i].urls.regular +" />"
            // imageNode[i].addEventListener('dblclick',function(){
            //     window.open(data.results[i].links.download, '_blank')
                
            // })
            console.log("wowo")
            // display.appendChild(imageNode[i]);
        }
        // console.log(imageNode)
    }

    )
}
function removeImages(){
    display.innerHTML='';
}