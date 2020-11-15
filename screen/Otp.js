// @flow 
import React, { Component } from 'react';
import { Image, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Input } from "native-base"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const form = [
    {
        name: "f1",
    },
    {
        name: "f2",
    },
    {
        name: "f3",
    },
    {
        name: "f4",
    },
    {
        name: "f5",
    }
]

class Otp extends Component {

    state = {
        focus: ""
    }

    render() {
        const { focus } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={{ top: 50 }} >

                    <View style={{ flexDirection: "row", left: 150 }} >
                        <Icon onPress={() => this.props.navigation.navigate("BankDetails")} name="chevron-left" size={20} color="white" style={styles.iconBack} />
                        <Image style={styles.TextAboveCard} source={require("../assets/otptitle.png")} />
                    </View>

                    <View style={{ top: 50, marginLeft: "25%" }} >
                        <Image style={styles.logo} source={require("../assets/test.png")} />
                        <View style={{ marginTop: 90 }} >
                            <Image style={{ marginLeft: -50 }} source={require("../assets/belowLogo1.png")} />
                            <Image style={{ marginTop: 20, marginLeft: -10 }} source={require("../assets/belowLogo2.png")} />
                        </View>
                    </View>


                    <View style={[styles.formContainer, { marginTop: 60, marginLeft: 20 }]} >
                        <View style={{ flex: 1, flexDirection: 'row' }} >
                            {form.map((feild, i) => (
                                <View key={i} style={[styles.inputFeildContainer, focus == feild.name ? { borderColor: "#fcb445", borderWidth: 2 } : null]} >
                                    <Input
                                        maxLength={1}
                                        keyboardType="number-pad"
                                        style={{ fontSize: 40, alignItems: "center", justifyContent: "center" }}
                                        onFocus={() => this.setState({ focus: feild.name })}
                                    />
                                </View>
                            ))
                            }
                        </View>

                        <Image style={styles.textAboveButton} source={require("../assets/aboveButtonText2.png")} />
                        <TouchableOpacity style={styles.submitButton} onPress={() => console.log("submit button clicked")} >
                            <Text style={styles.buttonText}>إرسال</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#29405A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        position: "absolute",
    },

    formContainer: {
        width: "100%",
    },

    scrollView: {
        width: "100%",
    },

    inputFeildContainer: {
        backgroundColor: "white",
        width: "13%",
        height: 65,
        margin: 10
    },

    iconBack: {
        right: "360%",
        fontSize: 35
    },

    icon: {
        marginRight: 10
    },

    submitButton: {
        backgroundColor: "#fcb445",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "85%",
        marginTop: 25
    },

    placeHolderText: {
        fontSize: 18
    },

    buttonText: {
        fontSize: 18,
    },
    textAboveButton: {
        marginTop: 15,
        alignSelf: "center",
        justifyContent: "center"
    },
    textBelowButton: {
        color: "white",
        marginLeft: -40,
        width: "50%",
        alignSelf: "center",
        justifyContent: "center"
    },
    TextAboveCard: {
        alignSelf: "center",
        justifyContent: "center",
        marginLeft: -30
    },
})


export default Otp;