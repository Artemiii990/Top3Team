'use client';

import { useState } from 'react';
import ProductsTable from '@/components/admin/ProductsTable';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { useProducts } from '@/src/hooks/useProducts';

export default function ProductsPage() {
  const {
    products,
    search,
    setSearch,
    category,
    setCategory,
    status,
    setStatus,
    addProduct,
    updateProduct,
    deleteProduct,
  } = useProducts();

  const tableProducts = products.map((product: any) => ({
    ...product,
    name: product.product_name,
  }));

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const openCreate = () => {
    setEditing(null);
    setName('');
    setPrice('');
    setOpen(true);
  };

  const openEdit = (product: any) => {
    setEditing(product);
    setName(product.product_name ?? product.name ?? '');
    setPrice(String(product.price));
    setOpen(true);
  };

  const save = async () => {
    if (editing) {
      await updateProduct({
        ...editing,
        product_name: name, // ✅ FIX
        price: Number(price),
      });
    } else {
      await addProduct({
        product_name: name, // ✅ FIX
        price: Number(price),
        category: 'Phones',
        status: 'Active',
      });
    }

    setOpen(false);
  };

  return (
    <div style={{ padding: 24 }}>
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 24,
          alignItems: 'center',
        }}
      >
        <h1>Products</h1>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            style={{
              padding: '10px 14px',
              borderRadius: 10,
              border: '1px solid #ddd',
            }}
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All categories</option>
            <option value="Phones">Phones</option>
            <option value="Laptops">Laptops</option>
            <option value="Audio">Audio</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All status</option>
            <option value="Active">Active</option>
            <option value="Draft">Draft</option>
          </select>

          <Button onClick={openCreate}>
            + Add Product
          </Button>
        </div>
      </div>

      {/* TABLE */}
      <ProductsTable
        products={tableProducts}
        onEdit={openEdit}
        onDelete={deleteProduct}
      />

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>{editing ? 'Edit Product' : 'Create Product'}</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Product name"
          />

          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />

          <Button onClick={save}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
}