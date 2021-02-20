<?php

/**
 * This file comes with "plugin-tpl".
 * Author:      Konstantinos Xenos
 * Author URI:  https://xkon.dev
 * License:     GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

/**
 * Set namespace.
 */
namespace Xkon\Plugin_Tpl\Admin;

/**
 * Check that the file is not accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	die( 'Sorry, but you can not directly access this file.' );
}

/**
 * Class Menu.
 */
class Menu {
	/**
	 * Create the Admin menu.
	 */
	public static function create() {
		add_action(
			'admin_menu',
			array(
				'\\Xkon\\Plugin_Tpl\\Admin\\Menu',
				'populate',
			)
		);
	}

	/**
	 * Populate the Admin menu.
	 */
	public static function populate() {
		add_menu_page(
			'Plugin Tpl Page Title',
			'Plugin Tpl',
			'manage_options',
			'plugin-tpl',
			array( '\\Xkon\\Plugin_Tpl\\Admin\\Page', 'load' ),
			'dashicons-yes-alt',
		);
	}
}
