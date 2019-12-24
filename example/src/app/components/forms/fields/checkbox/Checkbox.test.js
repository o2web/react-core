import React from 'react';
import { shallow } from 'enzyme';
import { jest } from 'jest';
// import { Provider } from 'react-redux';
// import configureMockStore from 'redux-mock-store';
import Checkbox from './Checkbox';

// Enzyme adapter
import '../../../../../setupTests';

// config mock store
// const mockStore = configureMockStore();
// const store = mockStore({});

const myMockFunction = jest.fn();

describe('Test Checkbox', () => {
  it('renders correctly', () => {
    const item = shallow(
      <Checkbox
        name="demo"
      />,
    );
    expect(item).toMatchSnapshot();
  });
});
