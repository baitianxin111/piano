//window.player = window.player ||{};
//通过键盘控制audio的播放
//给钢琴的容器添加keydown事件-->通过event.keyCode(key)来区分是哪一个音频
//最后（load）播放为了不影响上一个键
//创建多个audio标签--给钢琴容器，，添加按下事件  触发音频播放方法
(function(){
	function Piano (){
		 this.audioKey =[
		 				"audio/a4.ogg",
		 				"audio/b4.ogg",
		 				"audio/c4.ogg",
		 				"audio/c5.ogg",
		 				"audio/d4.ogg",
		 				"audio/e4.ogg",
		 				"audio/f4.ogg",
		 				"audio/g4.ogg"
		 				];
 
		this.createAudio();
		this.addEventListenr();
	}
	//获取按键
	Piano.prototype.createAudio=function(){
		for(var i=1;i<this.audioKey.length;i++){
			var audio = document.createElement('audio');
			audio.src = this.audioKey[i-1];
			document.body.appendChild(audio);
			audio.id = "key"+i;
		}
		 
	};
	//按下发声
	Piano.prototype.addEventListenr = function(){
		document.body.addEventListener("keydown",function(event){
			console.log(event.key);
			if (/[1-8]/.test( parseInt(event.key))) {
			 var audio = document.querySelector("#key"+event.key);
			 audio.load();
//			audio.load();
			audio.play();
			 
			}  
		});
		 
	};
	 
	window.Piano = Piano;
}());
