/**
 *
 * This is the renderer for textarea fields in meta-edit.
 * It is used if the field type is 'textarea'.
 *
 */

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
