import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'patternfly-react';
import PageLayout from '../../common/PageLayout/PageLayout';
import Statistics from './Statistics/Statistics';
import { translate as __ } from '../../../common/I18n';

const StatisticsPage = ({ statisticsMeta, discussionUrl, ...props }) => (
  <PageLayout header={__('Statistics')} searchable={false}>
    <Alert type="warning">
      <span className="pficon pficon-warning-triangle-o" />
      <strong>This functionality is deprecated </strong>
      <span className="text">
        and will be removed in version 6.9.
        <a href="https://access.redhat.com/documentation/en-us/red_hat_satellite/6.7/html/release_notes/index" target="_blank" rel="noreferrer">
          Join discussion
        </a>
      </span>
    </Alert>
    <Statistics statisticsMeta={statisticsMeta} {...props} />
  </PageLayout>
);

StatisticsPage.propTypes = {
  statisticsMeta: PropTypes.array,
  discussionUrl: PropTypes.string,
};

StatisticsPage.defaultProps = {
  statisticsMeta: [],
  discussionUrl: '',
};

export default StatisticsPage;
