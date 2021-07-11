import { useDispatch } from 'react-redux';
import { setLandingModalShow } from '../../redux/actions/landingPageActions';

export const CallBackBtn = () => {
	const dispatch = useDispatch();
	const showCallBackForm = () => dispatch(setLandingModalShow(true));
	return (
		<div
			type="button"
			className="callback-bt  d-none d-md-block"
			onClick={showCallBackForm}
		>
			<div className="text-call">
				<i className="fas fa-phone"></i>
				<span>
					Замовити
					<br />
					дзвінок
				</span>
			</div>
		</div>
	);
};
