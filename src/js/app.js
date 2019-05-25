/* global AOS */

import '../styles/main.scss';

const addAOSAttributes = () => {
    $('.exp-content').each((index, value) => {
        const isEven = (index + 1) % 2 === 0;
        $(value).attr('data-aos', `zoom-in-${isEven ? 'left' : 'right'}`);
    });

	$('.project-content').each((index, value) => {
		const isEven = (index + 1) % 2 === 0;
		$(value).attr('data-aos', `zoom-in-${isEven ? 'left' : 'right'}`);
	});
};

addAOSAttributes();

$(() => {
    AOS.init({ once: true });
});
