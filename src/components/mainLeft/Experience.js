import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

const style = {
  marginTop: 12,
  marginLeft: 8,
  marginRight: 8,
};

function Experience() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="experience">
      <h2>Professional Experience</h2>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Company 1</h4>
        <TextField
          id="outlined-basic"
          label="Company"
          name="company"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="City/State/Country"
          name="city"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Position"
          name="position"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Descrition"
          name="descrition"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Descrition"
          name="descrition"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <h4>Company 2</h4>
        <TextField
          id="outlined-basic"
          label="Company"
          name="company2"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="City/State/Country"
          name="city2"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Position"
          name="position2"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start2"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end2"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Descrition"
          name="descrition2"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <TextField
          id="outlined-basic"
          label="Descrition"
          name="descrition2"
          variant="outlined"
          style={style}
          inputRef={register}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          style={style}
        >
          Add
        </Button>
      </form>
    </div>
  );
}

export default Experience;
