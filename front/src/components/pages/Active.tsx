import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { postAPI } from "../../api/FetchData";
import styled from "styled-components";

const Active = () => {
  const { slug } = useParams();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (slug) {
      postAPI("active", { active_token: slug })
        .then((res) => setSuccess(res.data.msg))
        .catch((err) => setErr(err.response.data.msg));
    }
  }, [slug]);

  return (
    <div>
      {err && <ErrMsg>{err}</ErrMsg>}
      {success && <SuccessMsg>{success}</SuccessMsg>}
    </div>
  );
};

const ErrMsg = styled.div`
  color: red;
`;
const SuccessMsg = styled.div`
  color: blue;
`;

export default Active;
