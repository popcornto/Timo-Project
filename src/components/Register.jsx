import React from "react";

function Register(props) {
  return (
    <div className= {`${props.gridRegister} w-screen h-screen bg-slate-700 flex flex-col  justify-center items-center gap-10`}>
      <form className="w-80 flex flex-col rounded-lg  justify-center content-center gap-10 bg-slate-300">
        <h1 className="text-4xl text-center w-44 self-center">Hi</h1>
        <input
          className="input input-bordered font-sans text-center w-64 self-center"
          type="text"
          placeholder="Username"
        />
        <input
          className="input input-bordered font-sans text-center w-64 self-center"
          type="password"
          placeholder="Password"
        />
        <input
          className="input input-bordered font-sans text-center w-64 self-center"
          type="password"
          placeholder="Confirm Password"
        />
        <button className="m-5 btn font-sans rounded-lg w-20 bg-blue-700 text-center self-center ">Login</button>
      </form>
    </div>
  );
}

export default Register;
