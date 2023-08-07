
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
                // pen.fillStyle = this.color;
                pen.fillRect(this.cells[i].x * cs, this.cells[i].y * cs, cs-2, cs);
            }

        }
    };

    snake.createSnake();

}


function draw(){

    snake.drawSnake();


}

function update(){

}


function gameloop(){
    draw();
    update();


}


init();

var f = setInterval(gameloop, 100);