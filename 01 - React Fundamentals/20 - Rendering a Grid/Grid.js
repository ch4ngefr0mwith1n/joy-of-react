import { range } from './utils';

function Grid({ numRows, numCols }) {
  return (
    <div className="grid">
      {range(0, numRows).map((row) => (
          <div className="row" key={row.id}>
            {range(0, numCols).map((column) =>(
              <div className="cell" key={column.id}>
                {/*No content here!*/}
              </div>
            ))}
          </div>
      ))}
    </div>
  );
}

export default Grid;