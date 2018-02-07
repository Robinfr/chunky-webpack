const loadPart = async (partName, pieceName) => {
    if (partName === 'a') {
        const partA = await
            import(/* webpackChunkName: "part-a" */'./part-a');
        const result = await partA.default(pieceName);
        return result;
    } else if (partName === 'b') {
        const partB = await
            import(/* webpackChunkName: "part-b" */'./part-b');
        const result = await(partB.default(pieceName));
        return result;
    } else {
        throw new Error('Partname has to be `a` or `b`');
    }
};

export default loadPart;