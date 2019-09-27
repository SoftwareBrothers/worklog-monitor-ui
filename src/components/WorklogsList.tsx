import React, { useContext } from 'react';
import { makeStyles, Theme, Chip } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { Worklog } from '../models/Worklog';
import Moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    worklogList: {
      listStyleType: 'none',
      width: '100%',
      paddingLeft: 0,
    },
    worklogElement: {
      padding: '5px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignContent: 'center',
    },
    chip: {
      margin: theme.spacing(1),
    },
    worklogLeft: {
      textAlign: 'left',
      alignItems: 'center',
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
    },
  }),
);

interface Props {
  worklogs: Worklog[];
}

const WorklogsList = (props: Props) => {
  const classes = useStyles();
  const formatDatetime = (datetime: Date): string => {
    return Moment(datetime).format('MMM Do YY, hh:mm:ss');
  };

  return (
    <>
      {(props.worklogs.length > 0 && (
        <ul className={classes.worklogList}>
          {props.worklogs.map((worklog: Worklog) => {
            return (
              <li key={worklog.id} className={classes.worklogElement}>
                <div className={classes.worklogLeft}>
                  <span className={classes.timestamp}>
                    {formatDatetime(worklog.created)}
                  </span>
                  <span>
                    [{worklog.issueKey}]: {worklog.description}{' '}
                  </span>
                </div>
                <div className={classes.worklogRight}>
                  <Chip
                    size="small"
                    label={worklog.timeSpentSeconds}
                    className={classes.chip}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )) || <div>No worklogs!</div>}
      {/*<div>No worklogs!</div>*/}
      {/*<ul className={classes.worklogList}>*/}
      {/*    <li className={classes.worklogElement}>*/}
      {/*        <div className={classes.worklogLeft}>*/}
      {/*            <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}*/}
      {/*        </div>*/}
      {/*        <div className={classes.worklogRight}>*/}
      {/*            <Chip size="small" label="3h 15m" className={classes.chip} />*/}
      {/*        </div>*/}
      {/*    </li>*/}
      {/*    <li className={classes.worklogElement}>*/}
      {/*        <div className={classes.worklogLeft}>*/}
      {/*            <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}*/}
      {/*        </div>*/}
      {/*        <div className={classes.worklogRight}>*/}
      {/*            <Chip size="small" label="3h 15m" className={classes.chip} />*/}
      {/*        </div>*/}
      {/*    </li>*/}
      {/*    <li className={classes.worklogElement}>*/}
      {/*        <div className={classes.worklogLeft}>*/}
      {/*            <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}*/}
      {/*        </div>*/}
      {/*        <div className={classes.worklogRight}>*/}
      {/*            <Chip size="small" label="3h 15m" className={classes.chip} />*/}
      {/*        </div>*/}
      {/*    </li>*/}
      {/*    <li className={classes.worklogElement}>*/}
      {/*        <div className={classes.worklogLeft}>*/}
      {/*            <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}*/}
      {/*        </div>*/}
      {/*        <div className={classes.worklogRight}>*/}
      {/*            <Chip size="small" label="3h 15m" className={classes.chip} />*/}
      {/*        </div>*/}
      {/*    </li>*/}
      {/*    <li className={classes.worklogElement}>*/}
      {/*        <div className={classes.worklogLeft}>*/}
      {/*            <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}*/}
      {/*        </div>*/}
      {/*        <div className={classes.worklogRight}>*/}
      {/*            <Chip size="small" label="3h 15m" className={classes.chip} />*/}
      {/*        </div>*/}
      {/*    </li>*/}
      {/*    <li className={classes.worklogElement}>*/}
      {/*        <div className={classes.worklogLeft}>*/}
      {/*            <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}*/}
      {/*        </div>*/}
      {/*        <div className={classes.worklogRight}>*/}
      {/*            <Chip size="small" label="3h 15m" className={classes.chip} />*/}
      {/*        </div>*/}
      {/*    </li>*/}
      {/*    <li className={classes.worklogElement}>*/}
      {/*        <div className={classes.worklogLeft}>*/}
      {/*            <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}*/}
      {/*        </div>*/}
      {/*        <div className={classes.worklogRight}>*/}
      {/*            <Chip size="small" label="3h 15m" className={classes.chip} />*/}
      {/*        </div>*/}
      {/*    </li>*/}
      {/*</ul>*/}
    </>
  );
};

export default WorklogsList;
