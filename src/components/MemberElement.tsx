import React from 'react';
import WorklogsList from './WorklogsList/WorklogsList';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  makeStyles,
  Theme,
  Typography,
  Avatar,
} from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/core/SvgIcon/SvgIcon';

interface Props {
  name: string;
  picture: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    memberElement: {
      marginBottom: '10px',
      borderRadius: '6px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      '&:before': {
        content: ' ',
        display: 'none',
      },
      '&:hover': {
        boxShadow: '0 3px 7px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightBold,
    },
    bigAvatar: {
      margin: '0 20px 0 0',
      width: 40,
      height: 40,
    },
    panelSummary: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    panelSummaryLeft: {
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    panelSummaryRight: {
      width: '200px',
      textAlign: 'right',
    },
  }),
);

const MemberElement = (props: Props) => {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.memberElement}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        classes={{
          content: classes.panelSummary,
        }}
      >
        <div className={classes.panelSummaryLeft}>
          <Avatar
            alt={props.name}
            src={props.picture}
            className={classes.bigAvatar}
          />
          <Typography className={classes.heading}>{props.name}</Typography>
        </div>
        <div className={classes.panelSummaryRight}>
          <span>3 worklogs [8h 20m]</span>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <WorklogsList showAll={false} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default MemberElement;
