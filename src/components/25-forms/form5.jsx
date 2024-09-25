import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export const Form5 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		// 1- Formun default submit davranisi iptal edilir
		e.preventDefault();

		// 2- Form validation islemi yapilir
		let tmpErrors = {};
		
		if (!formData.firstName) {
			tmpErrors = { ...tmpErrors, firstName: "First Name is required" };
		}
		if (!formData.lastName) {
			tmpErrors = { ...tmpErrors, lastName: "Last Name is required" };
		}
		if (!formData.email) {
			tmpErrors = { ...tmpErrors, email: "Email is required" };
		} else {
			const emailRegex = /[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9._-]+\.[a-zA-Z]+/;
			if (!emailRegex.test(formData.email)) {
				tmpErrors = { ...tmpErrors, email: "Email is invalid" };
			}
		}

		if (!formData.address) {
			tmpErrors = { ...tmpErrors, address: "Address is required" };
		}

		if (Object.keys(tmpErrors).length > 0) {
			setErrors({ ...tmpErrors });
			return;
		}

		

		// 3- API a gonderilecek payload olusturulur
		const payload = {
			firstName,
			lastName,
			phoneNumber,
			email,
			address,
		};

		// 4- API a gonderilir

		setErrors({});
		alert("Form submitted successfully");
	};

	return (
		<Container className="mt-3">
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						value={formData.firstName}
						onChange={handleChange}
						isInvalid={!!errors.firstName}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.firstName}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						value={formData.lastName}
						onChange={handleChange}
						isInvalid={!!errors.lastName}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.lastName}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						name="phoneNumber"
						type="text"
						value={formData.phoneNumber}
						onChange={handleChange}
					/>

				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="text"
						value={formData.email}
						onChange={handleChange}
						isInvalid={!!errors.email}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.email}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						name="address"
						type="text"
						as="textarea"
						rows={3}
						value={formData.address}
						onChange={handleChange}
						isInvalid={!!errors.address}
					/>
					<Form.Control.Feedback type="invalid">
						{errors.address}
					</Form.Control.Feedback>
				</Form.Group>

				<Button variant="primary" type="submit">
					Send
				</Button>
			</Form>
		</Container>
	);
};