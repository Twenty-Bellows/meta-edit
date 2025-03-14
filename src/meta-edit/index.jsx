import { registerPlugin } from '@wordpress/plugins';
import MetaFieldsPanel from './metaFieldsPanel';
require ('./field/textarea');

registerPlugin('meta-edit', {
  icon: 'palmtree',
  title: 'Meta Edit',
  render: MetaFieldsPanel
});