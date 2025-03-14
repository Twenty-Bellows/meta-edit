# Meta Edit

Provide a UI to edit Post Metadata.

## To Use

This plugin can be (downloaded)[https://github.com/pbking/meta-edit/archive/refs/heads/main.zip], installed and activated. 
Note that there will NOT be any visible changes until Post Types have been configured.

### Register Post Meta Fields  

Create a `string` type for MOST fields and an `integer` type for relationship fields.

Meta can be on ANY post type, including Custom Post Types.  Examples will be using the post type `post`.

```php
register_post_meta('post', 'a_custom_text_field', array(
	'type' => 'string',
	'single' => true,
	'show_in_rest' => true,
));
```

### Declare Support

Now add support for `meta-edit` to the post type.

Pass a configuration of what you wanted edited (and how) via structured array where the custom meta field is the key and the TYPE is the value.

```php
add_post_type_support('post', 'meta-edit', array(
	'a_custom_text_field' => 'text',
));
```

### Default Field Types

`text` is the default field type.  If you put in a field type that hasn't been registered it will be treated as a `text` field type.

Default Supported Field Types include:

* `text`: Edit the value of a string meta field.
* `textarea`: Edit the value of a string meta field in a larger area.
* `color`: Edit the value of a string meta field by picking a color from the color picker.
* `media`: Edit the value (url) of a string meta field by picking a media asset from the Media Library.
* `relationship`: Edit the value (id) of an integer meta field by choosing a post (of the given post type).  NOTE: To create a relationship type you don't use the key `relationship` but instead the slug of a Post Type.  (For example `page` if you want to create an association with a Page post type.)

### Custom Field Types

To include additional field types (or to override existing tooling) implement a JavaScript filter for `meta-edit.field.component`. 

That filter provides the following values:
* `label` A formatted label based on the meta field's slug
* `value` The current value of the field
* `type` The type of field to be rendered. 
* `slug` The (un-prettified) slug of the meta field
* `onChange` The default change handler.

Return the UI to accept input from the user to manage the field.  Pass the value to be stored to the `onChange` handler.

For example this is the `textarea` field. Note that it only returns a control if the type is `textarea`.

```javascript
addFilter(
	'meta-edit.field.component',
	'meta-edit.field.component.renderer',
	( renderer, { label, value, type, slug, onChange } ) => {
		if ( type !== 'textarea' ) {
			return renderer;
		}
		return (
			<TextareaControl
				label={ label }
				value={ value }
				onChange={ onChange }
				__nextHasNoMarginBottom
			/>
		);
	}
);
```

In this way you can (easily) construct custom UI solutions to manage Post Type Meta Fields in individual projects.


## Development

The project requires node to build. `wp-scripts` is used for pipeline tooling.  

```bash
npm install
npm run build
npm run watch
```

See package.json scripts for additional utilities.

If you have Docker installed you can use wp-env to run a local development environment.

```bash
npm run start
```