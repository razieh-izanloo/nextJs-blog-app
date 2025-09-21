import "./table.scss";

export const Table = ({ children }) => {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

export const TableHeader = ({ children }) => {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
};

export const TableBody = ({ children }) => {
  return <tbody className="bg-white">{children}</tbody>;
};

export const TableRow = ({ children }) => {
  return <tr>{children}</tr>;
};

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
