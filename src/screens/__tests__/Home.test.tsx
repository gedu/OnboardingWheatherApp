import React from 'react';

import {
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react-native';
import { mockLocationResponse } from 'src/__tests__/utils/mockLocationResponse';
import { mockNavigation } from 'src/__tests__/utils/mockNavigationObject';
import { QueryClienWrapper } from 'src/__tests__/utils/QueryComponentUtil';
import * as axiosClient from 'src/services/remote-data-source/networking/axiosClient';

import { HomeScreen } from '../Home/HomeScreen';

jest.useFakeTimers();

describe('Home Screen', () => {
  beforeEach(jest.clearAllMocks);
  afterEach(cleanup);

  it('when the screen shows and is fetching the information, should show the loading indicator then the list', async () => {
    const mock = jest.spyOn(axiosClient, 'requestSecureGet');
    mock.mockReturnValue(Promise.resolve(mockLocationResponse));

    render(
      <QueryClienWrapper>
        <HomeScreen navigation={mockNavigation} />
      </QueryClienWrapper>,
    );

    const loadingComponent = screen.getByTestId('loading-indicator');
    expect(loadingComponent).toBeTruthy();

    const listComponent = await screen.findByTestId('location-list');
    expect(listComponent).toBeTruthy();
  });

  it('when an item from the location list is press, should go to DetailScreen with the location id', async () => {
    const mock = jest.spyOn(axiosClient, 'requestSecureGet');
    mock.mockReturnValue(Promise.resolve(mockLocationResponse));
    const mockNavigate = jest.fn();
    const navigation = {
      ...mockNavigation,
      navigate: mockNavigate,
    };
    render(
      <QueryClienWrapper>
        <HomeScreen navigation={navigation} />
      </QueryClienWrapper>,
    );

    const listComponent = await screen.findByTestId('location-list');
    expect(listComponent).toBeTruthy();

    const listItemComponent = await screen.findByText(
      mockLocationResponse.list[0].name,
    );
    fireEvent.press(listItemComponent);
    expect(mockNavigate).toBeCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('DetailScreen', {
      id: mockLocationResponse.list[0].id,
    });
  });
});
