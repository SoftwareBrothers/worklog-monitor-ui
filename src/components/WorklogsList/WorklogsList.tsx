import React from 'react';
import {
  ExpansionPanelSummary,
  ExpansionPanel,
  makeStyles,
  Theme,
  Typography,
  ExpansionPanelDetails,
  Chip,
} from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Props {
  showAll: boolean;
}

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
  }),
);

const WorklogsList = (props: Props) => {
  const classes = useStyles();

  return (
    <ul className={classes.worklogList}>
      <li className={classes.worklogElement}>
        <div className={classes.worklogLeft}>
          <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}
        </div>
        <div className={classes.worklogRight}>
          <Chip size="small" label="3h 15m" className={classes.chip} />
        </div>
      </li>
      <li className={classes.worklogElement}>
        <div className={classes.worklogLeft}>
          <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}
        </div>
        <div className={classes.worklogRight}>
          <Chip size="small" label="3h 15m" className={classes.chip} />
        </div>
      </li>
      <li className={classes.worklogElement}>
        <div className={classes.worklogLeft}>
          <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}
        </div>
        <div className={classes.worklogRight}>
          <Chip size="small" label="3h 15m" className={classes.chip} />
        </div>
      </li>
      <li className={classes.worklogElement}>
        <div className={classes.worklogLeft}>
          <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}
        </div>
        <div className={classes.worklogRight}>
          <Chip size="small" label="3h 15m" className={classes.chip} />
        </div>
      </li>
      <li className={classes.worklogElement}>
        <div className={classes.worklogLeft}>
          <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}
        </div>
        <div className={classes.worklogRight}>
          <Chip size="small" label="3h 15m" className={classes.chip} />
        </div>
      </li>
      <li className={classes.worklogElement}>
        <div className={classes.worklogLeft}>
          <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}
        </div>
        <div className={classes.worklogRight}>
          <Chip size="small" label="3h 15m" className={classes.chip} />
        </div>
      </li>
      <li className={classes.worklogElement}>
        <div className={classes.worklogLeft}>
          <span>24.05.2017, 10:30</span> - Working hard on hackathon{' '}
        </div>
        <div className={classes.worklogRight}>
          <Chip size="small" label="3h 15m" className={classes.chip} />
        </div>
      </li>
    </ul>
  );
};

export default WorklogsList;
