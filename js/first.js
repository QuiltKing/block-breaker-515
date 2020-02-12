window.onload = function() {
 	var saber = document.getElementsByClassName("saber")[0];
 	var ball = document.getElementsByClassName("ball")[0];
 	var speedX = 10;
 	var speedY = 10;
 	var fate = document.getElementById("fate");
 	var div = fate.getElementsByTagName("div");
 	for (var i = 0; i < div.length; i++) {
 		div[i].style.top = div[i].offsetTop + "px";
 		div[i].style.left = div[i].offsetLeft + "px";
 	}
 	for (var i = 0; i < div.length; i++) {
 		div[i].style.position = "absolute";
 	}
 }
 //添加键盘监听
 onkeydown = function(event) {
 	var saber = document.getElementsByClassName("saber")[0];
 	var ball = document.getElementsByClassName("ball")[0];
 	var speedX = 10;//水平速度
 	var speedY = 10;//垂直速度
 	var fate = document.getElementById("fate");
 	var div = fate.getElementsByTagName("div");
 	if (event.keyCode == 68) {
 		saber.style.left = saber.offsetLeft + 50 + "px";//滑块运动速度控制
 	}
 	if (event.keyCode == 65) {
 		saber.style.left = saber.offsetLeft - 50 + "px";
 	}


 	if (event.keyCode == 13) {
 		var timer = null;
 		timer = setInterval(function() {
 			ball.style.left = ball.offsetLeft + speedX + "px";
 			ball.style.top = ball.offsetTop + speedY + "px";
 			document.getElementById("score").innerHTML = 10 - div.length;
 			var num1 = saber.offsetLeft + 200;
 			for (var i = 0; i < div.length; i++) {
 				if (div[i].offsetLeft < ball.offsetLeft && div[i].offsetLeft + 103 > ball.offsetLeft && ball.offsetTop <= 145) {
 					speedY *= -1;
 					fate.removeChild(div[i]);
 					if (i == 5) {
 						speedX = -50;
 						speedY = 50;
 					}
 					break;
 				}
 			}
			//判断小球是否与砖块碰撞
 			if (ball.style.top >= 630 + "px" && ball.offsetLeft >= saber.offsetLeft && ball.offsetLeft <= num1) {
 				speedY *= -1;//改变方向
 			}
 			if (ball.style.top < 560 + "px") {
 				speedY = speedY;
 			}
 			if (ball.style.top < 10 + "px") {
 				speedY *= -1;//改变方向
 			}
 			if (ball.style.left < 0 + "px") {
 				speedX *= -1;//改变方向
 			}
 			if (ball.style.left >= 99 + "%") {
 				speedX *= -1;//改变方向
 			}
			//失败
 			if (ball.style.top > 700 + "px") {
 				alert("来自蔡徐坤的否定,按F5重新开始吧")
 			}
 			console.log(div[8].offsetTop + 33);
 			console.log(div[8].offsetLeft + 103);
 			console.log(ball.offsetTop);
 			console.log(ball.offsetLeft);
 			console.log(div[8].offsetLeft);
 			console.log(div.length);
 			// console.log(speedY);
 			// console.log(ball.offsetLeft);
 		}, 100)
 	}
	//成功
 	if (div.length == 0) {
 		alert("恭喜你,你打篮球和蔡徐坤一样哦.游戏结束按F5重新开始")
 	}
 	// function konck(node1,node2){
 	//  var l1=node1.offsetLeft;
 	//  var r1=node1.offsetLeft+node1.offsetWidth;
 	//  var t1=node1.offsetTop;
 	//  var b1=node1.offsetTop+node1.offsetHeight;
 	//  var l2=node2.offsetLeft;
 	//  var r2=node2.offsetLeft+node2.offsetWidth;
 	//  var t2=node2.offsetTop;
 	//  var b2=node2.offsetTop+node2.offsetHeight;
 	//  if(l2>r1||r2<l1||t2>b1||b2<t1){
 	//   return false;
 	//  }else{
 	//   return true;
 	//  }
 	// }
 };
