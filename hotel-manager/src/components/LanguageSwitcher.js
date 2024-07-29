import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonGroup } from '@mui/material';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('vi')}>Tiếng Việt</Button>
    </ButtonGroup>
  );
}

export default LanguageSwitcher;
