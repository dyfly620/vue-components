import './style.less';
export default {
    name: 'DividerTitle',
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    render() {
        const title = this.title.split('');
        const html = [];
        title.forEach((txt, i) => {
            if (i == title.length - 1) {
                html.push(txt);
            } else {
                html.push(txt);
                html.push(<span class="splilt">/</span>);
            }
        });
        return (
            <p class="title">
                {html}
            </p>
        );
    }
};

