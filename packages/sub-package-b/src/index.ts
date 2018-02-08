const loadPiece = async (pieceName: string) => {
    if (pieceName === 'a') {
        const pieceA = await
            import(/* webpackChunkName: "sub-package-b/piece-a" */'./piece-a');
        return pieceA;
    } else if (pieceName === 'b') {
        const pieceB = await
            import(/* webpackChunkName: "sub-package-b/piece-b" */'./piece-b');
        return pieceB;
    } else {
        throw new Error('Piecename has to be `a` or `b`');
    }
};

export default loadPiece;