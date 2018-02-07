import loadPiece from 'sub-package-b';

export default async (pieceName) => {
    const piece = await loadPiece(pieceName);
    return piece.default + 'This is part A';
}