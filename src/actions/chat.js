import axios, { endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

const enableServer = false;

const CHART_ENDPOINT = endpoints.chat;

const swrOptions = {
  revalidateIfStale: enableServer,
  revalidateOnFocus: enableServer,
  revalidateOnReconnect: enableServer,
};

// ----------------------------------------------------------------------

export async function createChart(conversationData) {
  const url = [CHART_ENDPOINT, { params: { endpoint: 'conversations' } }];

  const data = { conversationData };
  const res = await axios.post('https://gloo-24-func.azurewebsites.net/api/main');

  return res;
}
