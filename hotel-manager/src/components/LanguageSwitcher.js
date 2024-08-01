import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function LanguageSwitcher() {
  const { i18n }  = useTranslation();

  const changeLanguage = (lang, popupState) => {
    i18n.changeLanguage(lang);
    popupState.close();
  };

  return (
    <PopupState variant="popover" popupId="language-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" sx={{fontSize: '12px', marginTop: '5px'}} {...bindTrigger(popupState)}>
            Languages
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => changeLanguage('en', popupState)}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('vi', popupState)}>Tiếng Việt</MenuItem>
            <MenuItem onClick={() => changeLanguage('es', popupState)}>Espanol</MenuItem>
            <MenuItem onClick={() => changeLanguage('fr', popupState)}>French</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default LanguageSwitcher;
