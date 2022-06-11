import mockAxios from 'axios';

import {fetchData} from '../src/fetchData';

const testAdvice = 'Build something out of LEGO';

jest.mock('axios');

it('fetches advice from API', async () => {
  //setup
  mockAxios.get.mockImplementation(() =>
    Promise.resolve({
      data: {
        slip: {
          id: 123,
          advice: testAdvice,
        },
      },
    }),
  );

  //work
  const advice = await fetchData();

  //expect
  expect(advice).toEqual({
    id: 123,
    advice: testAdvice,
  });
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
