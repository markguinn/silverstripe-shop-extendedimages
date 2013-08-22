/**
 * Extra javascript for the product page.
 *
 * @author Mark Guinn <mark@adaircreative.com>
 * @date 08.22.2013
 * @package shop_extendedimages
 * @subpackage javascript
 */
(function ($, window, document, undefined) {
	'use strict';

	$(function(){
		// set up the zooming
		$('#MainProductImage').elevateZoom({
			zoomType:           'inner',
			cursor:             'crosshair',
			gallery:            'ProductImageGallery',
			galleryActiveClass: 'active',
			imageCrossfade:     true,
			loadingIcon:        '/framework/images/network-save.gif'
		});
	});

}(jQuery, this, this.document));
