import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
const style = {
  marginTop: 12,
  marginLeft: 8,
  marginRight: 8,
};
function Skill() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="skill">
      <h4>Additional Skills</h4>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label=""
          name="skill1"
          variant="outlined"
          inputRef={register}
          style={style}
        />
        <TextField
          id="outlined-basic"
          label=""
          name="skill2"
          variant="outlined"
          inputRef={register}
          style={style}
        />
        <TextField
          id="outlined-basic"
          label=""
          name="skill3"
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

export default Skill;
