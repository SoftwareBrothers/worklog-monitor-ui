import React from 'react';
import {
  ExpansionPanelSummary,
  ExpansionPanel,
  makeStyles,
  Theme,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";
import {createStyles} from "@material-ui/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface Props {
  showAll: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
      },
    }),
);

const WorklogsList = (props: Props) => {
  const classes = useStyles();

  return (
      <ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <ul>
              <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
              <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
              <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
              <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
              <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
              <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
              <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
            </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>

  );
};

export default WorklogsList;
