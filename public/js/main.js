var videosBlock = get.allArray(".video-block");

console.log(videosBlock);
videosBlock.forEach((block)=> {

	block.addEventListener("click", function(){

		var thisBlock = this;
		var video = this.querySelector("video");

		this.classList.add("on-playing");
		video.play();

		video.onended = function(){
			thisBlock.classList.remove("on-playing");

			// if(!video.classList.contains("w-poster")){
			// 	this.currentTime = 0;
			// }

			video.load();
		}
		
	});
})