import React from 'react';
import Circle from './Circle';
import Square from './Square';
import Rectangle from './Rectangle';

function App() {
    return (
        <div>
            <Circle radius={5} />
            <Square length={10} />
            <Rectangle length={8} width={4} />
        </div>
    );
}

export default App;

