<?php

function add_sample_meta() {

    register_post_meta('post', 'a_custom_text_field', array(
	'type' => 'string',
	'description' => 'A custom field',
	'single' => true,
	'show_in_rest' => true,
    ));

    register_post_meta('post', 'another_custom_text_field', array(
	'type' => 'string',
	'description' => 'Another custom field',
	'single' => true,
	'show_in_rest' => true,
    ));

    register_post_meta('post', 'a_color_field', array(
	'type' => 'string',
	'description' => 'Another color field',
	'single' => true,
	'show_in_rest' => true,
    ));

    add_post_type_support('post', 'meta-edit', array(
	'a_custom_text_field' => 'text',
	'another_custom_text_field' => 'textarea',
	'a_wrong_custom_text_field' => 'text',
	'a_color_field' => 'color',
    ));

}

add_action('init', 'add_sample_meta');