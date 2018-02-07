export default {
    async loadPart(partName) {
        if (partName === 'a') {
            const partA = await import(/* webpackChunkName: "part-a" */'./part-a');
            return partA;
        } else if (partName === 'b') {
            const partB = await import(/* webpackChunkName: "part-b" */'./part-b');
            return partB;
        } else {
            throw new Error('Partname has to be `a` or `b`');
        }
    }
};