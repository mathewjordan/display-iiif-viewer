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
add_action( 'init', 'yith_iiif_load_textdomain' );

function yith_iiif_load_textdomain() {
	load_plugin_textdomain( 'display-iiif-viewer', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
add_action( 'init', 'yith_iiif_wp_register_block' );

function yith_iiif_wp_register_block() {

	// Register the block by passing the location of block.json.
	register_block_type_from_metadata( 
    __DIR__, 
    // array( 'render_callback' => 'yith_iiif_wp_render_callback' ) 
  );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    wp_set_script_translations( 'display-iiif-viewer', 'display-iiif-viewer' );
  }

}

function yith_iiif_wp_render_callback( $attributes ) {
  print_r ($attributes);
	return '<div class="new-dynamic-block">something</div>';
}


add_action('wp_enqueue_scripts', function () {
  wp_enqueue_script('yith/iiif-wp', 'https://unpkg.com/@yith/yith@1.0.28/dist/yith.js', [], null, true);
});