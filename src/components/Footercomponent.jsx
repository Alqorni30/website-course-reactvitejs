import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"


const Footercomponent = () => {
  return (
    <div className="footer py-5">
        <Container>
            <Row className="d-flex justify-content-between">
                <Col lg="5">
                <h3 className="fw-bold">BimbelCourse.</h3>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptates eligendi animi expedita nesciunt magni enim mollitia eos quidem distinctio.</p>
                <div className="no mb-1 mt-4">
                    <Link className="text-decoration-none">
                    <i className="fa-brands fa-whatsapp"></i>
                    <p className="m-0">+6289765426762</p>
                    </Link>
                </div>
                <div className="email">
                    <Link className="text-decoration-none">
                    <i className="fa-regular fa-envelope"></i>
                    <p className="m-0">examplle@gmail.com</p>
                    </Link>
                </div>
                </Col>
                <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                <h5 className="fw-bold">Menu</h5>
                <Link to="">Home</Link>
                <Link to="kelas">Kelas</Link>
                <Link to="testimonial">Testimonial</Link>
                <Link to="faq">Faq</Link>
                <Link to="syaratketen">Syarat & Ketentuan</Link>
                </Col>
                <Col lg="4" className="mt-lg-0 mt-5">
                <h5 className="fw-bold mb-3">Subscribe untuk info menarik</h5>
                <div className="subscribe">
                    <input type="text" placeholder="subscribe..." />
                    <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
                </div>
                <div className="sosial mt-3">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-tiktok"></i>
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} <span className="fw-bold">by AlqorniBayo</span> | All right reserved.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footercomponent