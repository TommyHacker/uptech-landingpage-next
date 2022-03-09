import { Col, Container, Row } from 'react-bootstrap';

const AboutComponent = () => {
	return (
		<div className='about-container-bg'>
			<Container>
				<Row>
					<Col xs={12} md={6}>
						<img className='img-fluid' src='/assets/image-about.png' />
					</Col>
					<Col xs={12} md={6} className='about-details'>
						<div>
							<h2>Unparalleled Service</h2>
							<b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
								tempore eaque et ullam, ea, laboriosam officiis hic maxime
								quibusdam obcaecati impedit exercitationem!
							</p>
							<button className='btn btn-customer'>Explore More</button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default AboutComponent;
