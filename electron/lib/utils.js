const loadWindow = (mainWindow, buildPath) => {
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL(`http://${process.env.HOST}:${process.env.PORT}`);
  } else {
    mainWindow.loadFile(buildPath);
  }
};
module.exports = {
  loadWindow,
};
