import React from "react";
import { Grid, Button, LinearProgress, MobileStepper } from "@material-ui/core";
import {
  ArrowForward,
  ArrowBack,
  KeyboardArrowLeft,
  KeyboardArrowRight
} from "@material-ui/icons";

const PaginationComponent = ({ totalPages, page, handleNext, handleBack }) => {
  return (
    <Grid item xs={12}>
      <MobileStepper
        variant="progress"
        steps={totalPages}
        position="static"
        activeStep={page}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={page === totalPages}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={page === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </Grid>
  );
};

export default PaginationComponent;
