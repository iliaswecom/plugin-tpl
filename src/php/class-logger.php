<?php //phpcs:ignore -- \r\n notice.

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
namespace Xkon\Plugin_Tpl;

/**
 * Import necessary classes.
 */
use \Exception;
use \WP_Error;

/**
 * Check that the file is not accessed directly.
 */
if ( ! defined( 'ABSPATH' ) ) {
	die( 'Sorry, but you can not directly access this file.' );
}

/**
 * Class Logger.
 */
class Logger {
	/**
	 * Log.
	 *
	 * @param mixed $message
	 */
	public static function log( $message ) {
		$log_file   = wp_normalize_path( WP_CONTENT_DIR . '/' . 'plugin-tpl.log' );
		$should_log = defined( 'PLUGIN_TPL_DEBUG' ) && PLUGIN_TPL_DEBUG ? true : false;

		if ( ! $should_log ) {
			return;
		}

		if ( ! is_string( $message ) || is_array( $message ) || is_object( $message ) ) {
			$message = print_r( $message, true );
		}

		$message = '[' . gmdate( 'd-M-Y H:i:s' ) . '] ' . $message . PHP_EOL;

		try {
			$fp = fopen( $log_file, 'a' );
			flock( $fp, LOCK_EX );
			fwrite( $fp, $message );
			flock( $fp, LOCK_UN );
			fclose( $fp );
		} catch ( \Exception $e ) {
			new \WP_Error( 'log-write-error', $e->getMessage() );
		}
	}
}
