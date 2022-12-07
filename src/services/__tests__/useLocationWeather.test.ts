import { renderHook, waitFor } from '@testing-library/react-native';

import { mockLocationResponse } from '../../__tests__/utils/mockLocationResponse';
import { QueryClienWrapper } from '../../__tests__/utils/QueryComponentUtil';
import * as axiosClient from '../remote-data-source/networking/axiosClient';
import { useLocationWeather } from '../remote-data-source/useLocationWeather';

jest.useFakeTimers();

describe('useLocationWeather', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('given a list of valid ids, it should parse the response to type LocationResponse', async () => {
    const mock = jest.spyOn(axiosClient, 'requestSecureGet');
    mock.mockReturnValue(Promise.resolve(mockLocationResponse));

    const { result } = renderHook(() => useLocationWeather(), {
      wrapper: QueryClienWrapper,
    });
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    await waitFor(() => expect(result.current.data?.length).toBe(2));

    await waitFor(() =>
      expect(typeof result.current.data?.[0].main.temp).toBe('number'),
    );
    await waitFor(() =>
      expect(typeof result.current.data?.[0].weather).toBe('object'),
    );
    await waitFor(() =>
      expect(result.current.data?.[0].main.temp).toBe(286.04),
    );
    await waitFor(() => expect(result.current.data?.[0].name).toBe('Paris'));
    await waitFor(() =>
      expect(typeof result.current.data?.[0].main.temp).toBe('number'),
    );
    await waitFor(() =>
      expect(result.current.data?.[1].main.temp).toBe(285.52),
    );
    await waitFor(() => expect(result.current.data?.[1].name).toBe('Madrid'));
  });
});
