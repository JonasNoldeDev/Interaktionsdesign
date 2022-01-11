import vueConfig from '../vue.config';

let routes = {
    '/': 'Home',
    '/lernsektionen': 'Lernsektionen',
    '/lernsektionen/start': 'Sektion1',
    '/lernsektionen/sektion1': 'Sektion1',
    '/lernsektionen/crossword': 'Crossword',
    '/lernsektionen/lesson1/part1': 'lesson1/part1',
    '/optionen': 'Optionen',
    '/about': 'About'
};

for (const path in routes) {
    routes[vueConfig.publicPath + path] = routes[path];
    if (vueConfig.publicPath) delete routes[path];
}

export default routes;
