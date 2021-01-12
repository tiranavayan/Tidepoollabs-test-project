import axios from 'axios';

export const getLessons = async ({ page = 1, count = 10 }) => {
  const { data, headers } = await axios.get(
    'https://tpl-task-api.herokuapp.com/lessons',
    {
      params: {
        page,
        count,
      },
    },
  );

  return {
    lessons: data || [],
    total: Number(headers.total) || 0,
  };
};
