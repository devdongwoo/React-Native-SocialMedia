import React from 'react';
import {Text} from 'react-native';

import Style from './style';
import PropTypes from 'prop-types';

export default function Title({title}) {
  return (
    <>
      <Text style={Style.title}>{title}</Text>
    </>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
