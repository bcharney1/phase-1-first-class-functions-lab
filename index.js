// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return [ drivers[0], drivers[1] ]
}
const returnLastTwoDrivers = (drivers) => {
    const driverLen = drivers.length
    return [ drivers[driverLen -2], drivers[driverLen -1] ]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
    return (fare) => {return fare * multiplier}
} 

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers, listFunction) => {
    return listFunction(drivers);
}