<?php

/**
 * blank_block's functions and definitions
 *
 * @package blank_block
 * @since blank_block 1.0
 */

if (!function_exists('blank_block_setup')) :

    /**
     * Sets up theme defaults and registers support for various
     * WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme
     * hook, which runs before the init hook. The init hook is too late
     * for some features, such as indicating support post thumbnails.
     */
    function blank_block_setup()
    {

        /**
         * Make theme available for translation.
         * Translations can be placed in the /languages/ directory.
         */
        load_theme_textdomain('blank_block', get_template_directory() . '/languages');

        /**
         * Add default posts and comments RSS feed links to <head>.
         */
        add_theme_support('automatic-feed-links');

        /**
         * Enable support for post thumbnails and featured images.
         */
        add_theme_support('post-thumbnails');

        /**
         * Add support for two custom navigation menus.
         */
        register_nav_menus(array(
            'primary'   => __('Primary Menu', 'blank_block'),
            'secondary' => __('Secondary Menu', 'blank_block'),
        ));

        /**
         * Enable support for the following post formats:
         * aside, gallery, quote, image, and video
         */
        add_theme_support('post-formats', array('aside', 'gallery', 'quote', 'image', 'video'));
    }
    add_action('after_setup_theme', 'blank_block_setup');;

    /**
     * Load scripts and styles
     */
    function blank_block_styles()
    {
        wp_enqueue_style('blank_block_style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
        wp_enqueue_style('blank_block_main', get_template_directory_uri() . '/build/css/main.css', array(), wp_get_theme()->get('Version'));
    }
    add_action('wp_enqueue_scripts', 'blank_block_styles');
endif; // blank_block_setup
