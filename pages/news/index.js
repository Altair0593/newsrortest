import Content from 'components/Content/Content';
import { getDefaultNews } from 'redux/actions/actions';
import { dispatchRequest } from 'helpers/newsHelpers';
import { getNewsStore } from 'redux/selectors/news';

const NewsPage = () => <Content/>;

NewsPage.getInitialProps = async (ctx) => {
  try {
    dispatchRequest(ctx, getDefaultNews)();
    return true;
  } catch (e) {
    return false;
  }
};

export default NewsPage;
