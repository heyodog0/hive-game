// GameBoard.jsx
import React from 'react';
import HexGrid from './HexGrid';
import HexPiece from './HexPiece';
// GameBoard.jsx
const GameBoard = ({ 
    board, 
    selectedPiece,
    selectedType,
    hexSize,
    getValidMoves,
    onHexClick,
    onPieceClick,
    calculatePosition,
    canPlace,
    currentPlayer,
    turn,
    isPlacingNew
  }) => {
    
    const validMoves = (!isPlacingNew && selectedPiece) ? 
      getValidMoves(board, selectedPiece, turn) : [];
    
    return (
      <div className="w-full h-full relative">
        <svg width="100%" height="100%" viewBox="0 0 800 800" className="bg-white">
        {Array(21).fill().flatMap((_, r) =>
          Array(21).fill().map((_, q) => {
            const qCoord = q - 10;
            const rCoord = r - 10;
            const pos = calculatePosition(qCoord, rCoord, hexSize);
            
            // Check if this hex is a valid move
            const validMove = validMoves.some(m => 
              m.q === qCoord && 
              m.r === rCoord
            );
            
            const validPlace = (isPlacingNew && selectedType && 
              canPlace(board, qCoord, rCoord, selectedType, currentPlayer, turn));

            return (
              <HexGrid
                key={`${q}-${r}`}
                size={hexSize}
                valid={validPlace}
                validMove={validMove}
                position={pos}
                onClick={() => onHexClick(qCoord, rCoord)}
              />
            );
          })
        )}
        </svg>
        
        {board.map((piece, i) => (
          <HexPiece
            key={i}
            piece={{...piece, board: board}} // Pass the full board for stack calculation
            size={hexSize}
            selected={selectedPiece && 
                     piece.q === selectedPiece.q && 
                     piece.r === selectedPiece.r &&
                     piece.z === selectedPiece.z}
            position={calculatePosition(piece.q, piece.r, hexSize)}
            onClick={() => onPieceClick(piece)}
          />
        ))}
      </div>
    );
  };

export default GameBoard;