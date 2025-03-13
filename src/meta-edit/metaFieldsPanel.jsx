import { PluginDocumentSettingPanel } from '@wordpress/editor'
import { useSelect } from '@wordpress/data'
import { applyFilters } from '@wordpress/hooks'
import { TextControl } from '@wordpress/components'

const Field = ({ label, value, onChange, name, type }) => {
  
  const DefaultComponent = <TextControl label={label} value={value} onChange={onChange} __next40pxDefaultSize __nextHasNoMarginBottom/>;

  return applyFilters(
    'meta-edit.field.component',
    DefaultComponent,
    {
      label,
      value,
      onChange,
      name,
      type,
    }
  );
}

const MetaFieldsPanel = () => {

  // Get meta fields from post type
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
          return (<Field
            key={key}
            label={key.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}
            value={existingMetaFields[key] || ''}
            name={key}
            type={value}
            onChange={(newValue) => {
              // Update in-memory value and save to the database
              wp.data.dispatch('core/editor').editPost({
               id: postId,
               type: postType,
               meta: { [key]: newValue },
              })
            }}
          />)
        })
      }
    </PluginDocumentSettingPanel>
  )
}

export default MetaFieldsPanel
