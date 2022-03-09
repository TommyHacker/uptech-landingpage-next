import { Col, Container, Row } from 'react-bootstrap';

const ContactComponent = () => {
	return (
		<div className='contact-container-bg'>
			<Container className='contact-container'>
				<Row>
					<Col xs={12} md={6}>
						<h1>UPTECH</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nihil
							fugiat voluptatibus asperiores, illo nisi commodi.
						</p>
						<div>
							<span className='fa fa-facebook-square'></span>
							<span className='fa fa-instagram'></span>
							<span className='fa fa-linkdin-square'></span>
						</div>
					</Col>
					<Col xs={12} md={3}>
						<b>Links</b>
						<br />
						<br />
						<h6>Overview</h6>
						<h6>Social Media</h6>
						<h6>Contact</h6>
					</Col>
					<Col xs={12} md={3}>
						<b>Company</b>
						<br />
						<br />
						<h6>Overview</h6>
						<h6>Social Media</h6>
						<h6>Contact</h6>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default ContactComponent;
