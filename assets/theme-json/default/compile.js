import config from './config.js';
import settings from './settings.js';
import styles from './styles.js';
import * as fs from 'fs';

var theme = {
    ...config,
    settings,
    styles
}

var json = JSON.stringify(theme);

fs.writeFileSync('theme.json', json);