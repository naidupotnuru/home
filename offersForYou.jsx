import React from "react";
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Text as RNText } from "react-native";
import { Styles } from "../../../styles/styles";
import Text from '../../../components/Text';

const OffersForYou = (isDarkMode) => {
    const styles = Styles(isDarkMode);
    const offers = [
        {
            id: '0',
            image: require('../../../assets/offer1.png'),
            offer: '-30%'
        },
        {
            id: '1',
            image: require('../../../assets/offer2.png'),
            offer: '-40%'
        },
        {
            id: '2',
            image: require('../../../assets/offer3.png'),
            offer: '-20%'
        },
        {
            id: '3',
            image: require('../../../assets/offer4.png'),
            offer: '-40%'
        },
    ];
    return (
        <View style={{ marginHorizontal: 20 , marginTop : 20}}>
            <Text style={styles.ofySectionTitle} i18nKey={'userHomePage-OffersForYou'} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {offers.map((item, index) => (
                    <View key={item.id}>
                        <TouchableOpacity style={{ paddingRight: 18, marginTop: 5 }}>
                            <Image source={item.image} style={styles.ofyImage} />
                            <RNText style={styles.ofyOfferText}>{item.offer}</RNText>

                            <Text style={styles.ofyName} i18nKey={'userHomePage-RestaurantName'} />
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../../assets/star.png')} style={styles.ofyStar} />
                                <Text style={styles.ofyRating} i18nKey={'userHomePage-Reviews'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
                }
            </ScrollView >
        </View >
    )
}


export default OffersForYou;