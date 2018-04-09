function pad(x){
    if(x < 10) return "0" + x;
    return x;
}

export const simpleDate = (dateObj) => {
    var year = dateObj.getFullYear()
    var month = dateObj.getMonth() + 1
    var day = dateObj.getDate()

    return year + '-' + pad(month) + '-' + pad(day)
}
