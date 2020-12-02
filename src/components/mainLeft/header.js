import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import "./style.css";
const style = {
  marginTop: 12,
  marginLeft: 8,
  marginRight: 8,
};

function Header() {
  // const {updateHeaderData, removeData} = useContext();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // updateHeaderData(data);
    // removeData();
  };
  return (
    <div className="">
      <h2>Header</h2>
      <form className="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          // defaultValue = {content.header.name}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          // defaultValue = {content.header.email}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          // defaultValue={content.header.phone}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          name="address"
          variant="outlined"
          // defaultValue={content.header.address}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          name="city"
          // defaultValue={content.header.city}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="Day of birth"
          variant="outlined"
          name="birthday"
          // defaultValue={content.header.state}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          name="gender"
          // defaultValue={content.header.gender}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />
      </form>
    </div>
  );
}

export default Header;
