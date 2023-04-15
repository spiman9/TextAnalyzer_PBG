import React from "react";

export default function Alert(props) {
  return (
    <>{
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center`} role="alert">
        <strong>{props.alert.msg}</strong>
      </div>}
    </>
  );
}
