const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let canvasHeight = canvas.height
let canvasWidth = canvas.width

class Grid {

    //Skapar alla olika variabler inuti klassen.
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.column = 5;
        this.row = 5;
        this.size = canvas.height / this.column;
        this.grid = new Array(this.row);
        this.end
    }
    //Skapar en lista i en array som  
    createGrid() {
        for (let i = 0; i < this.grid.length; i++){
            this.grid[i] = new Array(this.column);
        }

        for (let i = 0; i < this.row; i++){
            for (let j = 0; j < this.column; j++){
                this.grid[i][j] = new Cell(i, j, this.size)
                this.grid[i][j].draw()
            }

        }
        this.end = this.grid[4][4]

        this.grid[0][0].draw('red')
        
        this.end.draw('blue')

    }
}

//Skapar en ny grid när koden körs
const grid = new Grid(0,0)

//Skapar celler genom att använda griden som är en lista, och ger den storlek och ritar ut den.
class Cell {
    constructor(x, y, size) {
        this.size = size;
        this.x = x ;
        this.y = y;

        
    }

    draw(col = 'white') {
        ctx.fillStyle = col
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size)
        ctx.strokeRect(this.x * this.size, this.y * this.size, this.size, this.size)
    }
}

function reconstPath(cameFrom, current) {
    let totalPath = []
    this.current = current

    while (this.current.parent){
        totalPath.push(current)
        this.current = cameFrom
        return totalPath;
    }
}

function animate() {



    grid.createGrid()

    requestAnimationFrame(animate)
}

animate()