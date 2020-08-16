let namesArray = ["Bob", "Frank", "Nemo"];
let isError = 0;
for (var i = 0;
    (i < namesArray.length); ++i) {
    if (namesArray[i] == "Nemo") {
        document.write('<h1 style="width:100%">I found' +
            namesArray[i] +
            '</h1>');
        console.log('found name' + namesArray[i]);
    } else if (i == namesArray.length) {
        isError = -1;
        console.log(isError);
    }
}