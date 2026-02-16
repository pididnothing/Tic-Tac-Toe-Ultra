# Tic-Tac-Toe Ultra

A recursive tic-tac-toe game built with React and TypeScript where each cell can contain another complete game board.

## How the Recursive Components Work

### The Recursion Pattern

The game uses two main components that recursively render each other:

**`Tictactoe`** → Creates a 3×3 grid of **`Cell`** components  
**`Cell`** → Renders either a mark ("X" or "O") OR another **`Tictactoe`** component

The recursion is controlled by the `degree` prop:

- **degree = 0**: Each cell displays a simple mark (base case)
- **degree = 1**: Each cell contains a full 3×3 tic-tac-toe board
- **degree = 2**: Each cell contains a board, where each of _those_ cells contains another board
- **degree = n**: n levels of nested boards

### Game Flow

1. Players alternate between "X" and "O" on the deepest level boards
2. When a player wins a nested board, that entire board collapses into their mark
3. The winner mark propagates up to the parent board via `setParentEntry`
4. The game continues until someone wins the top-level board

### Key Implementation Details

- **State propagation**: Winners flow upward through `setParentEntry` callbacks
- **Turn management**: A single `turn` state is passed down through all nested levels
- **Visual scaling**: Font sizes dynamically adjust based on nesting depth using `initialDegree`
- **Color coding**: Grid backgrounds alternate colors (orange/green) at each recursion level
