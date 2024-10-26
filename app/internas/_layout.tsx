import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    
    <Tabs 
      screenOptions={{
        // cor do cabeçalho
        headerStyle: {backgroundColor: "#F60"},
        // cor da tab bar
        tabBarStyle: {backgroundColor: "#070A52"},
        // centraliza o titulo do cabeçalho
        headerTitleAlign: "center",
        // cor do texto do cabeçalho
        headerTintColor: "#FFF",
        // define a cor do menu tab bar
        tabBarActiveTintColor: "#F60",
        // cor do icone inativo do tab bar
        tabBarInactiveTintColor: "#FFF"
       
      }}
    >
      <Tabs.Screen name="tasks" options={{ 
        headerTitle: "Tarefas",
        tabBarLabel: "Tarefas",
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="check-circle-outline" color={ color } size={32} />
        )
      }}/>
      
      <Tabs.Screen name="user" options={{ 
        headerTitle: "Dados do Usuário",
        tabBarLabel: "Dados Usuario",
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={ color } size={32} />
        )
        }} />

    <Tabs.Screen name="about" options={{
        headerTitle: "Sobre o aplicativo",
        tabBarLabel: "Sobre o app",
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="information-outline" color={ color } size={32} />
        )
      }} />
    </Tabs>
  );
}
