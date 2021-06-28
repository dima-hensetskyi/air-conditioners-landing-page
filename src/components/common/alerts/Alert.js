import { Alert } from 'react-bootstrap';

export const Alerts = ({ type, text, show }) => {
	if (show) {
		return (
			<Alert variant={type} className="alert my-3">
				{text}
			</Alert>
		);
	}
	return null;
};
