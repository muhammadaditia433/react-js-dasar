import React, { useState } from 'react';
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import booksData from "../../Utils/books";

function Books() {
  // 1. Menggunakan State untuk menyimpan list buku
  const [booksList, setBooksList] = useState(booksData);

  // 2. State untuk form tambah buku (Nilai Tambah)
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    description: '',
    image: ''
  });

  // Handle Input Form
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Tambah Buku
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.author) return;

    const newBook = {
      id: Date.now(),
      ...formData,
      year: parseInt(formData.year) || new Date().getFullYear(),
      image: formData.image || "https://via.placeholder.com/150"
    };

    setBooksList([newBook, ...booksList]); // Tambah buku baru ke paling atas
    
    // Reset Form
    setFormData({
      title: '',
      author: '',
      year: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
      <div>
        {/* Header / Navbar */}
        <Header />

        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Daftar Buku (Best Seller)</h1>

          {/* Form Tambah Buku (Poin 7 - Nilai Tambah) */}
          <div style={{ backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <h3>Tambah Buku Baru</h3>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
              <input
                type="text"
                name="title"
                placeholder="Judul Buku"
                value={formData.title}
                onChange={handleChange}
                required
                style={{ padding: '8px' }}
              />
              <input
                type="text"
                name="author"
                placeholder="Penulis"
                value={formData.author}
                onChange={handleChange}
                required
                style={{ padding: '8px' }}
              />
              <input
                type="number"
                name="year"
                placeholder="Tahun Terbit"
                value={formData.year}
                onChange={handleChange}
                style={{ padding: '8px' }}
              />
              <input
                type="text"
                name="image"
                placeholder="URL Gambar (Opsional)"
                value={formData.image}
                onChange={handleChange}
                style={{ padding: '8px' }}
              />
              <input
                type="text"
                name="description"
                placeholder="Deskripsi Singkat"
                value={formData.description}
                onChange={handleChange}
                style={{ padding: '8px', gridColumn: 'span 2' }}
              />
              <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                + Tambah Buku
              </button>
            </form>
          </div>

          {/* Menampilkan Data Buku Menggunakan `.map()` (Poin 5 & 6) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {booksList.map((book) => (
              <div key={book.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <img 
                  src={book.image} 
                  alt={book.title} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
                />
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>{book.title}</h3>
                  <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '0.9rem' }}>
                    <strong>Penulis:</strong> {book.author} ({book.year})
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#444' }}>{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Books;