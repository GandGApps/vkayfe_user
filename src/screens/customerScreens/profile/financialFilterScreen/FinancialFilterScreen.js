import React, {useState} from 'react';
import {styles} from './styles';
import {ScrollView, Text, View} from 'react-native';
import {
  AppButton,
  BackButton,
  FilterData,
  FilterForm,
  SaveProfileData,
  WaitingForm,
} from '../../../../components';

import {Colors, globalStyles} from '../../../../constants';
import SelectDropdown from 'react-native-select-dropdown';

export const FinancialFilterScreen = ({navigation}) => {
  const [dropDownstate, setDropDownstate] = useState('');
  const [dataCategories, setDataCategories] = useState([
    {name: 'за месяц', id: 1},
    {name: 'за квартал', id: 2},
    {name: 'за полгода', id: 3},
    {name: 'за год', id: 3},
  ]);

  return (
    <View style={styles.container}>
      <View>
        <BackButton
          text={'Фильтры'}
          navigation={navigation}
          deleteAll
          stylesBack={styles.backContainer}
        />
        <View style={styles.containerCategory}>
          <Text
            style={[
              styles.titleCategory,
              globalStyles.titleText,
              globalStyles.textAlignLeft,
              styles.titleCategory,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
            ]}>
            Сортировка
          </Text>
          <ScrollView
            bounces={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
            {FilterData.map((item, index) => {
              return <FilterForm item={item} index={index} key={index} />;
            })}
          </ScrollView>
        </View>
        <View style={styles.containerCategory}>
          <Text
            style={[
              styles.titleCategory,
              globalStyles.titleText,
              globalStyles.textAlignLeft,
              styles.titleCategory,
              globalStyles.weightBold,
              globalStyles.titleTextSmall,
            ]}>
            По цене
          </Text>
          <View style={styles.dropCont}>
            <SelectDropdown
              data={dataCategories}
              buttonStyle={styles.btnStyleDrop}
              dropdownStyle={styles.categoryInput}
              defaultButtonText={'Сначала большая оплата'}
              rowTextStyle={styles.choosePhotoText}
              onSelect={selectedItem => {
                setDropDownstate(selectedItem.name);
              }}
              buttonTextAfterSelection={selectedItem => {
                return selectedItem.name;
              }}
              rowTextForSelection={selectedItem => {
                return selectedItem.name;
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.appButtonContainer}>
        <AppButton text={'Применить'} />
      </View>
    </View>
  );
};
