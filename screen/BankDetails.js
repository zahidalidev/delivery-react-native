// @flow 
import React, { Component } from 'react';
import { Image, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Input } from "native-base"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const form = [
    {
        name: "بنك الراجحي",
        icon: "pencil",
    },
    {
        name: "KHALED AHMAD",
    },
    {
        name: "رقم الحساب",
    }
]

class BankDetails extends Component {

    state = {
        focus: ""
    }

    render() {
        const { focus } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={{ width: "100%" }} >
                    <View style={{ flexDirection: "row", marginBottom: 10, top: 60, marginLeft: 100 }} >
                        <Icon onPress={() => this.props.navigation.navigate("FormScreen")} name="chevron-left" size={20} color="white" style={styles.iconBack} />
                        <Text style={styles.TextAboveCard} >معلومات حسابي البنكي</Text>
                    </View>

                    <Image style={styles.Card} source={require("../assets/Card.png")} />
                    <View style={styles.formContainer} >
                        {form.map((feild, i) => (
                            <View key={i} style={[styles.inputFeildContainer, focus == feild.name ? { borderColor: "#fcb445", borderWidth: 2 } : null]} >
                                {feild.icon && <Icon name={feild.icon} size={20} color={focus == feild.name ? "#fcb445" : "#d3d3d3"} style={styles.icon} />}
                                <Input
                                    style={styles.inputFeildText}
                                    onFocus={() => this.setState({ focus: feild.name })}
                                    placeholder={feild.name}
                                />
                                {/* <Text style={[styles.placeHolderText, { color: "black" }]} ></Text> */}
                            </View>
                        ))
                        }

                        <Image style={styles.textAboveButton} source={require("../assets/bankDetailsAboveButtonText.png")} />
                        <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate("Otp")} >
                            <Text style={styles.buttonText}>التالي</Text>
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
    Card: {
        position: "absolute",
        top: 120,
        left: 15
    },

    formContainer: {
        marginTop: 310,
        marginLeft: "7%",
        width: "100%",
    },

    inputFeildContainer: {
        backgroundColor: "white",
        width: "85%",
        height: 50,
        borderRadius: 10,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center",
    },

    iconBack: {
        marginRight: -15,
        right: "110%",
        fontSize: 35
    },

    icon: {
        marginRight: 10
    },

    inputFeildText: {
        textAlign: "right",
        color: '#fcb445',
    },

    submitButton: {
        backgroundColor: "#fcb445",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "85%",
        marginVertical: 10
    },

    placeHolderText: {
        fontSize: 18
    },

    buttonText: {
        fontSize: 18,
    },
    textAboveButton: {
        marginLeft: -55,
        marginTop: 15,
        marginBottom: 25,
        alignSelf: "center",
        justifyContent: "center"
    },
    textBelowButton: {
        color: "white",
        marginLeft: -40,
        marginTop: 15,
        marginBottom: 25,
        width: "50%",
        alignSelf: "center",
        justifyContent: "center"
    },
    TextAboveCard: {
        color: "white",
        fontSize: 25,
        marginBottom: 45,
        alignSelf: "center",
        justifyContent: "center",
        marginRight: 30
    },
})


export default BankDetails;