console.log("Hello, world!");

const row = 8;
const col = 8;
const graph = [];
const queue = [];
const path = [];

function reset() {
    for (let i = 0; i < row; i++) {
        graph[i] = [];
        for (let j = 0; j < col; j++) {
            graph[i][j] = [9999, undefined];
        }
    }
    queue.length = 0;
    path.length = 0;
}

function knightMoves(start, end) {
    reset();

    let position = [start[0], start[1]];
    graph[start[0]][start[1]][0] = 0;

    while (!comparePositions(position, end)) {
        // check all 8 possible movements
        checkPosition(position, 1, 2);
        checkPosition(position, 2, 1);
        checkPosition(position, 2, -1);
        checkPosition(position, 1, -2);
        checkPosition(position, -1, -2);
        checkPosition(position, -2, -1);
        checkPosition(position, -2, 1);
        checkPosition(position, -1, 2);

        position = [queue[0][0], queue[0][1]];
        queue.shift();
    }
    console.log(`Finished after ${graph[end[0]][end[1]][0]} moves`);
    displayGraph();
    getPath(start, end);
}

function checkPosition(position, rowOffset, colOffset) {
    let newRow = position[0] + rowOffset;
    let newCol = position[1] + colOffset;

    if ((newRow >= 0 && newRow < row) && (newCol >= 0 && newCol < col)) { //check if position is in bounds
        if (graph[newRow][newCol][0] > graph[position[0]][position[1]][0] + 1) { //check if position has been visited
            queue.push([newRow, newCol]);
            graph[newRow][newCol][0] = graph[position[0]][position[1]][0] + 1;
            graph[newRow][newCol][1] = [position[0], position[1]]; //set "parent node" position
        }
    }
}

function comparePositions(position1, position2) {
    if (position1[0] == position2[0] && position1[1] == position2[1]) {
        return true;
    }
    else {
        return false;
    }
}

function displayGraph() {
    for (let i = 0; i < row; i++) {
        console.log(graph[i][0][0], graph[i][1][0], graph[i][2][0], graph[i][3][0], graph[i][4][0], graph[i][5][0], graph[i][6][0], graph[i][7][0]);
    }
}

function getPath(start, end) {
    path.unshift(graph[end[0]][end[1]]);

    while (!comparePositions(path[0][1], start)) {
        path.unshift(graph[path[0][1][0]][path[0][1][1]]);
    }

    console.log(`Starting at [${start}]`);
    for (let i = 1; i < path.length; i++) {
        console.log(`Step ${i}: [${path[i][1]}]`);
    }
    console.log(`Ending at step [${end}]`);
}