import { Tabs } from "expo-router";

export default function Layout() {
  return (
    
    <Tabs 
      screenOptions={{
        headerStyle: {backgroundColor: "#F60"},
        tabBarStyle: {backgroundColor: "070A52"},
        headerTitleAlign: 'center',
        headerTintrColor: '#FFF'
       
      }}
    >
      <Tabs.Screen name="tasks" options={{ 
        headerTitle: "Tarefas"
      }}/>
      
      <Tabs.Screen name="user" options={{ 
        headerTitle: "Dados do Usuário"
        }} />

    <Tabs.Screen name="about" options={{
        headerTitle: "Sobre o aplicativo"
        
     }}/>
    </Tabs>
  );
}
