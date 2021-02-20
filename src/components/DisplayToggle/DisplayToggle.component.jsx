import React, { useState } from 'react';
import Switch from 'react-switch';
import { Wrapper } from './DisplayToggle.styled';

function DisplayToggle() {
  const [checked, setChecked] = useState(false);

  const toggle = React.useCallback(() => {
    setChecked((v) => !v);
  }, []);

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default DisplayToggle;
