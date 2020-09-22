const style = () => ({
  deactivate: {
    zIndex: -1,
    position: 'absolute',
    visibility: 'hidden',
    opacity: 0,
    transition: 'max-height .5s ease-out',
    overflow: 'hidden',
    listStyle: 'none',
  },
  activate: {
    '& > li': {
      marginBottom: '5px',
    },
    visibility: 'visible',
    opacity: 1,
    zIndex: 10,
    maxHeight: '200px',
    height: 'auto',
    position: 'absolute',
    transition: 'max-height .5s ease-out',
    listStyle: 'none',
    padding: 0,
    marginTop: '5px',
  },
});

export default style;
