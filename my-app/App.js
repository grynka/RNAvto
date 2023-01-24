import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecurity, setIsSecurity] = useState(true);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  return (
    <TouchableWithoutFeedback onPress={{}}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/images/BG.jpg")}
      >
        <View style={styles.container}>
            <View style={styles.form}>
              <Text style={styles.title}>Войти</Text>
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Адрес электронной почты"
                style={styles.inputName}
                //  onFocus={{}}
              />
              <View style={styles.inputContainer}>
                <TextInput
                  value={password}
                  onChangeText={passwordHandler}
                  placeholder="Пароль"
                  secureTextEntry={isSecurity}
                  style={styles.input}
                  // onFocus={{}}
                />
                <Pressable
                  onPress={() => {
                    setIsSecurity((prev) => !prev);
                  }}
                >
                  <Text style={styles.showPass}>
                    {isSecurity ? "Показать" : "Скрыть"}
                  </Text>
                </Pressable>
              </View>
              <View style={{}}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.loginButton}
                  onPress={{}}
                >
                  <Text style={styles.loginButtonText}>Войти</Text>
                </TouchableOpacity>
                <View style={styles.containerNoRegister}>
                  <Text style={styles.noRegister}>Нет акаунта? </Text>
                  <Pressable onPress={{}}>
                    <Text style={styles.noRegister}> Зарегистрироваться</Text>
                  </Pressable>
                </View>
              </View>
            </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 340,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    paddingVertical: 32,
    fontFamily: "Roboto-Medium",
  },

  form: {
    alignSelf: "stretch",
  },

  inputName: {
    borderRadius: 8,
    borderWidth: 1,
    padding: 16,
    height: 50,
    borderColor: "#E8E8E8",
    marginBottom: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto-Medium",

  },

  inputContainer: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  input: {
    height: 50,
    padding: 16,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    width: "80%",
  },

  showPass: {
    color: '#1B4371',
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },

  loginButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginHorizontal: 16,
    marginBottom: 16,
    marginTop: 43,
    marginTop: 27,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto-Medium",
  },

  noRegister: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
    fontSize: 16,
  },

  containerNoRegister: {
    flexDirection: "row",
    justifyContent: "center",
  },

});
