import React, { useState } from "react";


export default function RandomCard (props) {
  const {company, team, name, phoneNumber, email} = props.info;

  return (
    <div>
        <div>회사: {company}</div>
        <div>팀: {team}</div>
        <div>이름: {name}</div>
        <div>전화번호: {phoneNumber}</div>
        <div>email: {email}</div>
    </div>

  );
}