import { TextareaControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'meta-edit.field.component',
	'meta-edit.field.component.renderer',
	( renderer, { label, value, type, slug, onChange } ) => {
		if ( type !== 'textarea' ) {
			return renderer;
		}
		return (
			<TextareaControl
				label={ label }
				value={ value }
				onChange={ onChange }
				__nextHasNoMarginBottom
			/>
		);
	}
);
