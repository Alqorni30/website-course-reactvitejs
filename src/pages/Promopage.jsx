import {Container, Row, Col} from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";


const Promopage = () => {
  return (
    <div className="promo-page">
      <div className="promo w-100 min-vh-100">
        <Container >
                  <Row>
                      <Col>
                      <h1 className="text-center fw-bold">Promo Spesial untukmu</h1>
                      <p className="text-center">Jangan lewatkan kesempatan Promo-promo menarik ini.</p>
                      </Col>
                  </Row>
                  <Row className="pricing">               
                      <Col lg={4}>
                          <div class="card mb-5 mb-lg-0">
                          <div class="card-body">
                              <h5 class="card-title text-muted text-uppercase text-center">Spesial</h5>
                              <h6 class="card-price text-center fw-bold">Disc 50%</h6>
                              <hr class="bg-dark border-2 border-top border-dark"></hr>
                              <h6 className="fw-bold pb-2">Promo 50%</h6>
                              <p className="pb-5">
                                Dapetin Potongan 50% dengan membeli 1 kelas.
                              </p>
                              <div class="d-grid">
                              <a href="#" class="btn btn-success text-uppercase">Lihat kupon</a>
                              </div>
                          </div>
                          </div>
                      </Col>
                      
                      <Col lg={4}>
                          <div class="card mb-5 mb-lg-0">
                          <div class="card-body">
                              <h5 class="card-title text-muted text-uppercase text-center">Best Promo</h5>
                              <h6 class="card-price text-center fw-bold">Buy 2 Get 1</h6>
                              <hr class="bg-dark border-2 border-top border-dark"></hr>
                              <h6 className="fw-bold pb-2">Promo Bundling</h6>
                              <p className="pb-5">
                                Dapetin harga 99.000/kelas dengan membeli minimal 2 kelas sekaligus.
                                Dan Gratis 1 Kelas Rekomendasi.
                              </p>
                              <div class="d-grid">
                              <a href="#" class="btn btn-success text-uppercase">Cara Pakai</a>
                              </div>
                          </div>
                          </div>
                      </Col>
                      
                      <Col lg={4}>
                          <div class="card">
                          <div class="card-body">
                              <h5 class="card-title text-muted text-uppercase text-center">Prioritas</h5>
                              <h6 class="card-price text-center fw-bold">Member</h6>
                              <hr class="bg-dark border-2 border-top border-dark"></hr>
                              <h6 className="fw-bold pb-2">Promo Bundling</h6>
                              <p className="pb-5">
                                Sudah jadi member (membeli kelas) ? Dapetin Promo Khusus Member
                              </p>
                              <div class="d-grid">
                              <a href="#" class="btn btn-success text-uppercase">Hubungi Kami!</a>
                              </div>
                          </div>
                          </div>
                      </Col>
                  </Row>
        </Container>
      </div>
      <FaqComponent/>
    </div>
  )
}

export default Promopage

