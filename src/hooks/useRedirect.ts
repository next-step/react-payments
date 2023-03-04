import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Domains, domains } from "@/router";

const useRedirect = (domain: Domains, redirectCondition = true) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectCondition) {
      navigate(domains[domain]);
    }
  }, []);
};

export default useRedirect;
