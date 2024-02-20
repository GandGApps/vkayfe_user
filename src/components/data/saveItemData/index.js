import character from '../../../assets/images/deniedMonster.png';
import {
  AddName,
  AddScreenName,
  Colors,
  HomeScreenName,
} from '../../../constants';
import {globalHeight} from '../../dimensions';

export const SaveItemData = {
  character,
  back: false,
  choose: false,
  navigationName: AddScreenName,
  btnText: 'Нет',
  title: 'Удалить товар?',
  deleteText: 'Да',
  deleteBtnStyle: {
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
