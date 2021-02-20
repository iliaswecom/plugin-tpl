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
 * Class Page.
 */
class Page {
	/**
	 * Create the Admin page.
	 */
	public static function load() {
		?>
		<div class="wrap">
			<h1><?php echo get_admin_page_title(); ?></h1>
		</div>
		<?php
	}
}
