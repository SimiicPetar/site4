
var i =0;
		var images = [];
		var time = 3000;

		images[0]='https://hashtelegraph.com/wp-content/uploads/2018/02/blockchain.jpg';
		images[1]='https://ak5.picdn.net/shutterstock/videos/12424295/thumb/1.jpg';
		

		function changeImg(){
			document.slide.src = images[i];

			if(i < images.length - 1){
				i++;
			} else{
				i=0;
			}

			setTimeout("changeImg()", time);

		}
		window.onload = changeImg;
