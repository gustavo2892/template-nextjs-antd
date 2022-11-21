import { ThemeConfig } from 'antd/es/config-provider/context';

import { theme } from './theme';

export const antd: ThemeConfig = {
  token: { colorPrimary: theme.colors.primary }
};
