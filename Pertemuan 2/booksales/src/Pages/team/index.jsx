import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Team() {
    const teamMembers = [
        { 
            name: "Muhamad Aditia", 
            role: "Fullstack Developer", 
            description: "Fokus pada pengembangan aplikasi web end-to-end yang responsif dan berkinerja tinggi.",
            avatarBg: "bg-primary"
        },
        { 
            name: "Muhamad Imanudin", 
            role: "Backend Developer", 
            description: "Ahli dalam perancangan basis data yang aman dan arsitektur server yang andal.",
            avatarBg: "bg-success"
        },
        { 
            name: "Muhamad Faqih Rayya", 
            role: "Frontend Developer", 
            description: "Spesialis dalam menciptakan pengalaman antarmuka pengguna yang interaktif dan estetis.",
            avatarBg: "bg-warning text-dark"
        },
        { 
            name: "Al Hijir", 
            role: "System Analyst", 
            description: "Berpengalaman dalam menerjemahkan kebutuhan bisnis ke dalam spesifikasi sistem yang presisi.",
            avatarBg: "bg-danger"
        }
    ];

    return (
        <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
          <div>
            <Header />
            
            {/* Hero Section */}
            <section className="py-5 text-center container">
              <div className="row py-lg-4">
                <div className="col-lg-8 mx-auto">
                  <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3 fw-semibold">Tim Kami</span>
                  <h1 className="display-5 fw-bold text-dark mb-3">Orang-Orang Hebat di Balik Layar</h1>
                  <p className="lead text-muted">
                    Kami adalah sekumpulan individu yang berdedikasi untuk memberikan solusi digital terbaik dengan kreativitas dan inovasi tanpa batas.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Team Cards Section */}
            <div className="container pb-5">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {teamMembers.map((member, index) => (
                  <div className="col" key={index}>
                    <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden transition-card">
                      <div className={`card-img-top ${member.avatarBg} d-flex align-items-center justify-content-center text-white fw-bold fs-1`} style={{ height: "180px" }}>
                        {member.name.charAt(0)}
                      </div>
                      <div className="card-body p-4 d-flex flex-column">
                        <h4 className="card-title fw-bold fs-5 text-dark mb-1">{member.name}</h4>
                        <span className="text-primary small fw-semibold mb-3">{member.role}</span>
                        <p className="card-text text-muted small flex-grow-1">
                          {member.description}
                        </p>
                        <div className="d-flex gap-2 mt-3 pt-3 border-top">
                          <button className="btn btn-outline-light text-dark btn-sm rounded-pill w-100 border">Profil</button>
                          <button className="btn btn-primary btn-sm rounded-pill w-100">Hubungi</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Footer />
        </div>
    );
}