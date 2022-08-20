const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<p>Copyright © {year} Ionut Oltean</p>
		</footer>
	);
};

export default Footer;
