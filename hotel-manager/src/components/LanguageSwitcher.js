import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    // <ButtonGroup variant="contained" aria-label="outlined primary button group">
    //   <Button onClick={() => changeLanguage('en')}>English</Button>
    //   <Button onClick={() => changeLanguage('vi')}>Tiếng Việt</Button>
    // </ButtonGroup>

    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" sx={{fontSize: '12px', marginTop: '5px'}} {...bindTrigger(popupState)}>
            Languages
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => {changeLanguage('en'); popupState.close()}}>English</MenuItem>
            <MenuItem onClick={() => {changeLanguage('vn'); popupState.close()}}>Tiếng Việt</MenuItem>
            <MenuItem onClick={() => {changeLanguage('es'); popupState.close()}}>Espanol</MenuItem>
            <MenuItem onClick={() => {changeLanguage('fr'); popupState.close()}}>French</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default LanguageSwitcher;
