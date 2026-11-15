export default function Team() {
    const teamMembers = [
        { name: "Muhamad Aditia", role: "Fullstack Developer", description: "Mahasiswa Teknik Informatika yang fokus pada pengembangan web dan jaringan." },
        { name: "Muhamad Imanudin", role: "Backend Developer", description: "Berpengalaman dalam manajemen basis data dan pengaturan server." },
        { name: "Muhamad Faqih Rayya", role: "Frontend Developer", description: "Fokus pada pembuatan antarmuka pengguna yang responsif dan interaktif." },
        { name: "Al Hijir", role: "System Analyst", description: "Bertanggung jawab dalam analisis sistem dan perancangan infrastruktur." }
    ];

    return (
        <>
         <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Our Team</h1>
                <p className="lead text-body-secondary">
                  Kenali anggota tim pengembang di balik proyek ini. Kami bekerja sama untuk menghadirkan solusi digital yang inovatif dan andal.
                </p>
                <p>
                  <a href="#" className="btn btn-primary my-2 m-2">
                    Contact Us
                  </a>
                  <a href="#" className="btn btn-secondary my-2">
                    Learn More
                  </a>
                </p>
              </div>
            </div>
          </section>
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                {teamMembers.map((member, index) => (
                  <div className="col" key={index}>
                    <div className="card shadow-sm h-100">
                      <svg
                        aria-label="Placeholder: Member Photo"
                        className="bd-placeholder-img card-img-top"
                        height="225"
                        preserveAspectRatio="xMidYMid slice"
                        role="img"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>{member.name}</title>
                        <rect width="100%" height="100%" fill="#495057"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em" textAnchor="middle">
                          {member.name}
                        </text>
                      </svg>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{member.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                        <p className="card-text flex-grow-1">
                          {member.description}
                        </p>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Profile
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Connect
                            </button>
                          </div>
                          <small className="text-body-secondary">Active</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
    )
}