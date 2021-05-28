import React, { useState, useEffect } from 'react';
import { withStyles, Fab } from '@material-ui/core';
import { EPA } from '@andalugeeks/andaluh';

import parameters from './parameters.json';
import style from './style';
import TextInput from '../TextInput';
import DropDownButtons from '../DropDownButtons';

const translator = new EPA();

const Translator = (props) => {
  const { classes } = props;
  const { placeholder, title } = parameters;

  const [text, setText] = useState('');
  const [opened, setOpened] = useState(false);
  const [{ selectedDropdown, options, letter }, setState] = useState({
    selectedDropdown: 'Ç',
    options: new Set(['S', 'Z', 'H']),
    letter: 'H',
  });

  const onClickEPA = () => setState({
    selectedDropdown: 'Ç',
    options: new Set(['S', 'Z', 'H']),
    letter: 'H',
  });

  const toggle = () => {
    setOpened(!opened);
  };
  const onBlur = (e) => {
    if (!e.relatedTarget) {
      setOpened(false);
    }
  };
  const onClickDropdown = (evt) => {
    const { target } = evt;
    const newOptions = options;
    newOptions.add(selectedDropdown);
    newOptions.delete(target.innerText);

    setState({
      options: newOptions,
      selectedDropdown: target.innerText,
      letter,
    });
  };

  const onClickLetter = () => {
    setState({
      selectedDropdown,
      options,
      letter: letter === 'H' ? 'J' : 'H',
    });
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    setOpened(false);
  }, [selectedDropdown]);

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <div className={classes.btnContainer}>
          <div className={classes.btnContent}>
            <Fab color="primary" onClick={onClickEPA}>EPA</Fab>
            <DropDownButtons
              buttons={options}
              selectedButton={selectedDropdown}
              onClick={onClickDropdown}
              onBlur={onBlur}
              open={toggle}
              activate={opened}
            />
            <Fab color="secondary" onClick={onClickLetter}>{letter}</Fab>
          </div>
        </div>
        <TextInput
          title={title.castellano}
          placeholder={placeholder.castellano}
          onChange={onChangeText}
        />
        <TextInput
          title={title.andaluh}
          readOnly
          placeholder={translator.transcript(placeholder.castellano)}
          value={translator.transcript(text, selectedDropdown.toLowerCase(), letter === 'H' ? 'h' : 'j')}
        />
      </div>
    </div>
  );
};

export default withStyles(style, { withTheme: true })(Translator);
