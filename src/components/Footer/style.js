const style = ({ palette }) => ({
  root: {
    color: palette.secondary.main,
    backgroundColor: palette.primary.main,
  },
  content: {
    justifyContent: 'space-between',
  },
  iconContent: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default style;
