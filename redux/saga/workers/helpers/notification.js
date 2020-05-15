import { toast } from 'react-toastify';

export const notificationSuccess = value => {
  toast.success(`🦖 ${value}`, {
    position: 'bottom-left',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const notificationError = value => {
  toast.error(`🙀 ${value}`, {
    position: 'bottom-left',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};