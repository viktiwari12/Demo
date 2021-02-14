//canvas = document.getElementById("mycanvas");

//canvas.width = 400;
//canvas.height = 400;

// there are a lot of this we can do in canvas
// mainly canvas is used to draw graphics 
// let's have a look what all and how we can do it.

// the first element is "getcontext" this further have various atributes 

//pen = canvas.getContext('2d'); // since we are working in 2-d we will pass a parameter 2d

//pen.fillStyle = "red"

//pen.fillRect(20, 20, 50, 50); // till this moment only a rectagle is being displayed on the screen 

//pen.clearRect(30, 30, 50, 50 ); // this is another method to clear a rectangle, it's similar to creating a rectangle earlier we were creating
            // a rectangle by giving certain dimention now we are ereasing the same recatangle by using same dimention 

/*  Now let's learn GAME LOOP- one of the most intresting thing, it will be the basic of snake game


            For now, we will just leran how to occilate a rectangle b/w two walls 

            to do this, 20

            we have to initilize different object in the game 

            we have to draw a rectangle 
            we have to update it simintaniounsly    */


    // let's create an object called rectangle 

    

    function init()
    {
        canvas = document.getElementById("mycanvas");
        pen = canvas.getContext('2d');
       
        rect =  {
            x : 20, 
            y : 20,
            w : 40,
            h : 40,
            speed : 10,
    
        };
    }

    function draw()
    {
        pen.clearRect(rect.x - rect.speed, rect.y, rect.w, rect.h);
        //pen.beginPath();

        //pen.clearRect(0, 0, canvas.width, canvas.height);
        pen.fillStyle = "red"
        pen.fillRect(rect.x, rect.y, rect.w, rect.h);
        

    }

    function update()
    {
        rect.x += rect.speed;

        if( rect.x > canvas.width - rect.w)
        {
            rect.speed *= -1;
        }
        else if(rect.x == 0)
        {
            rect.speed *= -1;
        }

    }
    function gameloop()
    {
        draw();
        update();
    }
    init();
    draw();
   // gameloop();
    //setInterval(gameloop, 100);

    