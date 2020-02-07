export const getTimeStamp = function(date) {
    return new Date(date).getTime()
}

export const uppercaseFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function timeAgo(time) {
    const between = Date.now() / 1000 - Number(time)
    if (between < 3600) {
      return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
      return pluralize(~~(between / 3600), ' hour')
    } else {
      return pluralize(~~(between / 86400), ' day')
    }
  }
