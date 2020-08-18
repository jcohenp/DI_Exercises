const arr = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

for (instanceNumber = 0; instanceNumber < arr.length; ++instanceNumber) {
    for ((nextNumber = instanceNumber + 1); nextNumber < arr.length; ++nextNumber) {
        if (arr[instanceNumber] < arr[nextNumber]) {
            tmp = arr[instanceNumber]; // instancenr = 5; nextnr = 0 // tmp =5
            arr[instanceNumber] = arr[nextNumber]; //0 // 0 // 5
            arr[nextNumber] = tmp; // 0 // 5 // 5
        }
    }
    console.log(arr[instanceNumber])
}

let stringArr = arr.toString();
let newStringArr = arr.join("+");
console.log(newStringArr);
newStringArr = arr.join(" ");
console.log(newStringArr);
newStringArr = arr.join("/");
console.log(newStringArr);