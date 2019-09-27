import React from 'react';
import { makeStyles, Theme, Chip, Box, Typography } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { Worklog } from '../models/Worklog';
import { formatDatetime, getDuration } from '../utils/TimeCalculations';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    worklogList: {
      listStyleType: 'none',
      width: '100%',
      paddingLeft: 0,
      marginBottom: 0,
    },
    worklogElement: {
      padding: '5px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
      marginBottom: 15,
      '&:last-child': {
        marginBottom: 0,
      },
    },
    chip: {
      margin: theme.spacing(1),
    },
    worklogLeft: {
      textAlign: 'left',
      alignItems: 'flex-start',
      display: 'flex',
    },
    worklogRight: {
      textAlign: 'right',
    },
    timestamp: {
      display: 'block',
      marginRight: '20px',
      color: '#707070',
      fontStyle: 'italic',
      fontSize: '12px',
      lineHeight: 1.7,
    },
    issue: {
      lineHeight: 1,
      paddingRight: 8,
      marginBottom: 10,
    },
    content: {
      fontSize: 14,
      lineHeight: 1.4,
    },
  }),
);

interface Props {
  worklogs: Worklog[];
}

const WorklogsList = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      {(props.worklogs.length > 0 && (
        <ul className={classes.worklogList}>
          {props.worklogs.map((worklog: Worklog) => {
            console.log(worklog);
            return (
              <li key={worklog.id} className={classes.worklogElement}>
                <div className={classes.worklogLeft}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    paddingRight={3}
                  >
                    <span className={classes.timestamp}>
                      {formatDatetime(worklog.created).split(' ')[0]}
                    </span>
                    <span className={classes.timestamp}>
                      {formatDatetime(worklog.created).split(' ')[1]}
                    </span>
                  </Box>
                  <Box display="inline-flex" flexDirection="column">
                    <Typography variant="h6" className={classes.issue}>
                      {worklog.issueKey}:
                    </Typography>
                    {worklog.description.split(/\n/).map(part => (
                      <span className={classes.content}>{part}</span>
                    ))}
                  </Box>
                </div>
                <div className={classes.worklogRight}>
                  <Chip
                    size="small"
                    label={getDuration(worklog.timeSpentSeconds)}
                    className={classes.chip}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )) || <div>No worklogs!</div>}
    </>
  );
};

export default WorklogsList;
