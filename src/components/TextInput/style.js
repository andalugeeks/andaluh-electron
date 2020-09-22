const style = () => ({
  textContainer: {
    width: '80vw',
    backgroundColor: '#eee',
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '10px',
    border: '1px solid #ddd',
    boxShadow: '2px 2px #eee',
  },
  textarea: {
    '& textarea': {
      padding: '5px 15px',
    },
    resize: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderRadius: '0',
    width: '100%',
    border: 'none',
  },
  title: {
    color: '#666',
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
  },
});

export default style;
