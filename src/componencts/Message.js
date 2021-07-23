import React from 'react'
import '../sass/Message.scss';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const Message = (props) => {
	return (
		<div className="message">
			<ErrorOutlineIcon />
			{props.content}
		</div>
	)
}

export default Message
