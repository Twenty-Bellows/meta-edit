export function Label( { label, name } ) {
	const readableLabel = label.replace( /_/g, ' ' );
	return (
		<label
			htmlFor={ name }
			style={ {
				display: 'block',
				marginBottom: '10px',
				textTransform: 'uppercase',
				fontSize: '11px',
    				fontWeight: 500,
				lineHeight: 1.4
			} }
		>
			{ readableLabel }
		</label>
	);
}
