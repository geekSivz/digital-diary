import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import Feed from './Feed';

const StyledContainer = styled(Container)`
  &.MuiContainer-root {
    padding: 0px 5px;
  }
  .header {
    background-color: #fff;
    box-shadow: none;
  }
  .toolBar {
    margin: 0 auto;
  }
  div.feed {
    max-width: 100%;
    box-shadow: none;
  }
`;

const App = () => {

  return (
    <StyledContainer maxWidth="xl">
      <AppBar position="static" className="header">
        <Toolbar disableGutters className="toolBar">
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#F96167',
                textDecoration: 'none',
              }}
            >
              <object data="logo.svg" width="300" height="100"> </object>
            </Typography>
        </Toolbar>
      </AppBar>
      <Divider />
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Feed imgVal={1} />
          <Feed imgVal={2} />
          <Feed imgVal={3} />
          <Feed imgVal={1} />
          <Feed imgVal={2} />
        </Stack>
      </Box>
      <Box>
        <Typography
          variant="p"
          component="p"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.1rem',
            color: '#F96167',
            textDecoration: 'none',
            padding: '10px'
          }}
        >
          DD Media Private Limited., © Copyrights 2022. All Rights Reserved.
        </Typography>
      </Box>
    </StyledContainer>
  );
};
export default App;