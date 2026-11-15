export default function Contact() {
    return (
        <>
          <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Contact Us</h1>
                <p className="lead text-body-secondary">
                  Punya pertanyaan, masukan, atau ingin bekerja sama? Jangan ragu untuk mengisi formulir di bawah ini atau hubungi kami langsung.
                </p>
              </div>
            </div>
          </section>

          <div className="py-5 bg-body-tertiary">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                  <div className="card shadow-sm p-4">
                    <form>
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control rounded-3" id="floatingName" placeholder="Your Name" />
                        <label htmlFor="floatingName">Full Name</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email Address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <textarea className="form-control rounded-3" placeholder="Leave a message here" id="floatingMessage" style={{ height: "150px" }}></textarea>
                        <label htmlFor="floatingMessage">Message</label>
                      </div>
                      <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">
                        Send Message
                      </button>
                      <small className="text-body-secondary d-block text-center mt-3">
                        Kami akan merespons pesan Anda secepat mungkin.
                      </small>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}