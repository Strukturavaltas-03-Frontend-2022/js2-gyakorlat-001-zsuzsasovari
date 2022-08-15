const concatArrays = (a, ...z) =>{
    let array = [...z].flat();
    array = [...new Set(array)];
    array = array.filter((i) => !i.includes(a));
    array = array.map((i) => i.trimEnd());
    return array;
}

export default concatArrays;