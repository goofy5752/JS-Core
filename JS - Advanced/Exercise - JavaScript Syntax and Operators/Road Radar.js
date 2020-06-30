function solver(arr) {
    if (arr[1] === 'city' && arr[0] <= 50) {
        console.log('');
    } else if (arr[1] === 'city' && arr[0] > 50 && arr[0] < 70) {
        console.log('speeding');
    } else if (arr[1] === 'city' && arr[0] >= 70 && arr[0] < 90) {
        console.log('excessive speeding');
    } else if (arr[1] === 'city' && arr[0] >= 90) {
        console.log('reckless driving');
    } else if (arr[1] === 'residential' && arr[0] <= 20) {
        console.log('');
    } else if (arr[1] === 'residential' && arr[0] > 20 && arr[0] < 40) {
        console.log('speeding');
    } else if (arr[1] === 'residential' && arr[0] >= 40 && arr[0] < 60) {
        console.log('excessive speeding');
    } else if (arr[1] === 'residential' && arr[0] >= 60) {
        console.log('reckless driving');
    } else if (arr[1] === 'interstate' && arr[0] <= 90) {
        console.log('');
    } else if (arr[1] === 'interstate' && arr[0] > 90 && arr[0] < 110) {
        console.log('speeding');
    } else if (arr[1] === 'interstate' && arr[0] >= 110 && arr[0] < 130) {
        console.log('excessive speeding');
    } else if (arr[1] === 'interstate' && arr[0] >= 130) {
        console.log('reckless driving');
    } else if (arr[1] === 'motorway' && arr[0] <= 130) {
        console.log('');
    } else if (arr[1] === 'motorway' && arr[0] > 130 && arr[0] < 150) {
        console.log('speeding');
    } else if (arr[1] === 'motorway' && arr[0] >= 150 && arr[0] < 170) {
        console.log('excessive speeding');
    } else if (arr[1] === 'motorway' && arr[0] >= 170) {
        console.log('reckless driving');
    }
}

console.log(solver([40, 'city']));