function init()
{
    canvas = document.getElementById('mycanvas');
    W = H = canvas.width = canvas.height = 600;
    pen = canvas.getContext('2d');
    pen.fillstyle = "red";
    cs = 50; // cell size

    snake = {    
        len : 5,
        colour : "Blue",
        cell :[],
        direction : "right",
        createsnake : function() 
        {
            for(var i = this.len; i> 0; i--)
            {
                this.cell.push({x : i, y : 1});
            }
        },
        drawsnake: function()
        {
            for(var i = 0; i< this.cell.length; i++)
            {
                pen.fillStyle = this.colour;
                pen.fillRect(this.cell[i].x*cs, this.cell[i].y*cs, cs -10, cs -10 )
            
            }
             
        },

        updatesnake: function()
        {

            this.cell.pop();
            headx = this.cell[0].x;
            heady = this.cell[0].y;
            //console.log(heady);


            // managing the directions
            var nextx, nexty;
            if(this.direction == "right")
            {
                
                nextx = headx +1;
                nexty = heady;
                this.cell.unshift({x : nextx , y : nexty});

            }
            else if(this.direction == "down")
            {
                nextx = headx;
                nexty = heady +1;
                this.cell.unshift({x : nextx , y : nexty});
            }
            else if(this.direction == "left")
            {
                nextx = headx -1;
                nexty = heady;
                this.cell.unshift({x : nextx , y : nexty});
            }
            else if(this.direction == "up")
            {
                nextx = headx ;
                nexty = heady -1;
                this.cell.unshift({x : nextx , y : nexty});
            }

            // managing the boundary 
            
            if(this.cell[0].x*cs + cs -10 >= W)
            {
                //console.log(this.cell[0].x);
               // console.log(W);
              
                nextx = headx;
                nexty = heady +1;
                this.cell.unshift({x : nextx , y : nexty});
                this.cell.pop();

            }
            else if(this.cell[0].y>= H)
            {
                nextx = headx -1;
                nexty = heady;
                this.cell.unshift({x : nextx , y : nexty});
                this.cell.pop();

            }
            else if(this.cell[0].x *cs + cs -10 <=0)
            {
                
                nextx = headx ;
                nexty = heady -1;
                this.cell.unshift({x : nextx , y : nexty});
                this.cell.pop();

            }
            else if(this.cell[0].y *cs + cs -10 <= 0)
            {
                
                nextx = headx ;
                nexty = heady -1;
                this.cell.unshift({x : nextx , y : nexty});
                this.cell.pop();

            }

            
        }
        
    };
    snake.createsnake();
    function keypressed(e)
    {
        if(e.key == "ArrowRight")
        {
            snake.direction = "right";
        }
        else if(e.key == "ArrowLeft")
        {
            snake.direction = "left";
        }
        if(e.key == "ArrowUp")
        {
            snake.direction = "up";
        }
        if(e.key == "ArrowDown")
        {
            snake.direction = "down";
        }
    }

    console.log(snake.direction);

    document.addEventListener('keydown', keypressed);

}


function draw()
{
    pen.clearRect(0,0, W, H);
    snake.drawsnake();

}
function update()
{
    snake.updatesnake();


}
function gameloop()
{
    draw();
    update();
}
init();

setInterval(gameloop,1000);