/* @flow */

// Load app modules.
import {
	fields,
} from '../../../../../../common/lib/redux-fields';
import {
	setField,
	resetFields,
} from '../../../../../../common/lib/redux-fields/actions';
import {
	focusInvalidField,
} from '../../../../../../common/lib/validation/';

// Load npm modules.
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import FontAwesome from 'react-fontawesome';

class CreateNewPostbackTemplateModal extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillUpdate(props) {
		const formError = props.formError;
		if (formError && formError != null) {
			focusInvalidField(this, formError)
		}
	}

	componentWillUnmount() {
		const { resetFields } = this.props;
		resetFields(['invite_users']);
	}

	render() {
		const {
			hidePopup,
			fields,
			formError
		} = this.props;

		const errors = formError;

	/*
	Postback: mongoose.model('postbacks', new Schema({
		// Placement.
		postback_template_id: String, // ForeignKeyString.
		game_token: String, // CanonicalString. // TODO: REDUNDANT.
		campaign_token: String, // CanonicalString | "". // TODO: REDUNDANT.
		postback_template_token: String, // CanonicalString. // TODO: REDUNDANT.
		postback_template_meta_type: String, // UnicodeString. // TODO: REDUNDANT.
		// Content.
		request_method: String, // HttpMethodString.
		request_url: String, // UrlString.
		request_headers: String, // SerializedObjectString.
		request_body: String, // UnicodeString | "".
		response_http_version: String, // UnicodeString.
		response_status_code: Number, // IntegerNumber.
		response_status_message: String, // UnicodeString.
		response_headers: String, // SerializedObjectString.
		response_body: String, // UnicodeString | "".
		postback_response_time: Number, // UtcTimePeriodNumber.
		// Meta data.
		timestamp: Number, // UtcTimeStampNumber.
		datetime: String, // FullUtcDateTimeString. // TODO: REDUNDANT.
		request_id: Number, // UtcTimeStampNumber.
	})),
	*/
		return (
			<ReactCSSTransitionGroup transitionName="popup" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				<div id="modalCreateNewGame" className="Modal">
					<form>
						<FontAwesome name="times" className="Modal__control-hide" onClick={hidePopup} />

						<div className="Modal__head">
							<h3 className="Modal__head-title">Create new postback template</h3>
						</div>

						<div className="Modal__body">
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Name</label>
								<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter a name for postback" />

							</div>

							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Template</label> <br />

								<select className="form-control" style={{width: '90%', display: 'inline-block'}}>
									<option value="123">Postback template 1</option>
									<option value="123">Postback template 2</option>
									<option value="123">Postback template 3</option>
									<option value="123">Postback template 4</option>
									<option value="123">Postback template 5</option>
									<option value="123">Postback template 6</option>
								</select>
								<a className="btn btn-primary" style={{marginLeft: '10px', width: '8%', display: 'inline-block'}}>+</a>
							</div>
						</div>

						<div className="Modal__footer">
							<div className="row">
								<div className="col-lg-12">
									<input type="submit" className="btn btn-primary" value="Create postback"/>
								</div>
							</div>
						</div>
					</form>
				</div>
			</ReactCSSTransitionGroup>
		)
	}
}

CreateNewPostbackTemplateModal = fields(CreateNewPostbackTemplateModal, {
	path: 'invite_users',
	fields: ['email', 'message', 'wallet_id'],
});

export default connect((state, ownProps) => {
	return {
		formError: state.users.formError,
		formDisabled: state.users.formDisabled
	};
}, {
	setField,
	resetFields
}
)(CreateNewPostbackTemplateModal);
