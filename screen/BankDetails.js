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
                <View style={{ flexDirection: "row" }} >
                    <Icon name="chevron-left" size={20} color="white" style={styles.icon} />
                    <Text style={styles.TextAboveCard} >معلومات حسابي البنكي</Text>
                </View>

                <Image style={styles.Card} source={require("../assets/Card.png")} />
                <View style={styles.formContainer} >
                    <ScrollView style={styles.scrollView}>
                        {form.map((feild, i) => (
                            <View key={i} style={[styles.inputFeildContainer, focus == feild.name ? { borderColor: "#fcb445", borderWidth: 2 } : null]} >
                                {feild.icon && <Icon name={feild.icon} size={20} color={focus == feild.name ? "#fcb445" : "#d3d3d3"} style={styles.icon} />}
                                <Input
                                    style={styles.inputFeildText}
                                    onFocus={() => this.setState({ focus: feild.name })}
                                />
                                <Text style={[styles.placeHolderText, focus == feild.name ? { color: "black" } : { color: "#d3d3d3" }]} >{feild.name}</Text>
                            </View>
                        ))
                        }

                        <Image style={styles.textAboveButton} source={require("../assets/bankDetailsAboveButtonText.png")} />
                        <TouchableOpacity style={styles.submitButton} onPress={() => console.log("submit button clicked")} >
                            <Text style={styles.buttonText}>التالي</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
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
        top: 130,
    },

    formContainer: {
        marginTop: 250,
        marginLeft: "14%",
        width: "100%",
    },

    scrollView: {
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
        justifyContent: "center"
    },
})


export default BankDetails;