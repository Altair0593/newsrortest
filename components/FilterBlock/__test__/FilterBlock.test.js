import FilterBlock from '../FilterBlock.js';
import { ElementContainerBlock, ElementContainer, defaultStyles } from '../styled.js';

describe('FilterBlock', () => {
  let props = null;
  beforeEach(() => {
    props = {
      languagePickerButtons: ['languagePickerButtons'],
      dateFrom: 'dateFrom',
      dateTo: 'dateTo',
      datePickerInputs: ['datePickerInputs'],
      datePickerButton: { datePickerButton: 'datePickerButton' },
    };
  });

  it('FilterBlock render correct', () => {
    createSnapshot(<FilterBlock {...props}/>);
  });
});

describe('ElementContainer styled components', () => {
  const props = {
    elContainerWidth: '12px',
    elContainerMargin: '0 auto',
  };

  it('ElementContainer should have correct styles when all props were transferred', () => {
    const component = getTreeSC(<ElementContainer {...props}/>);

    expect(component).toHaveStyleRule('width', '12px');
    expect(component).toHaveStyleRule('margin', '0 auto');
  });
});

describe('ElementContainer styled components', () => {
  const props = {
    elContainerWidth: '12px',
    elContainerMargin: '0 auto',
  };

  it('ElementContainer should have correct styles when all props were transferred', () => {
    const component = getTreeSC(<ElementContainer {...props}/>);

    expect(component).toHaveStyleRule('width', '12px');
    expect(component).toHaveStyleRule('margin', '0 auto');
  });

  it('ElementContainer should have default styles when all props weren\'t transferred', () => {
    const component = getTreeSC(<ElementContainer/>);

    expect(component).toHaveStyleRule('width', defaultStyles.elContainerWidthDefault);
    expect(component).toHaveStyleRule('margin', defaultStyles.elContainerMarginDefault);
  });
});

describe('ElementContainerBlock styled components', () => {
  const props = {
    elContainerBlockWidth: '12px',
  };

  it('ElementContainerBlock should have correct styles when all props were transferred', () => {
    const component = getTreeSC(<ElementContainerBlock {...props}/>);

    expect(component).toHaveStyleRule('width', '12px');
  });

  it('ElementContainerBlock should have default styles when all props weren\'t transferred', () => {
    const component = getTreeSC(<ElementContainerBlock/>);

    expect(component).toHaveStyleRule('width', defaultStyles.elContainerWidthDefault);
  });
});
