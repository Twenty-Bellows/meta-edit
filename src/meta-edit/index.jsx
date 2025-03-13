import { registerPlugin } from '@wordpress/plugins';
import MetaFieldsPanel from './metaFieldsPanel';

registerPlugin('meta-edit', {
  icon: 'palmtree',
  title: 'Meta Edit',
  render: MetaFieldsPanel
});