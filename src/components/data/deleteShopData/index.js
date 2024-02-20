import {Colors, PromotionServicesName, SignupName} from '../../../constants';
import character from '../../../assets/images/deniedMonster.png';
import {globalHeight} from '../../dimensions';

export const DeleteShopData = {
  character,
  back: false,
  choose: false,
  navigationName: PromotionServicesName,
  btnText: 'Нет',
  title: 'Удалить значимую дату?',
  deleteText: 'Да',
  deleteBtnStyle: {
    // backgroundColor:Colors.red,
    marginBottom: globalHeight(7),
  },
  styleBtn: {
    borderWidth: 1,
    backgroundColor: 'white',
    color: Colors.titleColor,
  },
  styleBtnText: {
    color: Colors.black,
  },
};
