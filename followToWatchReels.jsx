import React from "react";
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, Button } from "react-native";
import { Styles } from '../../../styles/styles';
import Text from '../../../components/Text';

const FollowToWatchReels = (isDarkMode) => {
    const styles = Styles(isDarkMode);
    const profiles = [
        {
            id: '0',
            image: require('../../../assets/profileImage1.png'),
        },
        {
            id: '1',
            image: require('../../../assets/profileImage1.png'),
        },
        {
            id: '2',
            image: require('../../../assets/profileImage1.png'),
        },
        {
            id: '3',
            image: require('../../../assets/profileImage1.png'),
        },
        {
            id: '4',
            image: require('../../../assets/profileImage1.png'),
        },
        {
            id: '5',
            image: require('../../../assets/profileImage1.png'),
        },
        {
            id: '6',
            image: require('../../../assets/profileImage1.png'),
        },
    ];
    return (
        <View style={{ marginHorizontal: 20 }}>
            <Text style={styles.ftwrSectionTitle} i18nKey={'userHomePage-FollowToWatchReels'} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {profiles.map((item, index) => (
                    
                    <View style={{marginLeft :index !== 0 ?  10 : 0}} key={item.id}>
                        <TouchableOpacity style={{ paddingRight: 35, marginTop: 5 }}>
                            <Image source={item.image} style={styles.ftwrImage} />
                        </TouchableOpacity>
                        <Text style={{ ...styles.ftwrText, fontFamily: 'Poppins-SemiBold' }} i18nKey={'userHomePage-ChannelName'} />
                        <Text style={{ ...styles.ftwrText, fontFamily: 'Poppins-Light', marginTop: -3, marginRight : 30, textAlign:'center' }} i18nKey={'userHomePage-followers'} />
                        <TouchableOpacity>
                            <Text style={[styles.ftwrButtonText, {marginLeft : 8}]} i18nKey={'userHomePage-Follow'} />
                        </TouchableOpacity>
                    </View>
                ))
                }
            </ScrollView >
        </View >
    )
}

export default FollowToWatchReels;