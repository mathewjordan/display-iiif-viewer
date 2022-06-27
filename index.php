<?php

/*
Plugin Name: Display IIIF Viewer
Plugin URI: https://github.com/mathewjordan/display-iiif-viewer
Description: Proof of concept for rendering of IIIF manifests in WordPress
Version: 0.0.2
Author: mat@northwestern.edu
Author URI: https://github.com/mathewjordan
*/

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'display_iiif_viewer_load_textdomain' );

function display_iiif_viewer_load_textdomain() {
	load_plugin_textdomain( 'display-iiif-viewer', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
add_action( 'init', 'display_iiif_viewer_register_block' );

function display_iiif_viewer_register_block() {
	// Register the block by passing the location of block.json.
	register_block_type_from_metadata(__DIR__);

  if ( function_exists( 'wp_set_script_translations' ) ) {
    wp_set_script_translations( 'display-iiif-viewer', 'display-iiif-viewer' );
  }
}


add_action('wp_enqueue_scripts', function () {
  wp_enqueue_script(
    'yith/display-iiif-viewer',
    plugin_dir_url( __FILE__ ) . 'build/index.js', 
    ['wp-element'],
    null,
    true
  );
});