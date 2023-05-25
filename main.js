canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');

height = 170;
width = 85;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

x = 5;
y = 225;

function add() {
	background_imageTag = new Image();
	background_imageTag.onload = uploadBackground;
	background_imageTag.src = background_image;

	greencar_imageTag = new Image();
	greencar_imageTag.onload = uploadgreencar;
	greencar_imageTag.src = greencar_image;
}

function uploadBackground() {
	
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	
	ctx.drawImage(greencar_imageTag, x, y, width, height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
	if(y >= 0) {

		y -= 10;
		uploadBackground();
		uploadgreencar();

	}

}

function down()
{
	if(y <= 500) {

		y += 10;
		uploadBackground();
		uploadgreencar();

	}
}

function left()
{
	if(x >= 0) {

		x -= 10;
		uploadBackground();
		uploadgreencar();

	}
}

function right()
{
	if(x <= 700) {

		x += 10;
		uploadBackground();
		uploadgreencar();

	}
}
