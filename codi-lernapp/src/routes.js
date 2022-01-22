import vueConfig from '../vue.config';

let routes = {
    '/': 'Home',
    '/lernsektionen': 'Lernsektionen',
    '/lernsektionen/start': 'Sektion1',
    '/lernsektionen/sektion1': 'Sektion1',
    '/lernsektionen/crossword': 'Crossword',
    '/lernsektionen/lesson1/part1': 'lesson1/part1',
    '/lernsektionen/pdf': 'PDF',
    '/optionen': 'Optionen',
    '/explain': 'Explain'
};

if ('publicPath' in vueConfig && vueConfig.publicPath != '') {
    for (const path in routes) {
        routes[vueConfig.publicPath + path] = routes[path];
    }
}

export default routes;
