import React, { useCallback, useState } from 'react';
import Alert from '../../components/Alert/Alert';
import LogoIco from '../../components/Ico/Logo';


import {
  Container,
  ContentLeft,
  ContentRight,

} from './header.styled';


function HeaderCommand() {
 const [isVisible, setIsVisible] = useState();

 const hanldenShowNotifications = useCallback(() => {
  if (isVisible === true) {
    setIsVisible(false);
  }

  if (isVisible === false) {
    setIsVisible(true);
  }
}, [isVisible]);

  return (
    <React.Fragment>
      <Container>
        <ContentLeft>
          {/* <MenuIco /> */}
          <LogoIco />
        </ContentLeft>
        <ContentRight>
          <Alert
            ShowNotifications={hanldenShowNotifications}
          />
        </ContentRight>
      </Container>
      {isVisible && (
        <Notifications

        />
      )}
    </React.Fragment>
  );
}

export default HeaderCommand;
