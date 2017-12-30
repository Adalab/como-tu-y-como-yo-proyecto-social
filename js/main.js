'use strict';

$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#E7C774', '#fff', '#fff', 'fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#261d1a'],
				scrollingSpeed: 1000,
        navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['First page', 'Second page', 'Third and last page']
			});
		});
