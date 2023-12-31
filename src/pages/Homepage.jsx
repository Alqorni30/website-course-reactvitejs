import {Container, Row, Col} from "react-bootstrap";
import Heroimage from "../assets/img/hero.png"
import {kelasTerbaru, dataSwiper} from "../data/index";
import {useNavigate} from "react-router-dom";
import { Accordion } from "react-bootstrap";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import FaqComponent from "../components/FaqComponent";


const Homepage = () => {
  let navigate = useNavigate();
  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
            <Container>
                <Row className="header-box d-flex align-items-center pt-lg-5">
                    <Col lg="6">
                        <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">Temukan <br /> <span>Bakat kreatifmu </span> <br /> Bersama Kami.</h1>
                        <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia vero alias itaque asperiores quae.
                        </p>
                        <button onClick={() => navigate('/kelas')} className="btn btn-success btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">Lihat Kelas</button>
                        <button onClick={() => navigate('/promo')}  className="btn btn-outline-success btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">Lihat Promo</button>
                    </Col>
                    <Col lg="6" className="pt-lg-0 pt-5">
                        <img src={Heroimage} alt="heroimg" className="animate__animated animate__fadeInUp" />
                    </Col>
                </Row>
            </Container>
        </header>
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
        <div className="kelas w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center fw-bold">Kelas Terbaru</h1>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Col>
                </Row>
                <Row>
                    {kelasTerbaru.map((kelas) => {
                        return <Col key={kelas.id} className="shadow rounded">
                            <img src={kelas.image} alt="unsplash.com" className="w-100 mb-5 rounded-top" />
                            <div className="star mb-2 px-3">
                                <i className={kelas.star1}></i>
                                <i className={kelas.star2}></i>
                                <i className={kelas.star3}></i>
                                <i className={kelas.star4}></i>
                                <i className={kelas.star5}></i>
                            </div>
                            <h5 className="mb-5 px-3">{kelas.title}</h5>
                            <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                                <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                                <button className="btn btn-danger rounded-1">{kelas.buy}</button>
                            </div>
                        </Col>
                    })}                 
                </Row>
                <Row>
                    <Col className="text-center">
                        <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/kelas")} >Lihat Semua kelas <i className="fa-solid fa-chevron-right ms-1"></i></button>
                      
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="testimonial py-5 ">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center fw-bold my-5">Testimonial</h1></Col>
                </Row>
                <Row>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {dataSwiper.map((data) => {
                            return <SwiperSlide key={data.id} className="shadow-sm">
                                <p className="desc">{data.desc}</p>
                                <div className="people">
                                    <img src={data.image} alt="" />
                                    <div>
                                        <h5 className="mb-1">{data.name}</h5>
                                        <p className="m-0 fw-bold">{data.skill}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </Row>
            </Container>
        </div>
        {/* section faq */}
        <FaqComponent />
    </div>
  )
}

export default Homepage