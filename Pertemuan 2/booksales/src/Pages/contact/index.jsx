import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Contact() {
    return (
        <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
          <div>
            <Header />

            {/* Header Section */}
            <section className="py-4 text-center container">
              <div className="row py-lg-3">
                <div className="col-lg-8 mx-auto">
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-3 fw-semibold">Pusat Bantuan</span>
                  <h1 className="display-5 fw-bold text-dark mb-2">Mari Terhubung dengan Kami</h1>
                  <p className="lead text-muted fs-6">
                    Punya pertanyaan, kritik, saran, atau ingin berdiskusi? Jangan ragu untuk mengirimkan pesan kepada kami.
                  </p>
                </div>
              </div>
            </section>

            {/* Main Contact Section */}
            <div className="container pb-5">
              <div className="row g-4 justify-content-center">
                
                {/* Info Card */}
                <div className="col-lg-4">
                  <div className="card border-0 shadow-sm rounded-4 p-4 h-100 bg-dark text-white">
                    <h3 className="fw-bold mb-3">Informasi Kontak</h3>
                    <p className="text-white-50 small mb-4">
                      Isi formulir atau hubungi langsung melalui saluran komunikasi kami di bawah ini.
                    </p>
                    
                    <div className="mb-4">
                      <div className="fw-semibold text-primary mb-1">📍 Lokasi</div>
                      <div className="text-white-50 small">Jl. Margonda Raya, Depok, Jawa Barat</div>
                    </div>

                    <div className="mb-4">
                      <div className="fw-semibold text-primary mb-1">📧 Email</div>
                      <div className="text-white-50 small">support@bookstore.com</div>
                    </div>

                    <div className="mb-4">
                      <div className="fw-semibold text-primary mb-1">📞 Telepon</div>
                      <div className="text-white-50 small">+62 812-3456-7890</div>
                    </div>
                  </div>
                </div>

                {/* Form Card */}
                <div className="col-lg-7">
                  <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 h-100 bg-white">
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <div className="form-floating">
                            <input type="text" className="form-control rounded-3 border-light bg-light" id="floatingName" placeholder="Nama Lengkap" />
                            <label htmlFor="floatingName">Nama Lengkap</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <div className="form-floating">
                            <input type="email" className="form-control rounded-3 border-light bg-light" id="floatingEmail" placeholder="name@example.com" />
                            <label htmlFor="floatingEmail">Alamat Email</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3 border-light bg-light" id="floatingSubject" placeholder="Subjek Pesan" />
                        <label htmlFor="floatingSubject">Subjek Pesan</label>
                      </div>

                      <div className="form-floating mb-4">
                        <textarea className="form-control rounded-3 border-light bg-light" placeholder="Tulis pesan Anda..." id="floatingMessage" style={{ height: "140px" }}></textarea>
                        <label htmlFor="floatingMessage">Pesan Anda</label>
                      </div>

                      <button className="w-100 btn btn-lg rounded-3 btn-primary fw-semibold py-3 shadow-sm" type="submit">
                        Kirim Pesan Sekarang 🚀
                      </button>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <Footer />
        </div>
    );
}