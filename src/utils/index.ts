export function removePropertyFromObject (obj: object, key: string = '') {
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (i == key) {
            delete obj[i];
        } else if (typeof obj[i] == 'object') {
            removePropertyFromObject(obj[i], key);
        }
    }
    return obj;
}
