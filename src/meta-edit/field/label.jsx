export function Label( { label, name } ) {
	const readableLabel = label.replace( /_/g, ' ' );
	return (
		<label
			htmlFor={ name }
			style={ {
				display: 'block',
				marginBottom: '10px',
				textTransform: 'capitalize',
			} }
		>
			{ readableLabel }
		</label>
	);
}
