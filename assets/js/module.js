'use strict';

export const weekDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

/** 
 * @param {number} dataUnix Unix in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date string. format *Sunday 10, Jan 
*/


export const getDate = function(dateUnix , timezone){
    const data = new Date((dateUnix + timezone) * 1000)

    const weekDayName = weekDayNames[date.getUTCDay()]

    const monthName = monthNames[date.getUTCMonth()]

    return `${weekDayName} ${date.getUTCDate()} , ${monthName}`
}


/**
 * 
 * @param {number} timeUnix Unix in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH:MM AM/PM"
 */

export const getTime = function(timeUnix , timezone){
    const data = new Date((timeUnix + timezone) * 1000)

    const hours = date.getUTCHours()

    const minutes = date.getUTCMinutes()

    const period = hours >= 12 ? "PM" : "AM"

    return `${hours % 12 || 12}:${minutes} ${period}`
}

/**
 * 
 * @param {number} timeUnix Unix in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. format: "HH AM/PM"
 */

export const getHours = function(timeUnix , timezone){
    const data = new Date((timeUnix + timezone) * 1000)

    const hours = date.getUTCHours()
    const period = hours >= 12 ? "PM" : "AM"

    return `${hours % 12 || 12} ${period}`
}

/**
 * 
 * @param {number} mps Metter per seconds
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = mps =>{
    const mph = mps * 3600
    return mph / 1000
}

export const aqiText = {
    1 : {
        level: 'Good',
        message: "Air quality is considered statisfactory , and air pollution poses Little or no risk"
    },
    2 : {
        level: 'Fair',
        message: "Air is acceptable; however, for some pollutions there may be a moderate health concern for every small number of people who are anusually sensitive to air pollution."
    },
    3 : {
        level: 'Moderate',
        message: "Members of sensitive groups may experience health effects. The general public is not likely to be effected"
    },
    4 : {
        level: 'Poor',
        message: "Every may begin to experience health effects; members of sensitive groups may experience more serious health effects"
    },
    5 : {
        level: 'Very Poor',
        message: "Wealth warnings of emergency conditions. the entire population is more likely to effected "
    }
}