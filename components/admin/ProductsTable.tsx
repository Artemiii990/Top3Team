import s from './ProductsTable.module.css';

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
};

type Props = {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: number) => void;
};

export default function ProductsTable({
  products,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className={s.wrapper}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.status}</td>

              <td style={{ display: 'flex', gap: 8 }}>
                <button
                  className={s.editBtn}
                  onClick={() => onEdit(product)}
                >
                  Edit
                </button>

                <button
                  className={s.deleteBtn}
                  onClick={() => onDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}