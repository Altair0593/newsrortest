import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const Spinner = ({ theme }) => {
  return (
    <Loader
      type='Puff'
      color={theme.spinnerColorTheme}
      height={150}
      width={150}
    />
  );
};

Spinner.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default React.memo(Spinner);