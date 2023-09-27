import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { createOktaConfig } from "../helpers/login";

export const OktaConfigProvider = (props) => {
  const [created, setCreated] = useState(false);

  useEffect(() => {
    const createConfig = async () => {
      await createOktaConfig();
  
      setCreated(true);
    }

    createConfig();
  }, [])

  return created ? props.children : null;
}

OktaConfigProvider.propTypes = {
  children: PropTypes.node
};