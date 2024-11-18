let chess = "";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            chess += " ";
        } else {
            chess += "#";
        }
    }
    chess += "\n";
}
console.log(chess);
