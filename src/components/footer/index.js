import React from 'react';
import copy from 'copy-to-clipboard';
import Icon from '@components/Icon';
import './index.scss';

const footer = [
	{
		name: 'E-Mail',
		icon: 'email1',
		callback: e => {
			copy('tsejx@foxmail.com');
		},
	},
	{
		name: 'GitHub',
		icon: 'github1',
		callback: () => {
			window.open('https://github.com/tsejx', '_blank');
		},
	},
	{
		name: 'PRC',
		icon: 'china',
		callback: () => {},
	},
];

const Footer = () => (
	<footer className="footer">
		<ul className="footer-list">
			<li className="footer-item" data->
				<span className="footer-label">&copy; 2019 Jahoshaphat Tse</span>
			</li>
			{footer.map(item => {
				const isShowPointer = typeof item.callback === 'function';

				return (
					<li
						key={item.name}
						className="footer-item"
						style={{
							cursor: isShowPointer ? 'pointer' : 'auto',
						}}
						onClick={e => {
							e.preventDefault();
							item.callback(e);
						}}
					>
						<Icon type={item.icon} style={{ width: 24, height: 24, margin: '0 8px' }} />

						<span className="footer-label">{item.name}</span>
					</li>
				);
			})}
		</ul>
	</footer>
);

export default Footer;
