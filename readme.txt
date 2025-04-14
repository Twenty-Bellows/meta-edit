=== Meta Edit ===
Contributors:      pbking
Tags:              metadata, custom fields, block editor, post meta
Requires at least: 6.0
Tested up to:      6.7
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Provide a user interface to edit post meta fields in the block editor.

== Description ==

Meta Edit enables a UI in the WordPress block editor for editing post meta fields on any post type, including custom post types.

Once meta fields are registered and post type support is declared, a simple and customizable UI will appear for managing the data.

Default field types are supported out of the box and you can provide your own via a filter.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/meta-edit` directory or [download and install](https://github.com/pbking/meta-edit/archive/refs/heads/main.zip) from GitHub.
2. Activate the plugin through the 'Plugins' screen in WordPress.
3. Register your meta fields and declare support for the plugin using the examples below.

== Usage ==

=== Register Post Meta Fields ===

Meta can be registered for any post type. For example:

```php
register_post_meta('post', 'a_custom_text_field', array(
	'type' => 'string',
	'single' => true,
	'show_in_rest' => true,
));
```

=== Declare Support for Meta Edit ===

Add post type support and define the fields you want editable:

```php
add_post_type_support('post', 'meta-edit', array(
	'a_custom_text_field' => 'text',
));
```

== Supported Field Types ==
	•	text: Single-line text input.
	•	textarea: Multi-line text area.
	•	color: Color picker.
	•	media: Select media from Media Library (stores URL).
	•	[post_type]: Relationship selector for another post type (stores post ID). Use the post type slug (e.g., page) as the key.

== Custom Field Types ==

You can override or extend the default field components by filtering meta-edit.field.component.

Example for custom textarea rendering:

```js
addFilter(
	'meta-edit.field.component',
	'meta-edit.field.component.renderer',
	( renderer, { label, value, type, slug, onChange } ) => {
		if ( type !== 'textarea' ) return renderer;

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

== Development ==

Build tools require Node.js. To build and run locally:

```bash
npm install
npm run build
npm run watch
```

If you have Docker installed, you can use wp-env for local development:

```bash
npm run start
```

== Frequently Asked Questions ==

= Will this plugin display anything by default? =

No. Meta Edit will not display any UI unless post types declare support and the fields are registered properly.

= Can I use this on custom post types? =

Yes! Meta Edit works on any post type, including custom ones.

= Can I customize the UI for my meta fields? =

Absolutely. Use the meta-edit.field.component filter in JavaScript to render your own controls.