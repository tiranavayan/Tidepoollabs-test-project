import axios from 'axios';

export const getActivities = async ({ page = 1, count = 10 }) => {
  const { data, headers } = await axios.get(
    'https://tpl-task-api.herokuapp.com/activities',
    {
      params: {
        page,
        count,
      },
    },
  );

  return {
    activities: data || [],
    total: Number(headers.total) || 0,
  };
};
