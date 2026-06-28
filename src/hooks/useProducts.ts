'use client';

import { useEffect, useState } from 'react';
import {
  fetchProducts,
  createProduct,
  updateProduct as apiUpdateProduct,
  deleteProduct as apiDeleteProduct,
  Product,
} from '@/src/hooks/api';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');

  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');

  const [loading, setLoading] = useState(false);

  // 📥 загрузка с backend
  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // 🔍 фильтрация уже на фронте (пока без backend filters)
  const filteredProducts = products.filter((p) => {
    const matchSearch = p.product_name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === 'all' || p.category === category;

    const matchStatus =
      status === 'all' || p.status === status;

    return matchSearch && matchCategory && matchStatus;
  });

  // ➕ CREATE
  const addProduct = async (data: Omit<Product, 'id'>) => {
    await createProduct(data);
    await loadProducts();
  };

  // ✏️ UPDATE (по product_name — как у тебя в API)
  const updateProduct = async (updated: Product) => {
    await apiUpdateProduct(updated.product_name, updated);
    await loadProducts();
  };

  // ❌ DELETE
  const deleteProduct = async (id: number) => {
    await apiDeleteProduct(id);
    await loadProducts();
  };

  return {
    products: filteredProducts,

    search,
    setSearch,

    category,
    setCategory,

    status,
    setStatus,

    addProduct,
    updateProduct,
    deleteProduct,

    loading,
  };
}