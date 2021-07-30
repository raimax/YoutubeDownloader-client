import React, { useState } from 'react';
import '../sass/ContactPage.scss';
import { useTranslation } from 'react-i18next';
import axiosConfig from '../axiosConfig';
import Message from '../componencts/Message';
import CircularProgress from '@material-ui/core/CircularProgress';

const ContactPage = () => {
	const [sendersName, setSendersName] = useState('');
	const [sendersEmail, setSendersEmail] = useState('');
	const [sendersMessage, setSendersMessage] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const { t } = useTranslation();

	const SubmitFormAsync = async (event) => {
		event.preventDefault();
		setLoading(true);

		const options = {
			name: sendersName,
			email: sendersEmail,
			message: sendersMessage
		}

		await axiosConfig.post('/Contact', options)
			.then(response => {
				ClearInputs();
				setMessage(response.data.message);
			})
			.catch(error => {
				setMessage(error.response.data.message)
			})

		setLoading(false);
	}

	const ClearInputs = () => {
		setSendersName('');
		setSendersEmail('');
		setSendersMessage('');
	}

	const rendermessage = () => {
		if (message) {
			return <Message content={message} />
		}

		// placeholder for message
		return <p style={{ minHeight: "34px", margin: 0 }}> </p>;
	}

	return (
		<div className="container">
			<div className="contact__title">{t("contact.title")}</div>
			{rendermessage()}
			<form className="contact__form" onSubmit={event => SubmitFormAsync(event)}>
				<label htmlFor="nameField">*{t("contact.name")}:</label>
				<input id="nameField" type="text" value={sendersName} onChange={event => setSendersName(event.target.value)} required />
				<label htmlFor="emailField">{t("contact.email")}:</label>
				<input id="emailField" type="email" value={sendersEmail} onChange={event => setSendersEmail(event.target.value)} />
				<label htmlFor="messageField">*{t("contact.message")}:</label>
				<textarea id="messageField" type="text" required value={sendersMessage} onChange={event => setSendersMessage(event.target.value)} />
				<div className="contact__bottom">
					<div className="contact__bottom__required">
						*{t("contact.requiredFields")}
					</div>
					<button disabled={loading} type="submit">{loading && <CircularProgress size="1em" />}{loading ? t("contact.sending") + "..." : t("contact.send")}</button>
				</div>
			</form>
		</div>
	)
}

export default ContactPage
