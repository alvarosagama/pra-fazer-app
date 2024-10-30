import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { auth } from '../../scripts/firebase-Config';
import { signOut } from 'firebase/auth';


export default function User() {
   
    const router = useRouter();

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            router.push("/");
          }).catch((error) => {
            // An error happened.
          });
          
    }
    
    
    return (
        <View style={styles.container}>
            <Text>Dados do Usuário</Text>
            
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})