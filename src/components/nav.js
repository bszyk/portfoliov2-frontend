import React from 'react';
import { Link } from 'gatsby';
import { __ } from '@wordpress/i18n';

const config = [
	{
		name: __('Home', 'bszyk-portfolio'),
		slug: '/',
	},
	{
		name: __('About', 'bszyk-portfolio'),
		slug: '/about',
	},
	{
		name: __('Projects', 'bszyk-portfolio'),
		slug: '/projects',
	},
	{
		name: __('Contact', 'bszyk-portfolio'),
		slug: '/contact',
	},
];

const Nav = ({ location }) => {
	const linkClassName = `inline-block border border-white hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4`;

	return (
		<nav className="main-nav">
			<ul className="flex justify-around">
				{config.map((page, i) => {
					const { name, slug } = page;
					const linkClassName = `inline-block border border-white hover:border-gray-200 ${
						location === slug ? 'text-red-500' : 'text-blue-500'
					} hover:bg-gray-200 py-2 px-4`;

					return (
						<li key={i} className="mr-3">
							<Link className={linkClassName} to={slug}>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
	config.map((page) => {
		<nav className="main-nav">
			<ul className="flex justify-around">
				<li className="mr-3">
					<Link className={linkClassName} to="/about">
						About
					</Link>
				</li>
				<li className="mr-3">
					<a
						className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
						href="/projects"
					>
						Project Examples
					</a>
				</li>
				<li className="mr-3">
					<Link
						className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
						to="/contact"
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>;
	});
};

export default Nav;
