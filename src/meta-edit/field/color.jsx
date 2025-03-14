import { ColorPalette } from '@wordpress/components';
import { Label } from './label';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'meta-edit.field.component',
	'meta-edit.field.component.renderer',
	( renderer, { label, value, type, slug, onChange } ) => {
		if ( type !== 'color' ) {
			return renderer;
		}
		return (
			<>
				<Label label={ label } name={ slug } />
				<ColorPalette
					name={ slug }
					value={ value }
					onChange={ onChange }
				/>
			</>
		);
	}
);
