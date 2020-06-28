import React, { useState, useEffect } from 'react';
import axios from 'axios';
import notepad from '../assets/images/notepad.png'
import check from '../assets/images/check.png'

import './Messages.scss';


const Messages = props => {
	const [messages, setMessages] = useState([]);

	const { databaseUpdated } = props

	useEffect(() => {
		(async function fetchMessages() {
			const { data: dbMessages } = await axios.get('/api/messages');

			setMessages(dbMessages);

		})();
	}, [databaseUpdated]);

	const printMessages = () => (
		<ul className="messages-list">
			{messages.map(({ text, id }) => {
				return (
					<li key={id} className="messages-list-item">
						{text} <img src={check} />
						<hr />
					</li>

				);
			})}
		</ul>
	);

	return (
		<div className="messages-container">
			<div>
				<h2>Messages</h2>
				<img src={notepad} />
			</div>

			{
				printMessages()
			}
		</div>
	);
};

export default Messages;
