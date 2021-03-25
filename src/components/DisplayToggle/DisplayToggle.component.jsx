import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import { DisplayToggleWrapper } from './DisplayToggle.styled';
import { useTheme } from '../../providers/Theme';

function DisplayToggle() {
  const { setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  const toggle = React.useCallback(() => {
    setChecked((v) => !v);
  }, []);

  useEffect(() => {
    if (checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [checked, setTheme]);

  return (
    <DisplayToggleWrapper>
      <Switch
        onChange={toggle}
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        handleDiameter={30}
        height={20}
        width={48}
      />
      Dark mode
    </DisplayToggleWrapper>
  );
}

export default DisplayToggle;
