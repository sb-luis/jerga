/* 
 * Given a path as a dotted string 'a.b.c.d'
 * search an objec property recursively 
 * return 'undefined' if not found.
 */
const getObjValFromStrPath = (strPath, obj) => {
    const findVal = (keys, val) => {
        if(keys.length){
            const nextKey = keys.splice(0,1);
            if(!nextKey) return;
            const nextVal = val[nextKey];
            if(!nextVal) return;
            return findVal(keys, nextVal); 
        }else{
            return val;
        }
    }

    const keys = strPath.split('.');
    if(!keys.length) return;

    const initKey = keys.splice(0,1);
    const initVal = obj[initKey];
    if(!initVal) return;

    return findVal(keys, initVal);
}

/* 
 * Replace all occurrences of {{name}} 
 * with dict[name]
 */
const formatStr = (str, dict) => {
    if(!dict) return str;

    let result = str;
    Object.keys(dict).forEach(k => {
        result = result.replaceAll(`{{${k}}}`, dict[k]);
    });

    return result;
}

module.exports = {
    locale: null,
    init: (locale) => this.locale = locale,  
    t: (strPath, options) => {
        // find translation string
        let str = getObjValFromStrPath(strPath, this.locale);
        if(!str) return;
        // interpolate variables 
        return formatStr(str, options);
    }
}
