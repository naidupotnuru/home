import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-paper';
import Text from '../../../components/Text';
import { Styles } from '../../../styles/styles';
import FollowToWatchReels from './followToWatchReels';
import OffersForYou from './offersForYou';
import PreviousOrders from './previousOrders';
const UserHomePage = (isDarkMode) => {
    const styles = Styles(isDarkMode);
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor : 'white' }}>
            <View style={{ height : 320, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: '#2C3142' }}>
                <View style={{ marginHorizontal: 20, marginTop : 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require("../../../assets/backIcon.png")} style={styles.uhpIcons} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require("../../../assets/locationIcon.png")} style={{ ...styles.uhpIcons, marginLeft: 20 }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'column', marginLeft: 10, position: 'absolute' }}>
                                <Text style={{ fontFamily: 'Poppins-SemiBold', color: 'white', fontSize: 12, marginLeft: 65 }} i18nKey={'userHomePage-Home'} />
                                <Text style={{ fontFamily: 'Poppins-Regular', color: '#757C94', fontSize: 8, marginBottom:5, marginLeft: 65 }} i18nKey={'userHomePage-Location'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Image source={require("../../../assets/qrCodeIcon.png")} style={{ ...styles.uhpIcons, marginRight: 25 }} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                 <Image source={require("../../../assets/notificationIcon.png")} style={styles.uhpIcons} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <View style={styles.uhpInner}>
                            <TouchableOpacity onPress={() => navigation.navigate('Pscreen')} style={{ right: 10 }}>
                                <Image source={require("../../../assets/profileImage1.png")} style={styles.uhpProfileImage} />
                            </TouchableOpacity>
                            <View style={{ width: '90%', height: 44, backgroundColor: 'white', flexDirection: 'row', borderRadius: 8, alignItems: 'center' }}>
                                <Image source={require("../../../assets/searchIcon.png")} style={{ ...styles.uhpInnerIcons }} />
                                <TextInput style={styles.uhpInnerTextField} placeholder='Search Food, Restaurants, People..' placeholderTextColor='#CCC6C6' numberOfLines={1} ellipsizeMode='tail' />


                            </View>
                            {/* <View style={styles.uhpInnerLine} />
                            <Image source={require("../../../assets/searchIcon.png")} style={{ ...styles.uhpInnerIcons, left: 53 }} />
                            <TextInput style={styles.uhpInnerTextField} placeholder='Search Food, Restaurants, People..' placeholderTextColor='#CCC6C6' numberOfLines={1} ellipsizeMode='tail' />
                            <Image source={require("../../../assets/microphoneIcon.png")} style={{ ...styles.uhpInnerIcons, right: 3 }} /> */}
                        </View>
                    </View>
                    <Divider style={styles.uhpDivider} />

                </View>
                <FollowToWatchReels />
            </View>
            <View style={{ flex: 0.57, backgroundColor: '#FFFFFF' }}>
                <PreviousOrders />
                <OffersForYou />
            </View>
        </View>

    )
}

export default UserHomePage;

