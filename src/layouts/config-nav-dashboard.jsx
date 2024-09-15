import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  lock: icon('ic-lock'),
  label: icon('ic-label'),
  accounting: icon('ic-banking'),
  calendar: icon('ic-calendar'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Dashboard
   */
  {
    items: [
      { title: 'Dashboard', path: paths.dashboard.root, icon: ICONS.dashboard },
      {
        title: 'Communications',
        path: paths.dashboard.mail,
        icon: ICONS.mail,
        info: (
          <Label color="error" variant="inverted">
            +32
          </Label>
        ),
      },
      { title: 'Interactions', path: paths.dashboard.general.interactions, icon: ICONS.chat },
      { title: 'Analytics', path: paths.dashboard.general.analytics, icon: ICONS.analytics },
      { title: 'Accounting', path: paths.dashboard.general.accounting, icon: ICONS.accounting },
      { title: 'Calendar', path: paths.dashboard.calendar, icon: ICONS.calendar },
    ],
  },
  {
    items: [
      {
        title: 'Members',
        path: '#',
        icon: ICONS.user,
      },
    ],
  },
];
