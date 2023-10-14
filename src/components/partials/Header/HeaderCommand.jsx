import React, { useCallback, useState } from 'react';
import Alert from '../../components/Alert/Alert';
import LogoIco from '../../components/Ico/Logo';
import NotificationBoard from '../NotificationBoard/NotificationBoard';


import {
  Container,
  ContentLeft,
  ContentRight,
  Text,

} from './header.styled';


function HeaderCommand() {
 const [isVisible, setIsVisible] = useState(false);

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
        <ContentLeft onClick={() => setIsVisible(true)}>
          {/* <MenuIco /> */}
          <Text>COMMANDS VIEWS PAGE</Text>
        </ContentLeft>
        <ContentRight>
          <Alert
            ShowNotifications={hanldenShowNotifications}
          />
        </ContentRight>
      </Container>
      {isVisible && (
        <NotificationBoard/>
      )}
    </React.Fragment>
  );
}

export default HeaderCommand;
