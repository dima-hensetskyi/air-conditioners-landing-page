import wallet from './wallet.svg';
import guarantee from './guarantee.svg';
import promice from './promice.svg';
import service from './service.svg';
import mechanic from './mechanic.svg';

const brand = (
	<svg
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="fan"
		className="svg-inline--fa fa-fan fa-w-16 brand-icon mr-2"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
	>
		<path d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13 189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33 28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62 79.7-10 141.33-77.51 141.33-159.3 0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.44 1.05 18.93-8.11 17.62-18.59-10-79.7-77.51-141.33-159.3-141.33zM256 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"></path>
	</svg>
);
const phone = (
	<svg
		aria-hidden="true"
		focusable="false"
		data-prefix="fas"
		data-icon="phone-alt"
		className="svg-inline--fa fa-phone-alt fa-w-16 app-icons mr-2"
		role="img"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 512 512"
	>
		<path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
	</svg>
);
const email = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mr-2 app-icons">
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
	</svg>
);
const phoneCall = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="#ffd863ff"
		width="7%"
		className="mr-2"
	>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
	</svg>
);
const location = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="#ffd863ff"
		width="7%"
		className="mr-2"
	>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
		<circle cx="12" cy="9" r="2.5" />
	</svg>
);
const email2 = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="#ffd863ff"
		width="7%"
		className="mr-2"
	>
		<path d="M0 0h24v24H0V0z" fill="none" />
		<path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
	</svg>
);
const mapIcons = {
	wallet,
	guarantee,
	promice,
	service,
	brand,
	phone,
	email,
	mechanic,
	phoneCall,
	location,
	email2,
};

export const getIcon = (icon) => mapIcons[icon];
