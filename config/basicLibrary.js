exports.ignoreErrorAttr = (obj, search = "", re = 0) => {
    const arr = search.split(".");
    if (!obj) {
        return re;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].indexOf("[") >= 0 && arr[i].indexOf("]") >= 0) {
            let index = arr[i].split("[")[1].split("]")[0]
            obj = obj[index];
        } else {
            obj = obj[arr[i]];
        }
        if (obj === undefined) {
            return re;
        }
    }
    return obj;
}