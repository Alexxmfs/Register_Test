import React from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native'
import SignupForm from '../components/signupScreen/SignForm';
import { COLORS, SIZES, assets, FONTS, SHADOWS } from '../../constants';
import { CircleButton, ButtonCreateAccount } from '../components/Button';
import LottieView from 'lottie-react-native';

const INSTAGRAM_LOGO =
'https://marcas-logos.net/wp-content/uploads/2020/01/instagram_icon_logo.png';

const SignupScreen = (props) => (
<View style={styles.container}>
    <ScrollView>
    <View style={styles.circleButton}>
        <CircleButton 
         imgUrl = {assets.next}
         onPress={() => props.navigation.navigate("RegistryScreen")}
        />
     </View>
        <View>
            <View style={{ marginBottom: -10, marginLeft: 20}}>
            <Text style={styles.text}>Criar</Text>
            </View>
            <View style={{ marginLeft: 20}}>
                <Text style={styles.text}>Conta</Text>
            </View>
        </View>
        <View style={styles.logoContainer}>
            <LottieView 
            source={assets.animationSignUp}
            autoPlay={true}
            Loop={false}
            style={{width: 350, height: 350, marginTop: -45}}
            />
        </View>
        <SignupForm props={props}/>
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
        marginTop: -20
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
        justifyContent: 'center',
    },
    text: {
        fontSize: SIZES.extraLarge + 15,
        fontWeight: '700'
    },
    circleButton: {
        marginTop: 20,
        right: 310,
        transform: [{ rotate: "180deg"}]
    }
})

export default SignupScreen