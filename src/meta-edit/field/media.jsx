import { Button } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import { Label } from './label';

addFilter(
	'meta-edit.field.component',
	'meta-edit.field.component.renderer',
	( renderer, { label, value, type, slug, onChange } ) => {
		if ( type !== 'media' ) { 
			return renderer;
		}
		return (
			<div>
				<Label label={ label } name={ slug } />
				<MediaUpload
					onSelect={ ( newValue )=> onChange( newValue?.url ) }
					allowedTypes={ [ 'image' ] }
					render={ ( { open } ) => (
						value ? (
							<a onClick={open}><img src={ value } /></a>
						) : (
							<Button onClick={ open }>Open Media Library</Button>
						)
					) }
				/>
			</div>
		);
	}
);
