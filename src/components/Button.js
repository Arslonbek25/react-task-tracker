export const Button = ({ color = "steelblue", text, onClick }) => {
	return (
		<button onClick={onClick} className="btn" style={{ background: color }}>
			{text}
		</button>
	);
};

export default Button;
