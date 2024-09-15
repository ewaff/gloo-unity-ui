import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

import { Illustration } from 'src/assets/illustrations';
import { DashboardContent } from 'src/layouts/dashboard';
import { _appEngager, _appStreams, _appInvoices } from 'src/_mock';

import { useMockedUser } from 'src/auth/hooks';

import { WidgetWelcome } from '../widget-welcome';
import { WidgetSummary } from '../widget-summary';
import { WidgetNewInvoice } from '../widget-new-invoice';
import { WidgetGiftsByAge } from '../widget-gifts-by-age';
import { WidgetTopEngagement } from '../widget-top-engagement';
import { WidgetCurrentVisitor } from '../widget-current-visitor';
import { WidgetTopStreamingCountries } from '../widget-top-streaming-countries';

// ----------------------------------------------------------------------

export function OverviewAppView() {
  const { user } = useMockedUser();

  const theme = useTheme();

  return (
    <DashboardContent maxWidth="xl">
      <Grid container spacing={3}>
        <Grid xs={12} md={12}>
          <WidgetWelcome
            title={`Welcome back 👋 \n ${user?.displayName}`}
            description="We've found that you can improve you engagement by preaching a message related to Acts of Service, would you like to know more about this subject?"
            img={<Illustration hideBackground />}
            action={
              <Button variant="contained" color="primary">
                Go now
              </Button>
            }
          />
        </Grid>

        <Grid xs={12} md={4}>
          <WidgetSummary
            title="Total new visitors"
            percent={2.6}
            total={18765}
            chart={{
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [15, 18, 12, 51, 68, 11, 39, 37],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <WidgetSummary
            title="Total new members"
            percent={0.2}
            total={4876}
            chart={{
              colors: [theme.vars.palette.info.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [20, 41, 63, 33, 28, 35, 50, 46],
            }}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <WidgetSummary
            title="Total gifts"
            percent={-0.1}
            total={678}
            chart={{
              colors: [theme.vars.palette.error.main],
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
              series: [18, 19, 31, 8, 16, 37, 12, 33],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <WidgetCurrentVisitor
            title="Visitor Demographics"
            subheader="By age group"
            chart={{
              series: [
                { label: '18-29', value: 12244 },
                { label: '30-39', value: 53345 },
                { label: '40-49', value: 44313 },
                { label: '50+', value: 78343 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <WidgetGiftsByAge
            title="Gifts by age group"
            subheader="(+43%) than last year"
            chart={{
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ],
              series: [
                {
                  name: '2022',
                  data: [
                    { name: '18-29', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '30-39', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '40-49', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '50+', data: [40, 12, 38, 32, 20, 42, 28, 21, 10, 24, 11, 12] },
                  ],
                },
                {
                  name: '2023',
                  data: [
                    { name: '18-29', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '30-39', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '40-49', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '50+', data: [40, 12, 38, 32, 20, 42, 28, 21, 10, 24, 11, 12] },
                  ],
                },
                {
                  name: '2024',
                  data: [
                    { name: '18-29', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '30-39', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '40-49', data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16] },
                    { name: '50+', data: [40, 12, 38, 32, 20, 42, 28, 21, 10, 24, 11, 12] },
                  ],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} lg={8}>
          <WidgetNewInvoice
            title="New invoice"
            tableData={_appInvoices}
            headLabel={[
              { id: 'id', label: 'Invoice ID' },
              { id: 'category', label: 'Category' },
              { id: 'price', label: 'Price' },
              { id: 'status', label: 'Status' },
              { id: '' },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column' }}>
            <WidgetTopStreamingCountries
              title="Top streaming countries by device"
              list={_appStreams}
            />
          </Box>
          <WidgetTopEngagement title="Top engagement" list={_appEngager} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
