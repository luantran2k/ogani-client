export const chunkArray = <T>(array: T[], size: number): T[][] => {
    const length = array.length;
    const res: T[][] = [];
    let index: number = size;
    for (let i = 0; i < length; i += size) {
        res.push(array.slice(i, index));
        index += size;
    }
    return res;
};

export const assginValueForPropertyOfObject = <T, Prop extends keyof T>(
    obj: T,
    prop: Prop,
    value: T[Prop]
): T => {
    obj[prop] = value;
    return obj;
};
export const getMinMax = (array: number[]) => {
    const min = Math.min(...array);
    const max = Math.max(...array);
    return { min, max };
};
