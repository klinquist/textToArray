var stdin = process.openStdin();
var data = '';
stdin.on('data', (chunk) => {
    data += chunk;
});
stdin.on('end', () => {
    data = data.split('\n');
    const newDataArr = [];
    for (let i = 0; i < data.length; i++){
        if (data[i].trim()) {
            newDataArr.push(data[i].trim());
        }
    }
    console.log(JSON.stringify(newDataArr));
});