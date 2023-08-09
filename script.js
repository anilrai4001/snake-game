
function init(){
    canvas = document.getElementById('mycanvas');
    W = H = canvas.height = canvas.width = 1000;
    pen = canvas.getContext('2d');
    cs = 67;

    snake = {
        init_len : 5,
        color: "blue",
        cells: [],
        direction: "right",
        
        createSnake: function(){
            for( var i = this.init_len ; i>0 ; i--){
                this.cells.push({x:i,y:0});
            }
        },
        
        drawSnake: function(){

            for(var i=0;i<this.cells.length;i++){
                pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x * cs, this.cells[i].y * cs, cs-2, cs-2);
            }

        },


        updateSnake: function(){
            console.log("updating snake");

            this.cells.pop();
            var headX = this.cells[0].x;
            var headY = this.cells[0].y;
            var X,Y;
            if(this.direction=='left'){
                X=headX-1;
                Y=headY;
            }
            else if(this.direction=='right'){
                X=headX+1;
                Y=headY;
            }
            else if(this.direction=='up'){
                X=headX;
                Y=headY-1;
            }
            else if(this.direction=='down'){
                X=headX;
                Y=headY+1;
            }
            
            this.cells.unshift({x:X, y:Y})

            

        }
    };

    snake.createSnake();

    function keyPressed(e){
        var key = e.key;
        if(key=='ArrowUp'){
            snake.direction='up';
        }
        else if(key=='ArrowDown'){
            snake.direction='down';
        }
        else if(key=='ArrowLeft'){
            snake.direction='left';
        }
        else if(key=='ArrowRight'){
            snake.direction='right';
        }
        console.log(snake.direction);
    }



    document.addEventListener('keydown',keyPressed);
}


function draw(){
    pen.clearRect(0,0,W,H);
    snake.drawSnake();
}

function update(){
    snake.updateSnake();
}


function gameloop(){
    draw();
    update();
}


init();

var f = setInterval(gameloop, 100);