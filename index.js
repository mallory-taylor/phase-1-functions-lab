// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickUpLocation) {
if (pickUpLocation >= 42) {
    return pickUpLocation - 42;
}
else {
    return 42 - pickUpLocation;
}
}

function distanceFromHqInFeet(pickUpLocation) {
    return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * 264;
    } else { 
        return (destination - start) * 264;
    }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) > 401 && distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if (distanceTravelledInFeet(start, destination) > 2001 &&  distanceTravelledInFeet(start, destination) <= 2499) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }

}
