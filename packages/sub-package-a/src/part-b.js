import loadPiece from 'sub-package-b';

export default async (pieceName) => {
    const piece = await loadPiece(pieceName);
    return piece.default + 'Clearly, this is part B';
}