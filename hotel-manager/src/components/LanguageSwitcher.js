import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleClick = (lang, popupState) => {
    changeLanguage(lang);
    popupState.close();
  }


  return (
    // <ButtonGroup variant="contained" aria-label="outlined primary button group">
    //   <Button onClick={() => changeLanguage('en')}>English</Button>
    //   <Button onClick={() => changeLanguage('vi')}>Tiếng Việt</Button>
    // </ButtonGroup>

    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => handleClick('en', popupState)}>English</MenuItem>
            <MenuItem onClick={() => handleClick('vn', popupState)}>Vietnamese</MenuItem>
            <MenuItem onClick={() => handleClick('es', popupState)}>Espanol</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default LanguageSwitcher;
