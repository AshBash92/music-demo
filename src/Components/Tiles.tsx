import React from 'react';

// The data will look something like this
// {
// albums: {
//         items:{
//             0: [
//                 artists:[
//                     0:
//                     name: "string",
//                     ...
//                 ]
//                 id: "string",
//                 name: "string",
//                 ...
//              ],
//              [1],
//              [2],
//         ... ,
//         [12]
//          }
//     },
//     artists: {...}
//     tracks: {...}
// }

function Tile({  }) {
    return (
        <button className="tile">
            album cover
        </button>
    );
}

function Tiles() {
    return (
        <>
            <div className="board-row">
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="board-row">
                <Tile />
                <Tile />
                <Tile />
            </div>
            <div className="board-row">
                <Tile />
                <Tile />
                <Tile />
            </div>
        </>
    );
}

export default Tiles;
