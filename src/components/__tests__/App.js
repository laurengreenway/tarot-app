import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('<App />', () => {
    it('mounts without crashing', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.length).to.equal(1);
    });
});
