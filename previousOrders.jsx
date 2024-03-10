import React from "react";
import { StyleSheet, View, ScrollView, Image, TouchableOpacity , Text as RNText} from "react-native";
import { Styles } from "../../../styles/styles";
import Text from '../../../components/Text';

const PreviousOrders = (isDarkMode) => {
    const styles = Styles(isDarkMode);
    const orders = [
        {
            id: '0',
            image: require('../../../assets/pOrder1.png'),
            name: 'Pan Curry',
        },
        {
            id: '1',
            image: require('../../../assets/pOrder2.png'),
            name: 'Chicken Roa..',
        },
        {
            id: '2',
            image: require('../../../assets/pOrder3.png'),
            name: 'Bread Toast..',
        }, {
            id: '3',
            image: require('../../../assets/pOrder1.png'),
            name: 'Pan Curry',
        },
        {
            id: '4',
            image: require('../../../assets/pOrder1.png'),
            name: 'Pan Curry',
        },
    ];
    return (
        <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.poSectionTitle} i18nKey={'userHomePage-PreviousOrders'} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {orders.map((item, index) => (
                    <View style={{alignItems:'center', justifyContent:'center'}} key={item.id}>
                        <TouchableOpacity style={{ marginRight : 18, marginTop: 5 }}>
                            <Image source={item.image} style={styles.poImage} />
                        </TouchableOpacity>
                        <RNText style={styles.poItemName}>{item.name}</RNText>
                        <TouchableOpacity style={{width : '80%', height : 22, borderRadius : 8, backgroundColor : '#E13535',marginRight : 15,  alignItems:'center', justifyContent:'center'}}>
                            <Text style={styles.poButtonText} i18nKey={'userHomePage-OrderAgain'} />
                        </TouchableOpacity>

                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default PreviousOrders;

