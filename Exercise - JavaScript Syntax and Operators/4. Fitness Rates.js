function solve(dayOfWeek, service, time) {
    let price;
    if (time >= 8.00 && time <= 15.00 && service === "Fitness" &&
        dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday"){
        price = +5.00;
        console.log(price);
    }
    else if (time >= 8.00 && time <= 15.00 && service === "Sauna" &&
        dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday"){
        price = +4.00;
        console.log(price);
    }
    else if (time >= 8.00 && time <= 15.00 && service === "Instructor" &&
        dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday"){
        price = +10.00;
        console.log(price);
    }
    else if (time >= 8.00 && time <= 15.00 && service === "Fitness" &&
        dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        price = +8.00;
        console.log(price);
    }
    else if (time >= 8.00 && time <= 15.00 && service === "Sauna" &&
        dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        price = +7.00;
        console.log(price);
    }
    else if (time >= 8.00 && time <= 15.00 && service === "Instructor" &&
        dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        price = +15.00;
        console.log(price);
    }
    else if (time >= 15.00 && time <= 22.00 && service === "Fitness" &&
        dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday"){
        price = +7.50;
        console.log(price);
    }
    else if (time >= 15.00 && time <= 22.00 && service === "Sauna" &&
        dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday"){
        price = +6.50;
        console.log(price);
    }
    else if (time >= 15.00 && time <= 22.00 && service === "Instructor" &&
        dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday"){
        price = +12.50;
        console.log(price);
    }
    else if (time >= 15.00 && time <= 22.00 && service === "Fitness" &&
        dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        price = +8.00;
        console.log(price);
    }
    else if (time >= 15.00 && time <= 22.00 && service === "Sauna" &&
        dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        price = +7.00;
        console.log(price);
    }
    else if (time >= 15.00 && time <= 22.00 && service === "Instructor" &&
        dayOfWeek === "Saturday" || dayOfWeek === "Sunday"){
        price = +15.00;
        console.log(price);
    }
}