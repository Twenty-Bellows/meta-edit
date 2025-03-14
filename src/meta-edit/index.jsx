import { registerPlugin } from '@wordpress/plugins';
import MetaFieldsPanel from './metaFieldsPanel';

import './field/default';
import './field/textarea';
import './field/color';
import './field/media';
import './field/relationship';

registerPlugin( 'meta-edit', {
	icon: 'palmtree',
	title: 'Meta Edit',
	render: MetaFieldsPanel,
} );
