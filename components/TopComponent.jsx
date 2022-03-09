import { Container, Row, Col } from 'react-bootstrap';

const TopComponent = () => {
	return (
		<>
			<div className='background'></div>
			<div className='texture'>
				<Container className='container-top'>
					<Row className='section-top'>
						<Col xs={12} md={6} className='section-top-left'>
							<img className='img-fluid' src='/assets/mobile.png' />
						</Col>
						<Col xs={12} md={6} className='section-top-right shadow'>
							<div className='plate-mg-container'></div>
							<h6>UPTECH</h6>
							<h2>TECH FOR EVERYONE.</h2>
							<h1>UPTECH</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Laudantium molestias fugit, architecto quod ipsum quis earum
								necessitatibus non? Natus consectetur quos iure nulla voluptas
								dolorum quia minus in, maiores vel?
							</p>
							<button className='btn btn-custom'>Download App</button>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default TopComponent;
