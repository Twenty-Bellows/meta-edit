import { PluginDocumentSettingPanel } from '@wordpress/editor';
import { useSelect } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';

const MetaFieldsPanel = () => {

	const { postType, fields, postId, existingMetaFields } = useSelect(
		( select ) => {
			const postType = select( 'core/editor' ).getCurrentPostType();
			const supports = select( 'core' ).getPostType( postType )?.supports;
			if ( ! supports?.[ 'meta-edit' ]?.[ 0 ] ) {
				return {
					postType,
				};
			}
			const fields = supports[ 'meta-edit' ][ 0 ];
			const postId = select( 'core/editor' ).getCurrentPostId();
			const existingMetaFields = select( 'core' ).getEditedEntityRecord(
				'postType',
				postType,
				postId
			)?.meta;

			return { postType, fields, postId, existingMetaFields };
		},
		[]
	);

	if ( ! fields ) {
		return null;
	}

	const prettyPostType = postType
		.replace( /_/g, ' ' )
		.replace( /\b\w/g, ( char ) => char.toUpperCase() );

	return (
		<PluginDocumentSettingPanel
			name={ 'meta-edit-panel' }
			title={ `${ prettyPostType } Meta` }
		>
			<div style={ {gap: '16px', display: 'flex', flexDirection: 'column'} }>
			{ Object.entries( fields )
				.filter( ( [ key ] ) => {
					return key in existingMetaFields;
				} )
				.map( ( [ key, value ] ) => {
					const slug = key;
					const label = slug
						.replace( /_/g, ' ' )
						.replace( /\b\w/g, ( char ) => char.toUpperCase() );
					const type = value;
					const metaValue = existingMetaFields[ key ] || '';
					const onChange = ( newValue ) => {
						wp.data.dispatch( 'core/editor' ).editPost( {
							id: postId,
							type: postType,
							meta: { [ key ]: newValue },
						} );
					};

					const renderer = applyFilters(
						'meta-edit.field.component',
						null,
						{ label, value: metaValue, type, slug, onChange }
					);

					return <div key={ key }>{ renderer }</div>;
				} ) }
			</div>
		</PluginDocumentSettingPanel>
	);
};

export default MetaFieldsPanel;