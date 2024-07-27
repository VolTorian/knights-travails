console.log("Hello, world!");

const row = 8;
const col = 8;
const graph = [];
const queue = [];

function reset() {
    for (let i = 0; i < row; i++) {
        graph[i] = [];
        for (let j = 0; j < col; j++) {
            graph[i][j] = 9999;
        }
    }
    queue.length = 0;
}

function knightMoves(start, end) {
    reset();
    console.log(graph);

    let position = [start[0], start[1]];
    graph[start[0]][start[1]] = 0;

    while (!finished(position, end)) {
        // check all 8 possible movements
        if ((position[0] + 1 >= 0 && position[0] + 1 < row) && (position[1] + 2 >= 0 && position[1] + 2 < col)) { //check if position is in bounds
            if (graph[position[0] + 1][position[1] + 2] > graph[position[0]][position[1]] + 1) { //check if movement will reduce moves for that spot
                queue.push([position[0] + 1, position[1] + 2]);
                graph[position[0] + 1][position[1] + 2] = graph[position[0]][position[1]] + 1;
            }
        }

        if ((position[0] + 2 >= 0 && position[0] + 2 < row) && (position[1] + 1 >= 0 && position[1] + 1 < col)) {
            if (graph[position[0] + 2][position[1] + 1] > graph[position[0]][position[1]] + 1) {
                queue.push([position[0] + 2, position[1] + 1]);
                graph[position[0] + 2][position[1] + 1] = graph[position[0]][position[1]] + 1;
            }
        }

        if ((position[0] + 2 >= 0 && position[0] + 2 < row) && (position[1] - 1 >= 0 && position[1] - 1 < col)) {
            if (graph[position[0] + 2][position[1] - 1] > graph[position[0]][position[1]] + 1) {
                queue.push([position[0] + 2, position[1] - 1]);
                graph[position[0] + 2][position[1] - 1] = graph[position[0]][position[1]] + 1;
            }
        }

        if ((position[0] + 1 >= 0 && position[0] + 1 < row) && (position[1] - 2 >= 0 && position[1] - 2 < col)) {
            if (graph[position[0] + 1][position[1] - 2] > graph[position[0]][position[1]] + 1) {
                queue.push([position[0] + 1, position[1] - 2]);
                graph[position[0] + 1][position[1] - 2] = graph[position[0]][position[1]] + 1;
            }
        }

        if ((position[0] - 1 >= 0 && position[0] - 1 < row) && (position[1] - 2 >= 0 && position[1] - 2 < col)) {
            if (graph[position[0] - 1][position[1] - 2] > graph[position[0]][position[1]] + 1) {
                queue.push([position[0] - 1, position[1] - 2]);
                graph[position[0] - 1][position[1] - 2] = graph[position[0]][position[1]] + 1;
            }
        }

        if ((position[0] - 2 >= 0 && position[0] - 2 < row) && (position[1] - 1 >= 0 && position[1] - 1 < col)) {
            if (graph[position[0] - 2][position[1] - 1] > graph[position[0]][position[1]] + 1) {
                queue.push([position[0] - 2, position[1] - 1]);
                graph[position[0] - 2][position[1] - 1] = graph[position[0]][position[1]] + 1;
            }
        }

        if ((position[0] - 2 >= 0 && position[0] - 2 < row) && (position[1] + 1 >= 0 && position[1] + 1 < col)) {
            if (graph[position[0] - 2][position[1] + 1] > graph[position[0]][position[1]] + 1) {
                queue.push([position[0] - 2, position[1] + 1]);
                graph[position[0] - 2][position[1] + 1] = graph[position[0]][position[1]] + 1;
            }
        }

        if ((position[0] - 1 >= 0 && position[0] - 1 < row) && (position[1] + 2 >= 0 && position[1] + 2 < col)) {
            if (graph[position[0] - 1][position[1] + 2] > graph[position[0]][position[1]] + 1) {
                queue.push([position[0] - 1, position[1] + 2]);
                graph[position[0] - 1][position[1] + 2] = graph[position[0]][position[1]] + 1;
            }
        }

        position = [queue[0][0], queue[0][1]];
        queue.shift();
    }
    console.log(`Finished after ${graph[end[0]][end[1]]} moves`);
}

function finished(position, end) {
    if (position[0] == end[0] && position[1] == end[1]) {
        return true;
    }
    else {
        return false;
    }
}