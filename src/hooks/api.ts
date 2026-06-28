const API = 'http://16.171.141.18:8000/admin/products';

export type Product = {
  id?: number;
  product_name: string;
  category: string;
  price: number;
  status: string;
};

//
// 📥 GET ALL PRODUCTS (ADMIN)
//
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API}/get`);

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

//
// 📥 GET PRODUCT BY NAME
//
export async function fetchProductByName(
  product_name: string
): Promise<Product> {
  const res = await fetch(
    `${API}/get/${encodeURIComponent(product_name)}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch product by name');
  }

  return res.json();
}

//
// ➕ CREATE PRODUCT
//
export async function createProduct(
  data: Product
): Promise<Product> {
  const res = await fetch(`${API}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to create product');
  }

  return res.json();
}

//
// ✏️ UPDATE PRODUCT BY NAME
//
export async function updateProduct(
  product_name: string,
  data: Partial<Product>
): Promise<Product> {
  const res = await fetch(
    `${API}/update/${encodeURIComponent(product_name)}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error('Failed to update product');
  }

  return res.json();
}

//
// ❌ DELETE PRODUCT BY ID
//
export async function deleteProduct(
  product_id: number
): Promise<void> {
  const res = await fetch(`${API}/delete/${product_id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete product');
  }
}