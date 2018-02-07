const loadPiece = async (pieceName) => {
    if (pieceName === 'a') {
        const pieceA = await
            import(/* webpackChunkName: "piece-a" */'./piece-a');
        return pieceA;
    } else if (pieceName === 'b') {
        const pieceB = await
            import(/* webpackChunkName: "piece-b" */'./piece-b');
        return pieceB;
    } else {
        throw new Error('Piecename has to be `a` or `b`');
    }
};

export default loadPiece;