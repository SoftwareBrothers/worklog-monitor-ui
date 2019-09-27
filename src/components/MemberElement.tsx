import React from 'react';
import WorklogsList from './WorklogsList';
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
import { Worklog } from '../models/Worklog';
import { getDuration, sumWorklogs } from '../utils/TimeCalculations';

interface Props {
  name: string;
  picture: string;
  id: string;
  worklogs?: Worklog[];
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
      width: '300px',
      textAlign: 'right',
    },
    moreInfo: {
      borderColor: '#eaeaea',
      borderWidth: '1px 0 0 0',
      borderStyle: 'solid',
      backgroundColor: '#ffffff',
    },
    worklogsTotal: {
      fontSize: '12px',
      color: '#707070',
      marginLeft: '10px',
    },
  }),
);

const MemberElement = (props: Props) => {
  const classes = useStyles();

  if (props.worklogs !== undefined && props.worklogs.length > 0) {
      console.log(sumWorklogs(props.worklogs));
  }

  return (
    <ExpansionPanel className={classes.memberElement}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        classes={{
          content: classes.panelSummary,
        }}
        href={'#'}
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
          {props.worklogs !== undefined && props.worklogs.length > 0 ? (
            <div>
              <span>{getDuration(sumWorklogs(props.worklogs))} logged</span>
              <span className={classes.worklogsTotal}>
                {' '}
                in ({props.worklogs.length} worklogs)
              </span>
            </div>
          ) : (
            '0'
          )}
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.moreInfo}>
        <WorklogsList worklogs={props.worklogs ? props.worklogs : []} />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default MemberElement;
