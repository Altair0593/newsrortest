import CategoryItem from '../CategoryItem';
import { StyledFlexDiv, ContainerWithBrRadius, CategoryCardWrapper } from 'components/Content/styled';
import { Title } from 'styled';

describe('CategoryItem', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      name: 'name',
      imageUrl: 'imageUrl',
      brRadius: 'brRadius',
      titleColor: 'titleColor',
      mainBgColor: 'mainBgColor',
      marginSmall: 'marginSmall',
      titleBgColor: 'titleBgColor',
      mainWrapWidth: 'mainWrapWidth',
      onClickCallback: jest.fn(() => true),
    };
  });

  beforeEach(() => {
    wrapper = shallow(<CategoryItem { ... props }/>);
  });

  it('FilterBlock render correct', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('CategoryCardWrapper mount render', () => {
    expect(wrapper.find(CategoryCardWrapper)).toHaveLength(1);
  });

  it('StyledFlexDiv mount render', () => {
    expect(wrapper.find(StyledFlexDiv)).toHaveLength(1);
  });

  it('ContainerWithBrRadius mount render', () => {
    expect(wrapper.find(ContainerWithBrRadius)).toHaveLength(1);
  });

  it('Title mount render', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });
});
