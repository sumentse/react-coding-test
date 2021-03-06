import React, {Component} from 'react';
import {FilterConsumer} from '../providers/FilterProvider';
import PropTypes from 'prop-types';
import {Button, withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import TableChartIcon from '@material-ui/icons/TableChart';
import blue from '@material-ui/core/colors/blue';

const styles = (theme) => {
  return ({
    button: {
      margin: theme.spacing.unit
    },
    icons: {
      marginRight: theme.spacing.unit
    }
  });
};

const theme = createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: '#fff',
        '&:focus': {
          background: blue[800]
        }
      }
    }
  }
});

class VisualizationMenu extends Component {
  constructor() {
    super()
    this.state = {};

  }
  render() {
    const {classes} = this.props;

    return (
      <div className="mt-m ml-xs">
        <span>View Chart As:</span>
        <MuiThemeProvider theme={theme}>
          <FilterConsumer>
          {
            ({changeGraph})=>(
              <React.Fragment>          
                <Button variant="contained" 
                  color="primary"
                  onClick={()=>changeGraph('table')}
                  className={classes.button}><TableChartIcon className={classes.icons}/> Table
                </Button>
                <Button variant="contained" 
                  color="primary" 
                  onClick={()=>changeGraph('line')}
                  className={classes.button}><ShowChartIcon className={classes.icons}/> Line
                </Button>
                <Button variant="contained" 
                  color="primary" 
                  onClick={()=>changeGraph('area')}
                  className={classes.button}><ShowChartIcon className={classes.icons}/> Area 
                </Button>
              </React.Fragment>
              )
            }
          </FilterConsumer>          
        </MuiThemeProvider>
      </div>
    );
  }
};

VisualizationMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VisualizationMenu);