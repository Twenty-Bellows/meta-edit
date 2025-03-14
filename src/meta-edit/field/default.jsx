/**
 *
 * Default renderer for meta-edit fields. It will be used if no other renderer is provided.
 * This is a simple text input field.
 *
 */

import { TextControl } from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'meta-edit.field.component',
	'meta-edit.field.component.renderer',
	( renderer, { label, value, onChange } ) => {
		return (
			renderer || (
				<TextControl
					label={ label }
					value={ value }
					onChange={ onChange }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			)
		);
	}
);
