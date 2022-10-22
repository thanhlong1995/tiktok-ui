// Layout
import { HeaderOnly } from '~/layouts/';
import config from '~/config/';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Seach';

const publicLayout = [
    { path: config.routes.home, conponent: Home },
    { path: config.routes.following, conponent: Following },
    { path: config.routes.profile, conponent: Profile },
    { path: config.routes.upload, conponent: Upload, layout: HeaderOnly },
    { path: config.routes.search, conponent: Search, layout: null },
];
const privateLayout = [];

export { publicLayout, privateLayout };
