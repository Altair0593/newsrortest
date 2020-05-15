import { NotifyStyled } from './styled';

export const CustomNotify = () => {
  return (
    <NotifyStyled
      position='bottom-left'
      autoClose={5000}
      closeOnClick
      pauseOnVisibilityChange
      draggable
      pauseOnHover
    />
  );
};
