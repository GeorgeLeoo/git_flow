export const getTimeStamp = function(date) {
    return new Date(date).getTime()
}

export const uppercaseFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}
