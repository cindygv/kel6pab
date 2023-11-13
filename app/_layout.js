import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const noHead = { headerShown: false };

const StackLayout = () => {
    return (
        <GluestackUIProvider config={config}>
            <Stack>
                <Stack.Screen name="(tabs)" options={noHead} />
                <Stack.Screen name="kepanitiaan" options={noHead} />
                <Stack.Screen name="lomba" options={noHead} />
                <Stack.Screen name="ormawa" options={noHead} />
                <Stack.Screen name="ukm" options={noHead} />
                <Stack.Screen name="seminar" options={noHead} />
                <Stack.Screen name="bem" options={noHead} />
                <Stack.Screen name="hmsi" options={noHead} />
                <Stack.Screen name="hmti" options={noHead} />
                <Stack.Screen name="dpm" options={noHead} />
                <Stack.Screen name="penelitian" options={noHead} />
                <Stack.Screen name="login" options={noHead} />
                <Stack.Screen name="register" options={noHead} />
                <Stack.Screen name="ukki" options={noHead} />
            </Stack>
        </GluestackUIProvider>
    );
};

export default StackLayout;
