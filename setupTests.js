import { mount, shallow, configure } from 'enzyme';
import sinon from 'sinon';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';
import { JSDOM } from 'jsdom';
import localStorage from 'localStorage';
import IntlPolyfill from 'intl';
import { IntlProvider, createIntl } from 'react-intl';
import { Provider } from 'react-redux';
import messages from './managers/locales/message/en-Us';

const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><head></head><body></body></html>`);

global.window = dom.window;
global.document = dom.window.document;

global.navigator = {
  userAgent: 'node.js',
  javaEnabled: () => true,
};

global.localStorage = localStorage;

global.Intl = IntlPolyfill;
// ------------------
// React
// ------------------
global.React = React;
global.ReactDOM = ReactDOM;
global.PropTypes = PropTypes;

// ------------------
// Sinon
// ------------------
global.sinon = sinon;
// ------------------
// Enzyme
// ------------------
configure({ adapter: new Adapter() });
global.mount = mount;
global.shallow = shallow;
// Render Styled Component
global.getTreeSC = StyledComponent => renderer.create(StyledComponent).toJSON();

global.createSnapshot = Component => {
  const wrapper = shallow(Component);
  expect(wrapper).toMatchSnapshot();
};

global.shalowRender = Component => {
  return shallow(Component);
};

global.mountRender = Component => {
  return mount(Component);
};

global.mountSmart = (component, store) => {
  const intl = createIntl(
    {
      locale: 'en',
      defaultLocale: 'en',
      messages: messages['en-Us'],
    }
  );

  const core = store
    ? <Provider store={store}>{component}</Provider>
    : component;

  return mount(
    core,
    {
      wrappingComponent: IntlProvider,
      wrappingComponentProps: intl,
    });
};
