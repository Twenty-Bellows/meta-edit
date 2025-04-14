<?php

/**
 * Plugin Name:       Meta Edit
 * Description:       Provide a UI to edit Post Metadata
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           1.0.0
 * Author:            Twenty Bellows
 * Author URI:        https://twentybellows.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       meta-edit
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

add_action('enqueue_block_editor_assets', function () {

	$editor_assets = include plugin_dir_path( __FILE__ ) . 'build/editor.asset.php';

	wp_enqueue_script(
		'meta-edit-editor-script',
		plugins_url('build/editor.js', __FILE__),
		$editor_assets['dependencies'],
		$editor_assets['version'],
		true
	);
});
