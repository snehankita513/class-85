canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d");
  rover_width = 100;
  rover_height = 90;
   background_image = "mars.jpg";
   rover_image = "rover.png"; 
   rover_x = 10;
    rover_y = 10;

    function add() {

        background_imgTag = new Image();
        background_imgTag.onload = uploadBackground;
        background_imgTag.src = background_image;

        rover_imgTag = new Image;
        rover_imgTag.onload = uploadrover;
        rover_imgTag.src = rover_image;
    }

    function uploadBackground() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); 
          
    }
    
    function uploadrover() {

        ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

    }
    window.addEventListener("keydown", my_keydown);
    
    function my_keydown(e)
    {
        Keypressed = e.keyCode;
        console.log(Keypressed);
        if(Keypressed == '38') 
{
    up();
    console.log("up");
    
}

if(Keypressed == '40') 
{
    down();
    console.log("down");
    
}

if(Keypressed == '37') 
{
    left();
    console.log("left");
    
}

if(Keypressed == '39') 
{
    right();
    console.log("right");
    
}
        
    }

    function up() {

        if(rover_y >= 0)
        {
            rover_y = rover_y - 10;
            console.log("when up arrow is preesed, x = " + rover_x + "| y = " +rover_y);
            uploadBackground();
            uploadrover();


        }
    }


    function down() {

        if(rover_y <= 500)
        {
            rover_y = rover_y + 10;
            console.log("when down arrow is preesed, x = " + rover_x + "| y = " +rover_y);
            uploadBackground();
            uploadrover();


        }
    }


    function left() {

        if(rover_x >= 0)
        {
            rover_x = rover_x - 10;
            console.log("when left arrow is preesed, x = " + rover_x + "| y = " +rover_y);
            uploadBackground();
            uploadrover();


        }
    }


    function right() {

        if(rover_x <= 700)
        {
            rover_x = rover_x + 10;
            console.log("when right arrow is preesed, x = " + rover_x + "| y = " +rover_y);
            uploadBackground();
            uploadrover();


        }
    }

