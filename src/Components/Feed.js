import React, { useState } from 'react';
import * as muiStyled from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import parse from 'html-react-parser';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ExpandMore = muiStyled.styled((props) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const StyledCard = styled(Card)`
  .css-et1ao3-MuiTypography-root {
    font-weight: bold;
  }
`;

const StyledFavoriteIcon = styled(FavoriteIcon)`
  &.fillIcon > path {
    fill: red;
  }
`;

export default function Feed({
  profileImgeUrl,
  name,
  submittedDateTime,
  specification,
  shortDescription,
  longDescription,
  feedDataInfo,
  isFavourite
}) {
  const [expanded, setExpanded] = useState(false);
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: true
  };
  const entryDateTime = new Date(submittedDateTime).toLocaleTimeString('en-US', dateOptions);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard className="feed">
      <CardHeader
        avatar={<Avatar alt={name} src={process.env.PUBLIC_URL + '/images/' + profileImgeUrl} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={specification}
        subheader={entryDateTime}
      />
      <CardMedia
        component="img"
        height="194"
        image={process.env.PUBLIC_URL + '/images/' + feedDataInfo}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <StyledFavoriteIcon className={isFavourite ? 'fillIcon' : ''} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{parse(longDescription)}</Typography>
        </CardContent>
      </Collapse>
      <Divider />
    </StyledCard>
  );
}

Feed.propTypes = {
  name: PropTypes.string,
  profileImgeUrl: PropTypes.string,
  submittedDateTime: PropTypes.string,
  specification: PropTypes.string,
  shortDescription: PropTypes.string,
  longDescription: PropTypes.string,
  feedDataInfo: PropTypes.string,
  isFavourite: PropTypes.bool
};
