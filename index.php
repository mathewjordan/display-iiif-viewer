<?php

/*
Plugin Name: Yith IIIF-WP
Plugin URI: https://github.com/mathewjordan/yih-iiif-wp
Description: Proof of concept for rendering of IIIF manifests in WordPress
Version: 0.0.1
Author: mat@northwestern.edu
Author URI: https://github.com/mathewjordan
*/

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'yith_iiif_load_textdomain' );

function yith_iiif_load_textdomain() {
	load_plugin_textdomain( 'yith-iiif', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
add_action( 'init', 'yith_iiif_register_block' );

function yith_iiif_register_block() {

	// Register the block by passing the location of block.json.
	register_block_type( __DIR__ );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    wp_set_script_translations( 'yith-iiif', 'yith-iiif' );
  }

}
