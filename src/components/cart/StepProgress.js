import React from 'react';
import { Grid, Header, Step } from 'semantic-ui-react';

const propTypes = {
  steps: PT.arrayOf(PT.object)
}

const StepProgress = (props) => {
  return(
      <Grid.Column width='12'>
        <Header as='h1' content='CHECKOUT'/>
        <Step.Group items={props.steps} />
      </Grid.Column>
  )
}

StepProgress.propTypes = propTypes;

export default StepProgress;