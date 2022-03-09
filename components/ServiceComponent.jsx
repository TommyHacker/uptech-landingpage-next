import { Col, Container, Row } from 'react-bootstrap';

const ServiceComponent = () => {
	return (
		<div className='service-container-bg'>
			<Container className='service-container'>
				<Row>
					<Col xs={12} md={4} className='para'>
						<img
							className='img-fluid service-img-one'
							src='/assets/image-one.png'
						/>
						<h2>Latest Tech</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium molestias fugit, architecto quod ipsum quis earum
							necessitatibus non? Natus consectetur quos iure nulla voluptas
							dolorum quia minus in, maiores vel?
						</p>
					</Col>
					<Col xs={12} md={4} className='para'>
						<img
							className='img-fluid service-img-two'
							src='/assets/image-two.png'
						/>
						<h2>Fast Delivery</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium molestias fugit, architecto quod ipsum quis earum
							necessitatibus non? Natus consectetur quos iure nulla voluptas
							dolorum quia minus in, maiores vel?
						</p>
					</Col>
					<Col xs={12} md={4} className='para'>
						<img
							className='img-fluid service-img-three'
							src='/assets/image-three.png'
						/>
						<h2>Quality Assurance</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium molestias fugit, architecto quod ipsum quis earum
							necessitatibus non? Natus consectetur quos iure nulla voluptas
							dolorum quia minus in, maiores vel?
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ServiceComponent;
