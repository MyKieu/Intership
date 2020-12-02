import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

const style = {
  marginTop: 12,
  marginLeft: 8,
  marginRight: 8,
};
function Education() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="education">
      <h4>Education</h4>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Area"
          name="are"
          variant="outlined"
          inputRef={register}
          style={style}
        />
        <TextField
          id="outlined-basic"
          label="City/Country"
          name="city"
          variant="outlined"
          inputRef={register}
          style={style}
        />
        <TextField
          id="outlined-basic"
          label="Major"
          name="major"
          variant="outlined"
          inputRef={register}
          style={style}
        />
        <TextField
          id="outlined-basic"
          label="Gradution Year"
          name="gradution"
          variant="outlined"
          inputRef={register}
          style={style}
        />
        <TextField
          id="outlined-basic"
          label="Additional Info"
          name="add"
          variant="outlined"
          inputRef={register}
          style={style}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          style={style}
        >
          ADD
        </Button>
      </form>
    </div>
  );
}

export default Education;
