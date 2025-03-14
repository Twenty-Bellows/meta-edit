<?php

/**
 * Sample meta fields for testing.
 */

function add_sample_meta()
{

	// A simple Text Field
	register_post_meta('post', 'a_custom_text_field', array(
		'type' => 'string',
		'description' => 'A custom field',
		'single' => true,
		'show_in_rest' => true,
	));

	// Media
	register_post_meta('post', 'pikchur', array(
		'type' => 'string',
		'description' => 'Pretty Bits',
		'single' => true,
		'show_in_rest' => true,
	));

	// Another text field that will have a textarea UI
	register_post_meta('post', 'another_custom_text_field', array(
		'type' => 'string',
		'description' => 'Another custom field',
		'single' => true,
		'show_in_rest' => true,
	));

	// A color field that will have a color picker UI
	register_post_meta('post', 'a_color_field', array(
		'type' => 'string',
		'description' => 'A color field',
		'single' => true,
		'show_in_rest' => true,
	));

	// A relationship field that will have a post selector UI
	register_post_meta('post', 'friend', array(
		'type' => 'integer',
		'description' => 'A Relationship to another post',
		'single' => true,
		'show_in_rest' => true,
	));

	// Here is where you define which fields to edit and how to edit them
	add_post_type_support('post', 'meta-edit', array(
		'friend' => 'post',
		'a_custom_text_field' => 'text',
		'another_custom_text_field' => 'textarea',
		'a_color_field' => 'color',
		'pikchur' => 'media',
	));
}

add_action('init', 'add_sample_meta');
