import { registerPlugin } from '@wordpress/plugins';
import MetaFieldsPanel from './metaFieldsPanel';
require( './field/textarea' );
require( './field/color' );
require( './field/media' );

registerPlugin( 'meta-edit', {
	icon: 'palmtree',
	title: 'Meta Edit',
	render: MetaFieldsPanel,
} );
