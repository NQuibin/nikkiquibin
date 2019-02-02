export const init = () => {
    $(() => {
        const toggleNavbar = () => {
            const $barContainer = $('.bar-container');

            $barContainer.on('click', e => {
                const $this = $(e.currentTarget);
                const $navbar = $('.navbar');
                const $gridNavbar = $('.grid-item-navbar');
                const $body = $('body');
                const windowWidth = $(window).width();

                if (windowWidth >= 1024) {
                    $navbar.animate({width:'toggle'}, 150);
                    $gridNavbar.toggleClass('sticky');
                } else {
                    if ($navbar.css('display') === 'none') {
                        $navbar.slideDown(150);
                    } else {
                        $navbar.slideUp(150);
                    }

                    $body.css('overflow', () => {
                        return $body.css('overflow') === 'hidden' ? '' : 'hidden';
                    });
                }

                $this.toggleClass('change');
            });
        };

        const onNavClick = () => {
            const $navLink = $('.nav-link');
            const $barContainer = $('.bar-container');

            $navLink.on('click', e => {
                $barContainer.trigger('click');

                const locationId = $(e.currentTarget).attr('href');
                const $document = $('html, body');

                $document.animate(
                    { scrollTop: $(locationId).offset().top },
                    200
                );
            });
        };

        const onTopClick = () => {
            const $top = $('#top');
            const $document = $('html, body');

            let prevScrollTop = 0;
            let fadeInInProgress = false;
            let fadeOutInProgress = false;
            let timeoutHandler = null;

            $(window).on('scroll', () => {
                const currScrollTop = $(window).scrollTop();
                const showThreshold = $('#summary').offset().top;

                if (
                    (currScrollTop > prevScrollTop ||
                        currScrollTop < showThreshold) &&
                    !fadeOutInProgress
                ) {
                    fadeOutInProgress = true;
                    $top.fadeOut(400, () => {
                        fadeOutInProgress = false;
                    });
                } else if (
                    currScrollTop >= showThreshold &&
                    currScrollTop < prevScrollTop &&
                    !fadeInInProgress
                ) {
                    fadeInInProgress = true;
                    window.clearTimeout(timeoutHandler);

                    $top.fadeIn(400, () => {
                        fadeInInProgress = false;
                        timeoutHandler = setTimeout(() => {
                            $top.fadeOut();
                        }, 1500);
                    });
                }

                prevScrollTop = currScrollTop;
            });

            $top.on('click', () => {
                $document.animate({ scrollTop: 0 }, 200);
            });
        };

        const expandSkills = () => {
            $('.expand').on('click', e => {
                const $this = $(e.currentTarget);
                const target = $(`#${$this.data('target-id')}`);
                const $collapsible = $(target);
                const isVisible = $collapsible.css('display') === 'none';

                if (isVisible) {
                    $collapsible.slideDown(150);
                } else {
                    $collapsible.slideUp(150);
                }

                $this.text(isVisible ? 'less -' : 'more +');
            });
        };

        toggleNavbar();
        onNavClick();
        onTopClick();
        expandSkills();
    });
};
