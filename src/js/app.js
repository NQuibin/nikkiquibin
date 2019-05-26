/* global AOS */

import '../styles/main.scss';

const addAOSAttributes = () => {
    $('.exp-content').each((index, value) => {
        const isEven = (index + 1) % 2 === 0;
        $(value).attr('data-aos', `fade-${isEven ? 'down' : 'up'}`);
    });

	$('.project-content').each((index, value) => {
		const isEven = (index + 1) % 2 === 0;
		$(value).attr('data-aos', `fade-${isEven ? 'down' : 'up'}`);
	});
};

addAOSAttributes();

$(() => {
    AOS.init({ once: true });
});
