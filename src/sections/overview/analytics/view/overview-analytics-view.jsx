import Grid from '@mui/material/Unstable_Grid2';

import { _analyticTraffic } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="New Members"
            percent={-0.1}
            total={1352831}
            color="secondary"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 47, 40, 62, 73, 30, 23, 54],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="Weekly Gifts"
            percent={2.8}
            total={172315}
            color="warning"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [40, 70, 50, 28, 70, 75, 7, 64],
            }}
          />
        </Grid>

        <Grid xs={12} sm={6} md={4}>
          <AnalyticsWidgetSummary
            title="Prayer Requests"
            percent={3.6}
            total={234}
            color="error"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [56, 30, 23, 54, 47, 40, 62, 73],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AnalyticsCurrentVisits
            title="Congregant Demographics"
            chart={{
              series: [
                { label: 'Caucasian', value: 3500 },
                { label: 'Hispanic', value: 2500 },
                { label: 'Asian', value: 1500 },
                { label: 'African American', value: 500 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AnalyticsWebsiteVisits
            title="Website visits"
            subheader="(+43%) than last year"
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              series: [{ name: 'Visits', data: [43, 33, 22, 37, 67, 68, 37, 24, 55] }],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AnalyticsCurrentSubject
            title="Engagement by topic"
            chart={{
              categories: [
                'Salvation',
                'Trinity',
                'Atonement',
                'Grace',
                'Revelation',
                'Redemption',
              ],
              series: [
                { name: '18-29', data: [80, 50, 30, 40, 100, 20] },
                { name: '30-39', data: [20, 30, 40, 80, 20, 80] },
                { name: '40-49', data: [44, 76, 78, 13, 43, 10] },
                { name: '50+', data: [34, 76, 30, 13, 73, 20] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={6}>
          <AnalyticsTrafficBySite title="Traffic by site" list={_analyticTraffic} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
