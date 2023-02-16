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
