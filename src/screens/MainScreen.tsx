import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '@/misc/Colors';

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="bell" size={24} color={Colors.black} />
                </TouchableOpacity>
                <Text style={styles.headerText}>The Bible's Word</Text>
                <TouchableOpacity>
                    <FontAwesome name="gears" size={24} color={Colors.black} />
                </TouchableOpacity>
            </View>
            <View style={styles.wordDisplay}>
                <Text style={styles.wordText}>Home Screen Lorem</Text>
            </View>
            <View style={styles.action}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <FontAwesome
                            name="share-alt"
                            size={24}
                            color={Colors.black} />
                        <Text>
                            Share
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Text>
                            Favorites
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <FontAwesome
                            name="clock-o"
                            size={24}
                            color={Colors.black} />
                        <Text>
                            Reminder
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <View style={styles.directionButton}>
                        <FontAwesome name="arrow-left" size={24} color={Colors.black} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.directionButton}>
                        <FontAwesome name="arrow-right" size={24} color={Colors.black} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.almostWhite,
        alignItems: 'center',
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#a9ddfe',
        width: '100%',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black,
    },
    wordDisplay: {
        backgroundColor: Colors.white,
        width: '90%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        elevation: 1,
        borderRadius: 2,
    },
    wordText: {
        fontSize: 20,
        color: Colors.black,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginTop: '5%',
    },
    button: {
        backgroundColor: Colors.primary,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        padding: 10,
        elevation: 1,
        borderRadius: 2,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        padding: '5%',
        bottom: 0,
        backgroundColor: Colors.primary,
    },
    directionButton: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        padding: 10,
    },
});