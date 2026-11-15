import React from 'react';
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import books from '../Utils/books';

function Home() {
  const featuredBooks = books.slice(0, 3);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
      <div>
        <Header /> {/* Navbar otomatis muncul di sini */}
        
        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h1>Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa.</h1>
        </div>

        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <h2>Buku Populer</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {featuredBooks.map((book) => (
              <div key={book.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#fff' }}>
                <img src={book.image} alt={book.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;