/* global AOS */

import '../styles/main.scss';

const addAOSAttributes = () => {
	$('.exp-content, .project-content').each((index, value) => {
		$(value).attr('data-aos', 'fade-down');
	});
};

addAOSAttributes();

$(() => {
    AOS.init({ once: true });
});
