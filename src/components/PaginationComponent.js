import React from "react";
import { Grid, Button, MobileStepper } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

const PaginationComponent = ({
  totalPages,
  page,
  handleNext,
  handleBack,
  variant
}) => {
  const totalPagesRounded = Math.round(totalPages);
  return (
    <Grid item xs={12}>
      <MobileStepper
        variant={variant || "text"}
        steps={totalPagesRounded}
        position="static"
        activeStep={page}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={page === totalPages}
          >
            Próximo
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={page === 0}>
            <KeyboardArrowLeft />
            Anterior
          </Button>
        }
      />
    </Grid>
  );
};

export default PaginationComponent;
