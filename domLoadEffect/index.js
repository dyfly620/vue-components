import {isInContainer} from './utils';
import './styles.less';

const container = document.querySelector('#app');

const load = (el, container) => {
    if (isInContainer(el, container)) {
        el.classList.add('scroll-show');
        container.removeEventListener('scroll', function() {});
    }
};

export default {
    bind(el) {
        container.addEventListener('scroll', function() {
            // console.log('scroll');
            load(el, container);
        });
    },
    inserted(el, binding) {
        el.classList.add('scroll-init');
        if (binding.value && Number(binding.value) > 200) {
            setTimeout(() => {
                load(el, container);
            }, Number(binding.value));
            return;
        }
        load(el, container);
    }
};

