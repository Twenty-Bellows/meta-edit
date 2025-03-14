import { PluginDocumentSettingPanel } from '@wordpress/editor'
import { useSelect } from '@wordpress/data'
import { applyFilters, addFilter } from '@wordpress/hooks'
import { TextControl } from '@wordpress/components'

const MetaFieldsPanel = () => {

  const postType = useSelect(
    (select) => select('core/editor').getCurrentPostType(),
    []
  )

  const supports = useSelect(
    (select) => select('core').getPostType(postType).supports,
    [postType]
  )

  if (!supports || !supports['meta-edit'] || !supports['meta-edit'][0]) {
    return;
  }

  const fields = supports['meta-edit'][0]

  const postId = useSelect(
    (select) => select('core/editor').getCurrentPostId(),
    []
  )

  const existingMetaFields = useSelect(
    (select) => {
      return select('core').getEditedEntityRecord('postType', postType, postId)
        ?.meta
    },
    [postType, postId]
  )

  const nicePostType = postType.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())

  return (
    <PluginDocumentSettingPanel 
      name={"meta-edit-panel"}
      title={`${nicePostType} Meta`}>
      { Object.entries(fields)
        .filter(([key]) => {
          return existingMetaFields[key] !== undefined;
        })
        .map(([key, value]) => {

          const slug = key;
          const label = slug.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
          const type  = value;
          const metaValue = existingMetaFields[key] || '';
          const onChange = ( newValue ) => {
		          wp.data.dispatch( 'core/editor' ).editPost( {
			          id: postId,
			          type: postType,
			          meta: { [ key ]: newValue },
		          } );
          };

          const renderer = applyFilters( 'meta-edit.field.component', null,
              { label, value:metaValue, type, slug, onChange }
          ); 

          return <div key={key}>{renderer}</div>;
          
        })
      }
    </PluginDocumentSettingPanel>
  )
}

export default MetaFieldsPanel

addFilter( 
	'meta-edit.field.component', 
	'meta-edit.field.component.renderer', 
	( renderer, { label, value, onChange } ) => {
    return renderer || (<TextControl 
                          label={label} 
                          value={value} 
                          onChange={onChange} 
                          __next40pxDefaultSize 
                          __nextHasNoMarginBottom
                        />);
	} 
);