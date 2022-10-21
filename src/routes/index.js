// Layout
import { DefaultLayout } from '~/components/Layout';
import { HeaderOnly } from '~/components/Layout/';
import routesConfig from '~/config/routes';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Seach';

const publicLayout = [
    { path: routesConfig.home, conponent: Home },
    { path: routesConfig.following, conponent: Following },
    { path: routesConfig.profile, conponent: Profile },
    { path: routesConfig.upload, conponent: Upload, layout: HeaderOnly },
    { path: routesConfig.search, conponent: Search, layout: null },
];
const privateLayout = [];

export { publicLayout, privateLayout };
