// // Code your solution in this file!

// function distanceFromHqInBlocks(distance) {
//     if(distance >= 42) {
//         return distance - 42
//     }
//     else {
//         return 42 - distance;
//     }
// }


// function distanceFromHqInFeet(distance) {
//     if (distance >= 42) {
//         return (distance - 42) * 264
//     }
//     else {
//         return (42 - distance) * 264

//     }
// }

// function distanceTravelledInFeet(distanceTo, distanceFrom) {
//     if (distanceTo >= distanceFrom) {
//         return (distanceTo - distanceFrom) * 264
//     }
//     else {
//         return (distanceFrom - distanceTo) * 264
//     }
// }


// function calculateFarePrice(start, destination) {
//     let distance = distanceTravelledInFeet(start, destination)

//     if (distance <= 400){
//         return 0;
//     } else if (distance > 400 && distance <= 2000){
//         return (distance - 400 ) * .02 
//     } else if (distance >2000 && distance <= 2500){
//         return 25
//     } else {
//     return 'cannot travel that far'
//     }
    
// }















function distanceFromHqInBlocks(distance){
    if (distance >= 42){
        return distance - 42


    }

    else {

      return 42 - distance
    }
}

function distanceFromHqInFeet(distance){

if (distance >= 42) {
    return ((distance - 42) * 264)
}

else { 
    return ((42 - distance) * 264)

}

}

function distanceTravelledInFeet(distanceTo, distanceFrom){
    if (distanceTo >= distanceFrom) {
        return ((distanceTo - distanceFrom) * 264)
    }
    
    else { 
        return ((distanceFrom - distanceTo) * 264)
    
    }
    
    }


function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}
// function calculatesFarePrice(start, destination){
//     let distance = distanceTravelledInFeet(start, destination)

//     if (distance <= 400){
//         return 0;
//     } else if (distance > 400 && distance <= 2000){
//         return (distance - 400 ) * .02 
//     } else if (distance >2000 && distance <= 2500){
//         return 25
//     } else {
//     return 'cannot travel that far'
//     }

// }


