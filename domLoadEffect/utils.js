import Vue from 'vue';

const isServer = Vue.prototype.$isServer;

export const isInContainer = (el, container) => {
    if (isServer || !el || !container) {
        return false;
    }

    const elRect = el.getBoundingClientRect();
    let containerRect;

    if ([window, document, document.documentElement, null].includes(container) || typeof container == 'undefined') {
        containerRect = {
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            left: 0
        };
    } else {
        containerRect = container.getBoundingClientRect();
    }

    return elRect.top < containerRect.bottom &&
      elRect.bottom > containerRect.top &&
      elRect.right > containerRect.left &&
      elRect.left < containerRect.right;
};
