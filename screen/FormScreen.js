// @flow 
import React, { Component } from 'react';
import { Image, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Input } from "native-base"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const form = [
    {
        name: "الاسم",
        icon: "pencil",
    },
    {
        name: "رقم الجوال",
    },
    {
        name: "الجنس",
        icon: "menu-swap-outline",
    },
    {
        name: "صورة من الهوية",
        icon: "camera",
    },
    {
        name: "صورة من الرخصة",
        icon: "camera",
    },
    {
        name: "صورة من استمارة السيارة",
        icon: "camera",
    },
    {
        name: "كلمة المرور",
    },
    {
        name: "إعادة كلمة المرور",
    },
]

class FormScreen extends Component {

    state = {
        focus: ""
    }

    render() {
        const { focus } = this.state;
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../assets/test.png")} />
                <Image style={styles.name} source={require("../assets/t1.png")} />
                <View style={styles.formContainer} >
                    <ScrollView style={styles.scrollView}>
                        {form.map((feild, i) => (
                            <View key={i} style={[styles.inputFeildContainer, focus == feild.name ? { borderColor: "#fcb445", borderWidth: 2 } : null]} >
                                {feild.icon && <Icon name={feild.icon} size={20} color={focus == feild.name ? "#fcb445" : "#d3d3d3"} style={styles.icon} />}
                                <Input
                                    style={styles.inputFeildText}
                                    onFocus={() => this.setState({ focus: feild.name })}
                                    placeholder={feild.name}
                                    placeholderTextColor="#d3d3d3"
                                />
                                {/* <Text style={[styles.placeHolderText, focus == feild.name ? { color: "black" } : { color: "#d3d3d3" }]} >{feild.name}</Text> */}
                            </View>
                        ))
                        }

                        <Text style={styles.textAboveButton}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indust</Text>
                        <TouchableOpacity style={styles.submitButton} onPress={() => this.props.navigation.navigate("BankDetails")} >
                            <Text style={styles.buttonText}>submit</Text>
                        </TouchableOpacity>
                        <Text style={styles.textBelowButton}>Lorem Ipsum is simply text of the</Text>
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
    logo: {
        position: "absolute",
        top: 80
    },
    name: {
        position: "absolute",
        top: 180
    },
    placeholderPng: {
        width: 60,
        height: 20
    },

    formContainer: {
        marginTop: 230,
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
        width: "85%",
        backgroundColor: "red"
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
        fontSize: 22
    },

    buttonText: {
        fontSize: 18,
    },
    textAboveButton: {
        color: "white",
        marginLeft: -30,
        marginTop: 15,
        marginBottom: 25,
        width: "80%",
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

})


export default FormScreen;