/*
	Visualize by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

$(function() {

	// Vars.
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Disable animations/transitions until everything's loaded.
		$body.addClass('is-loading');

		$window.on('load', function() {
			$body.removeClass('is-loading');
		});

	// Poptrox.
		$window.on('load', function() {

			$('.thumbnails').poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				usePopupEasyClose: true,
				overlayColor: '#000000',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: false,
				windowMargin: (skel.breakpoint('small').active ? 5 : 50)
			});

		});

	// Photos
		var container = $('section#main section.thumbnails');
		var columns = [[], [], []];
		var heights = [0, 0, 0];
		var i, j;
		for (i = 0; i < images.length; i++) {
			var image = images[i];
			var items = image.split(/-|\./);
			var idx = heights[0] <= heights[1] ? (heights[0] <= heights[2] ? 0 : 2) : (heights[1] <= heights[2] ? 1 : 2);
			columns[idx].push(image);
			heights[idx] += parseInt(items[3]) + 95;
		}
		for (i = 0; i < 3; i++) {
			var html = '<div>\n';
			for (j in columns[i]) {
				image = columns[i][j];
                items = image.split(/-|\./);
				html += '<a href="images/fulls/' + image + '">\n' +
                    '<img src="images/thumbs/' + image + '" alt="' + items[0] + '"/>\n' +
                    '<h3>' + items[1][0].toUpperCase() + items[1].slice(1) + ', ' +
					items[2][0].toUpperCase() + items[2].slice(1) + '</h3>\n' +
                    '</a>';
			}
			html += '</div>\n';
			container.append(html);
		}
});