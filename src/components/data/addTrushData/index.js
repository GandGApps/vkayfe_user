import {
  AddName,
  AddScreenName,
  CreateShopName,
  HomeScreenName,
} from '../../../constants';
import character from '../../../assets/images/approvedMonster.png';
import {globalHeight} from '../../dimensions';
import {Colors} from '../../../constants';

export const AddTrushData = {
  character,
  choose: false,
  back: false,
  btnText: 'В корзину',
  navigationName: AddName,
  title: 'Товар добавлен в корзину!',
  deleteText: 'Продолжить покупки',
  deleteBtnStyle: {
    backgroundColor: 'transparent',
    marginBottom: globalHeight(7),
    borderWidth: 1,
  },
  styleBtnText: {
    color: Colors.white,
  },
  styleBtnTextDel: {
    color: Colors.black,
  },
};
