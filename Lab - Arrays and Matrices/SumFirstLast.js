function func(arr){
    let first = '';
    let last = '';

    for (let i = 0; i < arr.length; i++) {
        first = Number(arr[0])
        last = Number(arr[arr.length - 1]);
    }

    console.log(first + last);
}

func(['1', '2', '3']);