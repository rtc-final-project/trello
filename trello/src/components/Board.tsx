import Column from "./Columns";
import NewColumnForm from "./forms/NewColumnForm";

const columns = [
  {id: 'asdf', name:'todo', index:0},
  {id: 'dfsg', name:'in progress', index:1},
  {id: 'dxcx', name:'done', index:2},
];

 export type CardType = {
  name: String;
  id: String;
  order: Number;
};

const cards = [
  {id: 'asdf', name:'task 1', order:0, columnId: 'asdf'},
  {id: 'asdx', name:'task 2', order:1, columnId: 'dfsg'},
  {id: 'asdz', name:'task 3', order:2, columnId: 'dxcx'},
];

export default function Board() {
  return (
    <div className="flex gap-4">
      {columns.map((column) => (
          <Column
          {...column}
           cards = {cards.filter(c => c.columnId === column.id)} />
          ))}
        <NewColumnForm />
    </div>
  );
}
