/**
 *
 * This is the renderer for relationship fields in meta-edit.
 * It is used if the field type is set to the slug of a post type.
 * All posts of that type will be available for selection.
 * The value stored is the ID of the selected post.
 *
 */

import { addFilter } from '@wordpress/hooks';
import { useSelect } from '@wordpress/data';
import { ComboboxControl } from '@wordpress/components';

addFilter(
	'meta-edit.field.component',
	'meta-edit.field.component.renderer',
	( renderer, { label, value, type, slug, onChange } ) => {
		const posts = useSelect( ( select ) => {
			let postTypes = select( 'core' )
				.getPostTypes()
				?.map( ( postType ) => postType.slug );
			if ( ! postTypes?.includes( type ) ) {
				return null;
			}
			return (
				select( 'core' ).getEntityRecords( 'postType', type, {
					per_page: -1,
					order: 'asc',
					orderby: 'title',
					_fields: [ 'id', 'title' ],
				} ) || []
			);
		}, [] );

		if ( posts === null ) {
			return renderer;
		}

		return (
			<ComboboxControl
				label={ label }
				value={ parseInt( value ) }
				onChange={ ( value ) => onChange( value?.toString() ?? 0 ) }
				isLoading={ posts.length === 0 }
				placeholder={
					posts.length === 0 ? 'Loading...' : 'Select a ' + type
				}
				options={
					posts?.map( ( post ) => ( {
						label: post.title.raw,
						value: post.id,
					} ) ) ?? []
				}
				__nextHasNoMarginBottom
				__next40pxDefaultSize
			/>
		);
	}
);
