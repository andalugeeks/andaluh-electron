const { globalShortcut, app } = require('electron');

const SHORTCUTS = [{
  shortcut: 'CommandOrControl+W',
  action: () => app.quit()
}];

const registerShortcuts = () => {
  SHORTCUTS.forEach(opt => globalShortcut.register(opt.shortcut, opt.action));
};

module.exports = {
  registerShortcuts,
};
