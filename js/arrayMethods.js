var arr = [];
for( var i= 1; i <= 100;i++){
    arr.push(i);
}

//Filtering an array

var filteredData = arr.filter(function(value,index){
    if(value > 40 && value <60){
        return true;
    }
})


var test = [5,6,7,8,9];

var mappedData = test.map(function(value, index){
    return value * 2;
})

//String
var stringData = "12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,67,68,69,70,80,81,82,83,84,85,86,87,88,89,90"
var convertedArray = stringData.split(",") //This wil generate stringed numbers in array


var transfromedData = convertedArray.map(function(value, index){
    return parseInt(value)
})